"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  demoUrl: string
  githubUrl: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    longDescription:
      "A full-stack e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, payment processing, and admin dashboard.",
    image: "/ecommerce-platform-screenshot.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    category: "Full-Stack",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool",
    longDescription:
      "A comprehensive task management application with real-time collaboration, drag-and-drop functionality, team management, and progress tracking. Built with modern React patterns and WebSocket integration.",
    image: "/task-management-app-screenshot.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    category: "Full-Stack",
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/taskapp",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasting",
    longDescription:
      "An elegant weather dashboard that provides current conditions, 7-day forecasts, and interactive maps. Features location-based weather, favorite locations, and responsive design.",
    image: "/weather-dashboard-screenshot.png",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    category: "Frontend",
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/example/weather",
    featured: false,
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description: "Intelligent chatbot with natural language processing",
    longDescription:
      "An AI-powered chat assistant built with OpenAI's GPT API. Features conversation memory, context awareness, and customizable personality. Includes admin panel for managing conversations.",
    image: "/ai-chat-assistant-screenshot.png",
    technologies: ["Next.js", "OpenAI API", "Python", "FastAPI", "Redis"],
    category: "AI/ML",
    demoUrl: "https://chat.example.com",
    githubUrl: "https://github.com/example/ai-chat",
    featured: true,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio with modern animations",
    longDescription:
      "A modern, responsive portfolio website featuring smooth animations, dark mode support, and optimized performance. Built with Next.js and Tailwind CSS.",
    image: "/portfolio-website-screenshot.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    category: "Frontend",
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/example/portfolio",
    featured: false,
  },
  {
    id: 6,
    title: "API Gateway Service",
    description: "Microservices API gateway with authentication",
    longDescription:
      "A robust API gateway service handling authentication, rate limiting, request routing, and monitoring. Built with Node.js and deployed on AWS with Docker containers.",
    image: "/api-gateway-service-screenshot.png",
    technologies: ["Node.js", "Express", "JWT", "Docker", "AWS"],
    category: "Backend",
    demoUrl: "https://api.example.com",
    githubUrl: "https://github.com/example/api-gateway",
    featured: false,
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend", "AI/ML"]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="min-h-screen bg-card py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-heading font-black text-4xl md:text-6xl text-card-foreground mb-4">
              My <span className="text-accent">Projects</span>
            </h2>
            <p className="font-body text-xl text-muted max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Featured Projects */}
          <div
            className={`mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-heading font-bold text-2xl text-card-foreground mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group cursor-pointer overflow-hidden hover-morph transition-morph bg-background border-border"
                  onClick={() => setSelectedProject(project)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-body font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-xl text-foreground mb-2">{project.title}</h4>
                    <p className="font-body text-muted mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`font-body font-medium transition-morph hover-morph ${
                  selectedCategory === category
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group cursor-pointer overflow-hidden hover-morph transition-morph bg-background border-border"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-xl text-foreground mb-2">{project.title}</h4>
                  <p className="font-body text-muted mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                      Live Demo
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1 text-xs">
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <Card
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </Button>
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-2">{selectedProject.title}</h3>
                  <Badge className="bg-accent text-accent-foreground">{selectedProject.category}</Badge>
                </div>
              </div>

              <p className="font-body text-muted leading-relaxed mb-6">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">View Live Demo</Button>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </section>
  )
}
