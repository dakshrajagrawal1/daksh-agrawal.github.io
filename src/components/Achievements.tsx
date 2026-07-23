"use client";

import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Star } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon (SIH)",
      subtitle: "College Level, 2023 & 2024",
      icon: Trophy,
      delay: 0.1,
    },
    {
      title: "Google DevFest Attendee",
      subtitle: "2023, 2024, 2025",
      icon: Star,
      delay: 0.2,
    },
    {
      title: "BDA 2026 Paper",
      subtitle: "Under Peer Review",
      icon: BookOpen,
      delay: 0.3,
      highlight: true,
    },
    {
      title: "Academic Excellence",
      subtitle: "Consistently top percentile",
      icon: Award,
      delay: 0.4,
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-accent italic">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className={`relative p-8 rounded-2xl border flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 ${
                item.highlight 
                  ? "bg-accent/5 border-accent shadow-[0_0_30px_-5px_var(--color-accent)]" 
                  : "bg-background border-border hover:border-accent/50"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              {item.highlight && (
                <div className="absolute -top-3 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full animate-pulse">
                  FEATURED
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                item.highlight ? "bg-accent text-white" : "bg-border/50 text-foreground"
              }`}>
                <item.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
