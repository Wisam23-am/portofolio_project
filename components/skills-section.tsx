"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "React", level: 85, category: "Frontend" },
  { name: "Next.js", level: 83, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 78, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 90, category: "Backend" },
  { name: "C", level: 90, category: "Menengah" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>(new Array(skills.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with staggered delay
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const categories = ["Frontend", "Backend", "Menengah", "Tools"]

  return (
    <section id="skills" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground mb-4">
              My <span className="text-accent">Skills</span>
            </h2>
            <p className="font-body text-xl text-muted max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, categoryIndex) => (
              <div
                key={category}
                className={`transition-all duration-1000 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <Card className="p-6 h-full hover-morph transition-morph bg-card border-border">
                  <h3 className="font-heading font-bold text-xl text-card-foreground mb-6 text-center">{category}</h3>

                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, skillIndex) => {
                        const globalIndex = skills.findIndex((s) => s.name === skill.name)
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-body font-medium text-card-foreground text-sm">{skill.name}</span>
                              <span className="font-body text-xs text-muted">{skill.level}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: animatedSkills[globalIndex] ? `${skill.level}%` : "0%",
                                  transitionDelay: `${globalIndex * 100}ms`,
                                }}
                              ></div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-body text-muted max-w-3xl mx-auto leading-relaxed">
              I'm constantly learning and adapting to new technologies. My approach combines technical expertise with
              creative problem-solving to deliver solutions that not only work well but also provide exceptional user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
