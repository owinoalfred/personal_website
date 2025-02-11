
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Database, Server, Brain, Globe, Lock, Cpu, LineChart } from "lucide-react";
import Footer from "../components/Footer";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Trading Bot",
      description: "Developed a sophisticated trading bot using machine learning algorithms for market prediction and automated trading strategies.",
      icon: <Brain className="w-8 h-8 text-accent" />,
      technologies: ["Python", "TensorFlow", "PostgreSQL", "FastAPI"],
      github: "https://github.com/username/trading-bot",
    },
    {
      id: 2,
      title: "Cloud Infrastructure Dashboard",
      description: "Built a real-time monitoring dashboard for cloud infrastructure with performance metrics and alerting system.",
      icon: <Server className="w-8 h-8 text-accent" />,
      technologies: ["React", "Node.js", "AWS", "Docker"],
      demo: "https://dashboard-demo.com",
      github: "https://github.com/username/cloud-dashboard",
    },
    {
      id: 3,
      title: "Blockchain Analytics Platform",
      description: "Created a platform for analyzing blockchain transactions and smart contracts with visualization tools.",
      icon: <Database className="w-8 h-8 text-accent" />,
      technologies: ["Solidity", "Web3.js", "React", "GraphQL"],
      github: "https://github.com/username/blockchain-analytics",
    },
    {
      id: 4,
      title: "Secure Identity Management",
      description: "Implemented a zero-trust identity management system with biometric authentication.",
      icon: <Lock className="w-8 h-8 text-accent" />,
      technologies: ["Java", "Spring Boot", "OAuth2", "PostgreSQL"],
      github: "https://github.com/username/identity-management",
    },
    {
      id: 5,
      title: "ML Model Deployment Pipeline",
      description: "Designed an automated pipeline for ML model training, validation, and deployment with monitoring.",
      icon: <Cpu className="w-8 h-8 text-accent" />,
      technologies: ["Python", "Kubernetes", "MLflow", "Jenkins"],
      github: "https://github.com/username/ml-pipeline",
    },
    {
      id: 6,
      title: "Financial Data API",
      description: "Built a high-performance API for real-time financial data processing and analysis.",
      icon: <LineChart className="w-8 h-8 text-accent" />,
      technologies: ["Django", "Redis", "Celery", "PostgreSQL"],
      github: "https://github.com/username/financial-api",
    },
    {
      id: 7,
      title: "Microservices Architecture",
      description: "Developed a scalable microservices architecture for e-commerce platform with service mesh.",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      technologies: ["Go", "gRPC", "Istio", "MongoDB"],
      github: "https://github.com/username/microservices",
    },
    {
      id: 8,
      title: "Global CDN Optimizer",
      description: "Created a content delivery network optimizer with machine learning for route prediction.",
      icon: <Globe className="w-8 h-8 text-accent" />,
      technologies: ["Python", "TensorFlow", "AWS", "Redis"],
      github: "https://github.com/username/cdn-optimizer",
    },
    {
      id: 9,
      title: "DevOps Automation Suite",
      description: "Built comprehensive DevOps tooling for automated testing, deployment, and monitoring.",
      icon: <Server className="w-8 h-8 text-accent" />,
      technologies: ["Ansible", "Terraform", "GitLab CI", "Prometheus"],
      github: "https://github.com/username/devops-suite",
    },
    {
      id: 10,
      title: "Quantum Computing Simulator",
      description: "Developed a quantum circuit simulator for educational purposes with visual programming interface.",
      icon: <Cpu className="w-8 h-8 text-accent" />,
      technologies: ["Python", "Qiskit", "React", "TypeScript"],
      github: "https://github.com/username/quantum-simulator",
      demo: "https://quantum-sim-demo.com",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 text-center animate-fade-in">
          Projects
        </h1>
        <p className="text-lg text-secondary/80 max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          Explore my portfolio of projects spanning AI/ML, cloud infrastructure, blockchain, and financial technology.
          Each project represents a unique challenge solved through innovative technical solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                      >
                        <Github className="w-5 h-5 text-secondary" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-secondary" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary/80 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-secondary/80 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Projects;
