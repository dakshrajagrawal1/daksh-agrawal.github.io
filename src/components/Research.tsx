"use client";

import { motion } from "framer-motion";
import { Telescope, Database, FileText, Star } from "lucide-react";

export default function Research() {
  const stats = [
    { label: "NASA Datasets Analyzed", value: "Multiple", icon: Database },
    { label: "QML Models Built", value: "Complex", icon: Telescope },
    { label: "Research Paper", value: "1", icon: FileText },
  ];

  return (
    <section id="research" className="relative py-32 bg-[#050505] text-white overflow-hidden">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        
        {/* Animated glowing orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[100px]"
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-md">
            <Star size={14} className="text-blue-400" />
            Highlighted Research Internship
          </div>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Research That Reaches <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Space</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            IIIT Naya Raipur (IIIT-NR) | 26 May – 12 July
          </p>
        </motion.div>

        {/* Highlight Card */}
        <motion.div 
          className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div 
                className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-bold tracking-wide uppercase mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Under Peer Review — BDA 2026
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                Quantum Machine Learning Architectures for Space Science
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Developed and optimized Quantum Machine Learning (QML) architectures to classify high-dimensional NASA datasets. 
                Authored a formal research paper detailing parameter optimizations for large-scale space science data, currently under peer review for the BDA 2026 International Conference.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
