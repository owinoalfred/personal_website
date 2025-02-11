
import { Coffee, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/80 to-transparent backdrop-blur-sm py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Name and Bio Section */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-secondary">Alfred Owino</h3>
            <p className="text-secondary/80">
              MLOps | DevOps | Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/projects" className="text-secondary/80 hover:text-accent transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-secondary/80 hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-secondary/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-semibold text-secondary">Connect</h4>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/YourGithub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-secondary/80 hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/YourLinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-secondary/80 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-2 text-secondary/80 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Buy Me a Coffee Section */}
        <div className="mt-12 pt-8 border-t border-secondary/10">
          <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://www.buymeacoffee.com/YourUsername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-accent text-secondary rounded-lg hover:bg-accent/90 transition-colors space-x-2 hover:scale-105 transform duration-200"
            >
              <Coffee className="h-5 w-5" />
              <span>Buy me a coffee</span>
            </a>
            <p className="text-sm text-secondary/60">
              © {new Date().getFullYear()} Alfred Owino. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
