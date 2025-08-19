"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}>
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            Hello, I'm <span className="text-accent hover:animate-morph inline-block cursor-default">Wisam</span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-8"
            }`}
        >
          <p className="font-body text-xl md:text-2xl text-muted mb-12 leading-relaxed">
            A passionate <span className="text-accent font-semibold">Full-Stack Developer</span> crafting beautiful,
            functional web experiences with modern technologies.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-8 py-3 rounded-lg transition-morph hover-morph"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-semibold px-8 py-3 rounded-lg transition-morph hover-morph bg-transparent"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
      >
        <div className="flex flex-col items-center">
          <span className="font-body text-sm text-muted mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
