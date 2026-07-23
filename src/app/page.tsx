import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import ServicesTestimonials from "@/components/ServicesTestimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background selection:bg-accent/30">
      <LoadingScreen />
      <Navigation />
      
      <Hero />
      <About />
      <Research />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <ServicesTestimonials />
      <Blog />
      <Contact />
      
      <Footer />
    </main>
  );
}
