"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjust depending on number of projects

  const projects = [
    {
      title: "Neutrifill Healthcare",
      role: "Technical Lead & Developer",
      description: "End-to-end responsive web application for Neutrifill Healthcare Pvt. Ltd. Focused on health sector information systems, secure data delivery, and transparent UI.",
      tags: ["Healthcare", "Full-Stack", "Next.js", "Tailwind"],
      color: "bg-blue-500/10",
      link: "#"
    },
    {
      title: "Elite Cricket Club",
      role: "Web Developer & System Architect",
      description: "Dynamic club management platform featuring member indexing, digital metrics, and operational scheduling for a premier sports club.",
      tags: ["Sports Management", "Full-Stack", "React", "Node.js"],
      color: "bg-indigo-500/10",
      link: "#"
    },
    {
      title: "Upcoming Project",
      role: "ML Researcher",
      description: "Working on scalable machine learning architectures. Details will be updated soon.",
      tags: ["Machine Learning", "Python", "Data Science"],
      color: "bg-purple-500/10",
      link: "#"
    }
  ];

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold">
              Featured <span className="text-accent italic">Work</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center gap-4 text-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono uppercase tracking-widest">Scroll</span>
            <ArrowRight size={20} className="animate-pulse" />
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[300vw] md:w-[200vw]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[45vw] lg:w-[35vw] h-[60vh] shrink-0 relative group"
            >
              {/* Card Background */}
              <div className={`absolute inset-0 rounded-3xl ${project.color} border border-border overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]`}>
                {/* Abstract graphic placeholder */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-background/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col p-8 md:p-10 justify-between z-10">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-3 py-1 bg-background text-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {project.role}
                      </span>
                      <a 
                        href={project.link}
                        className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:bg-accent hover:text-white transition-colors hover-target"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">{project.title}</h3>
                    
                    <p className="text-foreground/70 text-lg md:text-xl line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-background/50 backdrop-blur-sm border border-border text-foreground/80 text-sm font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
