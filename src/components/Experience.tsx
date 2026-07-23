"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Megaphone, HeartHandshake } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Independent Researcher",
      company: "Real-time grading & tensile strength estimation of cotton fabrics",
      period: "Ongoing",
      description: "Developing ML algorithms to evaluate cotton fabric quality in real-time.",
      icon: Briefcase,
    }
  ];

  const leadership = [
    {
      role: "TPO Member",
      org: "GEC Raipur",
      period: "2024 – Present",
      description: "Corporate relations and peer career readiness.",
      icon: Briefcase,
    },
    {
      role: "Joint Secretary",
      org: "ABVP",
      period: "Dec 2024 – Present",
      description: "Team management and campus operations.",
      icon: Users,
    },
    {
      role: "Media Executive",
      org: "Code For Community",
      period: "Sept 2024 – Present",
      description: "Tech outreach & coding initiatives.",
      icon: Megaphone,
    },
    {
      role: "NSS Volunteer",
      org: "7-Day Residential Camp",
      period: "Dec 2023",
      description: "Community service and social impact activities.",
      icon: HeartHandshake,
    }
  ];

  return (
    <section className="py-32 bg-background relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Other Experience */}
        <div>
          <motion.h2 
            className="font-heading text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
            <span className="text-accent">.</span>
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                className="relative pl-8 border-l border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-accent">
                  <exp.icon size={14} />
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl rounded-tl-none hover:shadow-md transition-shadow">
                  <span className="text-sm font-mono text-accent mb-2 inline-block">{exp.period}</span>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <h4 className="text-foreground/60 mb-4">{exp.company}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Campus Leadership */}
        <div>
          <motion.h2 
            className="font-heading text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leadership
            <span className="text-accent">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leadership.map((item, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border p-6 rounded-2xl group hover:border-accent transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.role}</h3>
                <h4 className="text-sm text-accent mb-3 font-medium">{item.org}</h4>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
