
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Footer from "../components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Modern Software Architecture Patterns",
      excerpt: "An in-depth exploration of contemporary software architecture patterns and their practical applications in building scalable systems.",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: "Alfred Owino",
      category: "Software Architecture",
      tags: ["Architecture", "Software Design", "Best Practices"],
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Machine Learning in Production: Best Practices",
      excerpt: "A comprehensive guide to deploying and maintaining machine learning models in production environments.",
      date: "March 10, 2024",
      readTime: "12 min read",
      author: "Alfred Owino",
      category: "Machine Learning",
      tags: ["ML", "DevOps", "Production"],
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Building Resilient Microservices",
      excerpt: "Exploring strategies and patterns for creating robust and resilient microservices architectures.",
      date: "March 5, 2024",
      readTime: "10 min read",
      author: "Alfred Owino",
      category: "Microservices",
      tags: ["Microservices", "Architecture", "Resilience"],
      imageUrl: "/placeholder.svg",
    },
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog & Research
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore my latest articles, research work, and technical insights into software development,
            machine learning, and technology trends.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles by title or tags..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <button className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Blog;
