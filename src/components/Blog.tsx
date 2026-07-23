"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Optimizing QML Architectures for High-Dimensional Space Data",
      category: "Research Insights",
      date: "Jul 10, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Building Scalable Healthcare Platforms with Next.js",
      category: "Tech Tutorials",
      date: "May 22, 2026",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Astrology vs Machine Learning: Pattern Recognition Explained",
      category: "Personal Thoughts",
      date: "Mar 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1532968961962-810cb8ce1c0e?q=80&w=800&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-32 bg-card border-t border-border relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold">
              Latest <span className="text-accent italic">Thoughts</span>
            </h2>
          </motion.div>
          
          <motion.a 
            href="#"
            className="hover-target inline-flex items-center gap-2 text-foreground/80 hover:text-accent font-medium transition-colors"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            View all posts
            <ArrowRight size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              className="group cursor-pointer bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider rounded-full text-accent shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-4 text-sm text-foreground/50 mb-4">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                </div>
                
                <div className="mt-6 flex items-center text-sm font-medium text-foreground/70 group-hover:text-accent transition-colors">
                  Read Article
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
