import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "FutureFlow transformed our entire development workflow. The AI-powered analytics gave us insights we never knew we needed, and the performance improvements were immediate.",
    rating: 5,
    highlight: "300% faster deployment"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "The security features are unmatched. We migrated our entire infrastructure and haven't looked back. The team's support has been phenomenal throughout our journey.",
    rating: 5,
    highlight: "Zero security incidents"
  },
  {
    name: "Emily Watson",
    role: "VP of Engineering",
    company: "DataStream Solutions",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "What impressed me most was how quickly we could scale. From 1,000 to 1 million users without any infrastructure changes. The platform just handles everything seamlessly.",
    rating: 5,
    highlight: "1000x scale achieved"
  },
  {
    name: "David Park",
    role: "Lead Developer",
    company: "NextGen Startup",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "The developer experience is incredible. What used to take weeks now takes hours. The documentation, tools, and AI assistance have revolutionized how we build products.",
    rating: 5,
    highlight: "90% faster development"
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "Global Dynamics",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    content: "The insights we get from their analytics platform help us make data-driven decisions daily. It's like having a team of data scientists built into the platform.",
    rating: 5,
    highlight: "Real-time insights"
  }
]

const companies = [
  { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Netflix", logo: "https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg" },
  { name: "Stripe", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" }
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Quote className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium">Customer Stories</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Loved by</span>
            <br />
            <span className="text-foreground">Thousands of Teams</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how companies around the world are transforming their operations with our platform.
          </p>
        </div>

        {/* Main testimonial carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Testimonial content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-neon-cyan text-neon-cyan" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Highlight */}
              <div className="inline-flex items-center bg-gradient-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8">
                <span className="text-sm font-semibold text-gradient-primary">
                  {testimonials[currentTestimonial].highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="glass"
                size="icon"
                onClick={prevTestimonial}
                className="hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="glass"
                size="icon"
                onClick={nextTestimonial}
                className="hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trusted by companies */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Trusted by industry leaders
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-foreground font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}