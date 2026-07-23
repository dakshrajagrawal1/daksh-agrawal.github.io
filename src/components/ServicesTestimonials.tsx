"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Smartphone, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Custom responsive web applications with performance-optimized, clean code architecture. Ideal for startups, healthcare, and small businesses.",
      icon: Code,
      deliverables: "Design + Development + Deployment",
      timeline: "2–4 weeks",
    }
  ];

  const testimonials = [
    {
      quote: "Daksh's ability to translate complex healthcare requirements into a clean, transparent web interface was exceptional. His technical leadership elevated our entire platform.",
      author: "Dr Chandan Agrawal",
      company: "Director NHPL",
    },
    {
      quote: "The club management platform Daksh built revolutionized how we handle our members and schedules. Highly recommended for any organization needing robust digital metrics.",
      author: "Gopal Agrawal",
      company: "ECC",
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-background px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Services Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold">
              Project <span className="text-accent italic">Collaboration</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                className="bg-card border border-border p-8 md:p-12 rounded-3xl group hover:border-accent transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold uppercase tracking-wider text-accent">Deliverables</span>
                    <span className="text-foreground/80 font-medium">{service.deliverables}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold uppercase tracking-wider text-accent">Timeline</span>
                    <span className="text-foreground/80 font-medium">{service.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div
              className="bg-accent text-white p-8 md:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10">
                Have a project in mind?
              </h3>
              <p className="text-white/80 text-lg mb-8 relative z-10">
                Let's collaborate to build something extraordinary. I'm currently taking on select projects for 2025.
              </p>
              <a 
                href="#contact"
                className="hover-target inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-bold rounded-full w-fit hover:scale-105 transition-transform shadow-lg relative z-10"
              >
                Start a Conversation
              </a>
            </motion.div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold">
              Client <span className="text-accent italic">Feedback</span>
            </h2>
            <div className="flex gap-4">
              <button onClick={prevTestimonial} className="hover-target w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="hover-target w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-card border border-border p-8 md:p-16 rounded-3xl relative">
                  <Quote className="absolute top-8 right-8 text-border opacity-50" size={80} />
                  <p className="text-xl md:text-3xl font-medium leading-relaxed text-foreground/90 mb-12 relative z-10 max-w-4xl">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                      {testimonials[activeTestimonial].author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[activeTestimonial].author}</h4>
                      <p className="text-foreground/60">{testimonials[activeTestimonial].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
