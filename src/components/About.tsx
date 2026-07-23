"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const education = [
    {
      degree: "B.Tech Computer Science",
      institution: "GEC Raipur",
      period: "2023–2027",
      grade: "Pursuing",
    },
    {
      degree: "Class 12",
      institution: "Ryan International School",
      period: "2023",
      grade: "Completed",
    },
    {
      degree: "Class 10",
      institution: "Agarwal Public School",
      period: "2021",
      grade: "Completed",
    },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Left: Sticky Narrative */}
          <div className="md:w-1/2">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8">
                  The <span className="text-accent italic">Story</span>
                </h2>
                
                <div className="space-y-6 text-lg text-foreground/80">
                  <p>
                    I'm an analytical Computer Science undergraduate deeply passionate about 
                    <strong className="text-foreground"> Machine Learning, Quantum ML, and building scalable tech.</strong>
                  </p>
                  <p>
                    My approach is research-first. I don't just write code; I model systems, 
                    optimize algorithms, and seek out real-world impact. Whether I'm analyzing NASA 
                    datasets or architecting a healthcare web platform, my focus remains on 
                    creating elegant solutions to complex problems.
                  </p>
                  <div className="pt-6 border-t border-border mt-8">
                    <p className="text-sm font-mono text-foreground/50 uppercase tracking-widest mb-4">Fun Facts</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        I love astrology (I see it as pattern recognition in the stars).
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Competitive badminton player.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Education Timeline */}
          <div className="md:w-1/2">
            <motion.div style={{ y }} className="pt-12 md:pt-32">
              <h3 className="font-heading text-2xl font-bold mb-12 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-accent" />
                Education Timeline
              </h3>

              <div className="relative border-l border-border ml-3 space-y-12">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-background border-2 border-accent" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <span className="text-sm font-mono text-foreground/50 bg-border/50 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-foreground/70 mb-2">{edu.institution}</p>
                    <p className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {edu.grade}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
