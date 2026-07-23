"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Code2 } from "lucide-react";

export default function Skills() {
  const primarySkills = [
    "Quantum Machine Learning",
    "Algorithm Optimization",
    "Data Structures & Algorithms",
    "Systems Modeling",
    "Object-Oriented Programming"
  ];

  const secondarySkills = [
    "Full-Stack Web Development",
    "UI/UX Design",
    "Database Management",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "C++"
  ];

  const certifications = [
    { name: "Ethical Hacking & Cybersecurity", issuer: "Technoking Raipur", icon: Shield },
    { name: "Entrepreneurship", issuer: "E-Cell IIT Kharagpur", icon: Lightbulb },
  ];

  // Infinite marquee variants
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const reverseMarqueeVariants = {
    animate: {
      x: [-1035, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="skills" className="py-32 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="text-accent italic">Expertise</span>
          </h2>
        </motion.div>

        {/* 3D Floating Cards for Primary Skills (Simulated with hover effects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-24">
          <motion.div 
            className="group perspective-1000"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border p-8 rounded-2xl h-full shadow-lg transition-transform duration-500 transform-gpu group-hover:rotate-y-12 group-hover:rotate-x-12 group-hover:scale-105">
              <Code2 className="text-accent mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Core CS & Algorithms</h3>
              <p className="text-foreground/70">Data Structures, Algorithm Optimization, OOPs, Systems Modeling.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="group perspective-1000"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border p-8 rounded-2xl h-full shadow-lg transition-transform duration-500 transform-gpu group-hover:-rotate-y-12 group-hover:rotate-x-12 group-hover:scale-105">
              <div className="text-accent mb-6 font-heading font-bold text-3xl">QML</div>
              <h3 className="text-xl font-bold mb-4">Quantum Machine Learning</h3>
              <p className="text-foreground/70">Building QML architectures for high-dimensional data classification.</p>
            </div>
          </motion.div>

          <motion.div 
            className="group perspective-1000"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card border border-border p-8 rounded-2xl h-full shadow-lg transition-transform duration-500 transform-gpu group-hover:rotate-y-12 group-hover:-rotate-x-12 group-hover:scale-105">
              <div className="flex gap-2 mb-6 text-accent">
                <span className="font-mono bg-accent/10 px-2 py-1 rounded">Web</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Stack Development</h3>
              <p className="text-foreground/70">Responsive, data-driven web applications and clean UI/UX design.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquees */}
      <div className="relative py-8 flex flex-col gap-6 -rotate-2 scale-105 bg-card border-y border-border shadow-xl">
        {/* Primary Skills Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden w-[200vw]">
          <motion.div
            className="flex items-center gap-8 px-4"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...primarySkills, ...primarySkills, ...primarySkills].map((skill, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground/80 to-foreground/40 uppercase tracking-wider">
                  {skill}
                </span>
                <span className="text-accent text-3xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Secondary Skills Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden w-[200vw]">
          <motion.div
            className="flex items-center gap-8 px-4"
            variants={reverseMarqueeVariants}
            animate="animate"
          >
            {[...secondarySkills, ...secondarySkills, ...secondarySkills].map((skill, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-xl md:text-2xl font-mono text-foreground/60">
                  {skill}
                </span>
                <span className="w-2 h-2 rounded-full bg-border" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <h3 className="font-heading text-2xl font-bold mb-8 text-center">Certifications</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-4 bg-background border border-border px-6 py-4 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <cert.icon size={20} />
              </div>
              <div>
                <p className="font-bold text-sm md:text-base">{cert.name}</p>
                <p className="text-xs text-foreground/60">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
