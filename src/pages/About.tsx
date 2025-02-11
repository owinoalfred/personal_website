
import { FileCode2, ServerCog, Code2, Terminal, LineChart, Brain, Monitor, Cloud, ChartBar, Server } from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  const skills = [
    {
      title: "MLOps",
      icon: ServerCog,
      description: "Building and maintaining machine learning pipelines, model deployment, and monitoring systems.",
    },
    {
      title: "DevOps",
      icon: FileCode2,
      description: "Implementing CI/CD pipelines, container orchestration, and infrastructure automation.",
    },
    {
      title: "Full-Stack Development",
      icon: Code2,
      description: "Creating end-to-end applications using modern frameworks and technologies.",
    },
    {
      title: "Unix Configuration",
      icon: Terminal,
      description: "System administration, shell scripting, and performance optimization.",
    },
    {
      title: "Financial Engineering",
      icon: LineChart,
      description: "Developing quantitative models and financial analysis tools.",
    },
  ];

  const detailedSkills = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Specializing in Python-driven AI/ML workflows, from model development to deployment, with a focus on actionable insights.",
    },
    {
      title: "Backend Development",
      icon: Server,
      description: "Proficient in Django, building RESTful APIs, microservices, and database architectures.",
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      description: "Skilled in modern frameworks like React and Vue.js for dynamic, user-centric interfaces.",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      description: "Streamlining workflows with Docker, Kubernetes, and Ansible for CI/CD, infrastructure automation, and scalable cloud deployments.",
    },
    {
      title: "Financial Data Analysis",
      icon: ChartBar,
      description: "Advanced quantitative analysis of financial instruments, uncovering trends and opportunities through data-driven insights.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">About Me</h1>
          <p className="text-lg md:text-xl text-secondary/80 max-w-3xl mx-auto">
            Hi there! I'm a full-stack developer and AI/ML enthusiast with 5+ years of hands-on experience (since 2019) 
            crafting robust, scalable solutions across diverse domains. My passion lies at the intersection of cutting-edge 
            technology and real-world problem-solving, blending technical precision with analytical creativity.
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{skill.title}</h3>
                </div>
                <p className="text-secondary/80">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">🔧 Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{skill.title}</h3>
                </div>
                <p className="text-secondary/80">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Data Analysis Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">📈 Financial Data Analysis</h2>
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Quantitative Insights</h3>
                <p className="text-secondary/80">
                  Adept at parsing complex financial instruments (options, futures, bonds) to uncover trends, risks, and opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Data Storytelling</h3>
                <p className="text-secondary/80">
                  Transforming raw financial data into clear, strategic narratives for informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">🚀 Why Work With Me?</h2>
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <p className="text-secondary/80 text-lg leading-relaxed">
              I thrive on turning ambiguity into clarity—whether it's architecting a full-stack application, 
              optimizing ML pipelines, or decoding market behavior. Let's collaborate to build tools that don't 
              just function, but inspire.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
