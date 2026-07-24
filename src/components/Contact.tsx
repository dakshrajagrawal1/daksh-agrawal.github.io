"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Research",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus("submitting");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b35b880f-0298-4955-a4c9-3487d2abd7bc",
          name: formData.name,
          email: formData.email,
          inquiry_type: formData.type,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", type: "Research", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              Let's Build or Research Something <span className="text-accent italic">Great.</span>
            </h2>
            
            <p className="text-xl text-foreground/70 max-w-md mb-12">
              Whether you have a research proposal, a freelance project, or just want to say hi, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:daksh.agrawal903@gmail.com"
                className="hover-target flex items-center gap-4 text-lg font-medium group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                daksh.agrawal903@gmail.com
              </a>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://linkedin.com/in/daksh-raj-agrawal-b43b7b17b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>
            
            <div className="mt-16 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-border/50 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              I usually reply within 24 hours
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-foreground/80">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if(errors.name) setErrors({...errors, name: ""});
                    }}
                    className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-foreground/80">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if(errors.email) setErrors({...errors, email: ""});
                    }}
                    className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-foreground/80">Inquiry Type</label>
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {["Research", "Freelance", "Other"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, type})}
                      className={`py-2 px-2 text-sm font-medium rounded-lg transition-colors ${
                        formData.type === type 
                          ? "bg-accent text-white" 
                          : "bg-background border border-border text-foreground/70 hover:border-accent/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {/* Hidden input for EmailJS to pick up the type */}
                <input type="hidden" name="inquiry_type" value={formData.type} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-foreground/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({...formData, message: e.target.value});
                    if(errors.message) setErrors({...errors, message: ""});
                  }}
                  className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none`}
                  placeholder="Tell me about your project or research..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="hover-target w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed
                  bg-foreground text-background hover:bg-accent hover:text-white"
              >
                {status === "idle" || status === "error" ? (
                  <>Send Message <Send size={18} /></>
                ) : status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>Message Sent! <CheckCircle2 size={18} className="text-green-400" /></>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-2 flex items-center justify-center gap-1">
                  <AlertCircle size={14} /> Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
