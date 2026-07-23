"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-4 mb-16">
        <div className="max-w-md">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            DRA<span className="text-accent">.</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-6">
            Building the Future — One Algorithm at a Time.
          </p>
          <a
            href="mailto:daksh.agrawal903@gmail.com"
            className="inline-flex items-center gap-2 hover-target text-accent hover:text-accent-hover font-medium transition-colors"
          >
            <Mail size={18} />
            daksh.agrawal903@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-8 md:text-right">
          <nav>
            <ul className="flex flex-wrap md:justify-end gap-6 text-sm font-medium text-foreground/80">
              <li><a href="#about" className="hover-target hover:text-accent transition-colors">About</a></li>
              <li><a href="#research" className="hover-target hover:text-accent transition-colors">Research</a></li>
              <li><a href="#projects" className="hover-target hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover-target hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="flex gap-4 md:justify-end">
            <a
              href="https://linkedin.com/in/daksh-raj-agrawal-b43b7b17b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target p-3 bg-border/40 hover:bg-accent hover:text-white rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target p-3 bg-border/40 hover:bg-accent hover:text-white rounded-full transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50 text-sm text-foreground/60">
        <p>© {currentYear} Daksh Raj Agrawal. All rights reserved.</p>
        <p>Designed & Built by Daksh Raj Agrawal</p>
        
        <button
          onClick={scrollToTop}
          className="hover-target mt-4 md:mt-0 flex items-center justify-center w-10 h-10 bg-border/50 hover:bg-accent hover:text-white rounded-full transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
