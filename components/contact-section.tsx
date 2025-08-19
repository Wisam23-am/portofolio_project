"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "aqilamadani23@gmail.com",
      href: "mailto:aqilamadani23@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+6285175426496",
      href: "https://wa.me/6285175426496",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Paciran, Lamongan",
      href: "https://maps.app.goo.gl/ZcT8SAVayTdRm4Nr9",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Wisam23-am",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aqila-wisam-860100337",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      url: "https://vercel.com/wisam23-am",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 1155 1000" fill="currentColor">
          <path d="M577.3 0L1154.6 1000H0L577.3 0z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6285175426496",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.027 3c-7.037 0-12.76 5.717-12.76 12.748 0 2.25.588 4.437 1.713 6.373l-1.818 6.637 
        6.807-1.787a12.74 12.74 0 006.057 1.545h.001c7.037 0 12.76-5.717 12.76-12.748 
        0-3.406-1.328-6.609-3.738-9.018A12.704 12.704 0 0016.027 3zm0 23.253a10.47 
        10.47 0 01-5.336-1.463l-.383-.227-4.04 1.062 1.078-3.939-.25-.404a10.458 
        10.458 0 01-1.605-5.619c0-5.785 4.71-10.49 10.537-10.49 2.814 0 
        5.458 1.095 7.447 3.083a10.43 10.43 0 013.09 7.438c0 5.785-4.71 
        10.49-10.538 10.49zm5.762-7.851c-.314-.157-1.853-.913-2.14-1.016-.287-.105-.496-.157-.705.156-.208.314-.807 
        1.017-.99 1.226-.183.209-.366.236-.68.079-.314-.157-1.327-.489-2.527-1.56-.934-.832-1.563-1.861-1.746-2.174-.183-.314-.019-.484.138-.64.142-.142.314-.367.471-.55.157-.183.209-.314.314-.523.105-.209.052-.393-.026-.55-.079-.157-.705-1.697-.965-2.32-.254-.609-.514-.527-.705-.536l-.6-.01c-.209 
        0-.55.079-.837.393s-1.1 1.074-1.1 2.617 1.126 3.037 1.282 3.246c.157.209 
        2.222 3.389 5.386 4.755.753.325 1.34.52 1.797.667.755.24 1.44.206 
        1.98.125.604-.09 1.853-.757 2.115-1.486.261-.73.261-1.354.183-1.486-.079-.131-.288-.209-.602-.366z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="font-body text-xl text-muted max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-8"
                }`}
            >
              <Card className="p-8 hover-morph transition-morph bg-card border-border">
                <h3 className="font-heading font-bold text-2xl text-card-foreground mb-6">Send me a message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-body font-medium text-card-foreground text-sm">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="transition-morph focus:ring-accent focus:border-accent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-body font-medium text-card-foreground text-sm">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="transition-morph focus:ring-accent focus:border-accent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="font-body font-medium text-card-foreground text-sm">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="transition-morph focus:ring-accent focus:border-accent"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-body font-medium text-card-foreground text-sm">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="transition-morph focus:ring-accent focus:border-accent resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold py-3 transition-morph hover-morph"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 hover-morph transition-morph bg-card border-border cursor-pointer"
                    onClick={() => info.href !== "#" && window.open(info.href, "_blank")}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <div className="font-body font-medium text-card-foreground">{info.label}</div>
                        <div className="font-body text-muted">{info.value}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-heading font-bold text-xl text-foreground mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-morph hover-morph group"
                    >
                      <div className="transition-transform group-hover:scale-110">{social.icon}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <Card className="p-6 bg-accent/5 border-accent/20">
                <h4 className="font-heading font-bold text-lg text-foreground mb-3">Let's work together!</h4>
                <p className="font-body text-muted leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a specific project
                  in mind or just want to connect, I'd love to hear from you.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
