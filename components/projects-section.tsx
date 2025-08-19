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
    description: "Responsive e-commerce frontend with modern UI/UX design",
    longDescription:
      "A frontend-focused e-commerce platform built using React.js, Tailwind CSS, and custom styling. The application provides a modern and responsive user interface that includes product listing, product detail pages, shopping cart interactions, and smooth navigation across pages. Designed with clean UI principles and optimized for performance, it delivers an engaging shopping experience suitable for integration with any backend API or payment gateway.",
    image: "/Screenshot 2025-08-19_233255.png",
    technologies: ["React.js", "CSS", "Tailwind"],
    category: "Frontend",
    demoUrl: "uas-gold.vercel.app",
    githubUrl: "https://github.com/Wisam23-am/UAS",
    featured: true,

  },
  {
    id: 2,
    title: "E-Learning Platform",
    description: "Full-stack online learning system with course, assignment, and attendance management",
    longDescription:
      "A robust full-stack E-Learning system developed using PHP and MySQL for the backend, with Tailwind CSS and custom styling for the frontend. The platform enables teachers to create and manage courses, upload materials in PDF format, give assignments, and record attendance. Students can enroll in multiple courses, submit assignments, view materials, and track their progress. The system also includes a grading feature with letter-based evaluation (A–E). With a responsive and user-friendly design, it ensures an efficient and modern digital learning experience for both students and teachers.",
    image: "/Screenshot 2025-08-19_233906.png",
    technologies: ["PHP", "Tailwind", "CSS", "SQL"],
    category: "Full-Stack",
    demoUrl: "elearning-mu-ten.vercel.app",
    githubUrl: "https://github.com/Wisam23-am/elearning",
    featured: true,
  },
  {
    id: 3,
    title: "Music Player",
    description: "Web-based music player with playlist, shuffle, and repeat features",
    longDescription:
      "A modern and responsive music player built with Next.js and Tailwind CSS. The application allows users to manage playlists, play/pause tracks, and control playback with shuffle and repeat options. It features a dynamic UI with track progress visualization, album cover display, and smooth transitions for an engaging listening experience. Supabase integration provides storage and user data management, while Node.js ensures real-time responsiveness. Designed with clean UI principles, the platform offers a seamless and interactive way to enjoy music directly from the web.",
    image: "/Screenshot 2025-08-19_235410.png",
    technologies: ["Next.js", "Tailwind", "Supabase", "Node.js", "CSS"],
    category: "Frontend",
    demoUrl: "https://music-player-gilt-two.vercel.app/login",
    githubUrl: "https://github.com/Wisam23-am/music_player",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio with responsive design and smooth animations",
    longDescription:
      "A sleek and responsive personal portfolio website built with Next.js and Tailwind CSS. It showcases projects, skills, and experiences with a clean layout, smooth animations, and dark mode support for better accessibility. Optimized for performance and SEO, the platform ensures a professional online presence and seamless browsing experience across devices.",
    image: "/Screenshot 2025-08-20_000050.png",
    technologies: ["Next.js", "Tailwind"],
    category: "Frontend",
    demoUrl: "https://portofolio-project-two-eta.vercel.app",
    githubUrl: "https://github.com/Wisam23-am/portofolio_project",
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
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
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
            className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
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
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`font-body font-medium transition-morph hover-morph ${selectedCategory === category
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
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
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
                    <a
                      href={project.demoUrl.startsWith("http") ? project.demoUrl : `https://${project.demoUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="ghost" className="w-full text-xs">
                        GitHub
                      </Button>
                    </a>
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
                <a
                  href={selectedProject.demoUrl.startsWith("http") ? selectedProject.demoUrl : `https://${selectedProject.demoUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Live Demo
                  </Button>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    View on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      )}
    </section>
  )
}
