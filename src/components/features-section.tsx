import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Rocket, 
  Brain,
  Lock,
  TrendingUp,
  ArrowRight
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your data in real-time",
    details: "Our proprietary AI engine processes millions of data points to provide actionable insights, predictive analytics, and automated decision-making capabilities that scale with your business.",
    color: "neon-purple"
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized for speed with sub-second response times",
    details: "Built on cutting-edge infrastructure with global CDN, edge computing, and advanced caching strategies to deliver unparalleled performance across all devices and locations.",
    color: "neon-cyan"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance standards",
    details: "End-to-end encryption, zero-trust architecture, SOC 2 compliance, and advanced threat detection keep your data secure while meeting the highest industry standards.",
    color: "neon-blue"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with automatic scaling",
    details: "Multi-region deployment with intelligent load balancing, auto-scaling infrastructure, and 99.99% uptime SLA to ensure your application performs globally.",
    color: "neon-pink"
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "From idea to production in minutes, not months",
    details: "One-click deployments, automated CI/CD pipelines, and pre-configured environments let you focus on building while we handle the infrastructure complexity.",
    color: "neon-cyan"
  },
  {
    icon: TrendingUp,
    title: "Smart Optimization",
    description: "Continuous performance improvements using data insights",
    details: "Machine learning algorithms continuously optimize your application's performance, user experience, and resource utilization to maximize efficiency and reduce costs.",
    color: "neon-purple"
  }
]

export function FeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-neon-cyan animate-pulse" />
            <span className="text-sm font-medium">Advanced Features</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Powerful Features</span>
            <br />
            <span className="text-foreground">Built for the Future</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience next-generation technology with features designed to accelerate your business growth and streamline operations.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative glass-card p-8 rounded-2xl hover-scale cursor-pointer transition-all duration-500 ${
                expandedFeature === index ? 'col-span-full lg:col-span-2 glow-primary' : ''
              }`}
              onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 glow-primary group-hover:glow-${feature.color} transition-all duration-300`}>
                <feature.icon className={`w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 ${feature.color === 'neon-cyan' ? 'group-hover:text-neon-cyan' : feature.color === 'neon-purple' ? 'group-hover:text-neon-purple' : feature.color === 'neon-blue' ? 'group-hover:text-neon-blue' : 'group-hover:text-neon-pink'}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient-primary transition-all">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>

              {/* Expanded content */}
              {expandedFeature === index && (
                <div className="border-t border-glass-border/20 pt-6 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-foreground mb-6 text-lg leading-relaxed">
                    {feature.details}
                  </p>
                  
                  <Button variant="outline-neon" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse glow-cyan" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to experience the future?</p>
          <Button variant="hero" size="xl" className="group">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}