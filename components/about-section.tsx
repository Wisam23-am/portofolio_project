"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="min-h-screen bg-card py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="font-heading font-black text-4xl md:text-6xl text-card-foreground mb-4">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-8"
                }`}
            >
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden hover-morph transition-morph">
                  <img
                    src="/wisam1x1.jpg"
                    alt="Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* About Content */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-card-foreground mb-6">
                Passionate Developer & Creative Problem Solver
              </h3>

              <div className="space-y-4 font-body text-muted leading-relaxed">
                <p>
                  With over 5 years of experience in web development, I specialize in creating modern, responsive
                  applications that deliver exceptional user experiences. My journey began with a curiosity for how
                  things work, which evolved into a passion for building digital solutions that make a difference.
                </p>

                <p>
                  I believe in the power of clean code, thoughtful design, and continuous learning. When I'm not coding,
                  you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge
                  with the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "5+", label: "Years Experience" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="p-4 text-center hover-morph transition-morph bg-background border-border"
                  >
                    <div className="font-heading font-black text-2xl text-accent mb-1">{stat.number}</div>
                    <div className="font-body text-sm text-muted">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
