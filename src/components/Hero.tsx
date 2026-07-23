"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax effect for the portrait
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      
      const imageContainer = containerRef.current.querySelector(".parallax-img") as HTMLElement;
      if (imageContainer) {
        imageContainer.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10 items-center">
        
        {/* Left Content */}
        <motion.div 
          style={{ y: y1, opacity }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-border/50 border border-border text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to Research Roles & Freelance — 2025
          </motion.div>

          <motion.h1 
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            Daksh Raj<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">Agrawal</span><span className="text-accent">.</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-foreground/80 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CS Undergrad · ML Researcher · Quantum Computing Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/60 max-w-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            "Building the Future — One Algorithm at a Time"
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="hover-target group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all hover:bg-accent hover:text-white"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="hover-target flex items-center gap-2 px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-medium transition-all hover:border-accent hover:text-accent"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Right Portrait */}
        <motion.div
          style={{ y: y2, opacity }}
          className="relative lg:h-[80vh] flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative w-72 h-96 md:w-96 md:h-[32rem] rounded-2xl overflow-hidden shadow-2xl parallax-img transition-transform duration-300 ease-out z-10 bg-card border border-border flex items-center justify-center">
            {/* Stylized monogram placeholder */}
            <div className="font-heading text-8xl md:text-[10rem] font-bold text-foreground/10 select-none tracking-tighter">
              DRA
            </div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl mix-blend-overlay pointer-events-none" />
          </div>
          
          {/* Decorative elements behind the portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-[40rem] bg-accent/20 blur-3xl -z-10 rounded-full" />
          
          {/* Floating badge */}
          <motion.a 
            href="/cv.pdf"
            download="Daksh_Raj_Agrawal_CV.pdf"
            className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-card p-4 rounded-xl border border-border shadow-xl z-20 flex items-center gap-4 hover:border-accent transition-colors"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <Download size={20} />
            </div>
            <div>
              <p className="text-xs text-foreground/60 font-medium uppercase tracking-wider">Download</p>
              <p className="font-bold text-foreground hover-target cursor-pointer">Curriculum Vitae</p>
            </div>
          </motion.a>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-mono rotate-90 origin-left ml-4 mb-8">Scroll</span>
        <motion.div 
          className="w-px h-16 bg-gradient-to-b from-foreground to-transparent"
          animate={{ height: ["0%", "100%"], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
