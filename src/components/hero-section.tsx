import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 slide-up">
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm font-medium">Introducing the Future of Web</span>
          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 slide-up">
          <span className="text-gradient-primary">Revolutionary</span>
          <br />
          <span className="text-foreground">Digital Experience</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto slide-up">
          Transform your business with our cutting-edge platform that combines 
          <span className="text-gradient-secondary font-semibold"> artificial intelligence</span>, 
          modern design, and powerful automation tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 slide-up">
          <Button variant="hero" size="hero" className="group">
            Get Started Free
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline-neon" size="hero" className="group">
            <Play className="w-6 h-6 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mt-16 slide-up">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-secondary">10M+</div>
            <div className="text-sm text-muted-foreground">Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full p-1">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}