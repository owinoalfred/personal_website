
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "MLOps | DevOps | Full-Stack Developer";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty("--mouse-x", `${x}`);
      heroRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div
          ref={heroRef}
          className="relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-lg p-8 md:p-12 border border-white/20 shadow-xl cursor-glow"
          style={{
            transform: "perspective(1000px)",
            transition: "transform 0.1s ease",
          }}
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 animate-fade-up">
              Hi, I'm <span className="text-accent">Alfred Owino</span>
            </h1>
            <div className="h-8 mb-6">
              <p className="text-xl md:text-2xl text-secondary/80 animate-fade-up font-mono">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-lg md:text-xl text-secondary/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Experienced in MLOps, DevOps, Full-stack system development, Unix configuration, and Financial Engineering. 
              Creating robust solutions with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-secondary font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "0s" }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          </div>

          {/* Gear Animation */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 opacity-10 animate-spin-slow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
          <div 
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300 group cursor-glow"
          >
            <div className="h-48 bg-accent/5 rounded-lg mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform" />
            <h3 className="text-xl font-semibold text-secondary mb-2">MLOps Pipeline</h3>
            <p className="text-secondary/70">
              Automated machine learning deployment pipeline with continuous integration and monitoring.
            </p>
          </div>
          
          <div 
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300 group cursor-glow"
          >
            <div className="h-48 bg-accent/5 rounded-lg mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform" />
            <h3 className="text-xl font-semibold text-secondary mb-2">Financial Analytics</h3>
            <p className="text-secondary/70">
              Advanced financial engineering tools for market analysis and risk assessment.
            </p>
          </div>
          
          <div 
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300 group cursor-glow"
          >
            <div className="h-48 bg-accent/5 rounded-lg mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform" />
            <h3 className="text-xl font-semibold text-secondary mb-2">DevOps Platform</h3>
            <p className="text-secondary/70">
              Unified platform for continuous deployment and infrastructure management.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
