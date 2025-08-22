import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: Zap,
    features: [
      "Up to 10,000 API calls/month",
      "Basic analytics dashboard",
      "Email support",
      "Standard security",
      "1 team member",
      "Community access"
    ],
    variant: "glass" as const,
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    monthlyPrice: 99,
    yearlyPrice: 990,
    icon: Star,
    features: [
      "Up to 100,000 API calls/month",
      "Advanced analytics & AI insights",
      "Priority support (24/7)",
      "Enhanced security + SSO",
      "Up to 10 team members",
      "Custom integrations",
      "API access",
      "Advanced reporting"
    ],
    variant: "neon" as const,
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    icon: Crown,
    features: [
      "Unlimited API calls",
      "Custom AI model training",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Unlimited team members",
      "White-label solutions",
      "Custom SLA",
      "On-premise deployment",
      "Advanced compliance"
    ],
    variant: "outline-neon" as const,
    popular: false
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-neon-cyan animate-spin" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Choose Your</span>
            <br />
            <span className="text-foreground">Perfect Plan</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Transparent pricing with no hidden fees. Scale as you grow with plans designed for every stage of your journey.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center glass-card p-1 rounded-2xl">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                !isYearly 
                  ? 'bg-gradient-primary text-white shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 relative ${
                isYearly 
                  ? 'bg-gradient-primary text-white shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-neon-cyan text-xs px-2 py-1 rounded-full text-background font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group ${
                plan.popular 
                  ? 'glass-card border-primary/50 glow-primary scale-105' 
                  : 'glass-card'
              } p-8 rounded-3xl hover-scale transition-all duration-500`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 ${
                plan.popular ? 'glow-primary animate-pulse' : 'hover:glow-primary'
              } transition-all duration-300`}>
                <plan.icon className={`w-8 h-8 text-white ${plan.popular ? 'animate-bounce' : 'hover:scale-110'} transition-transform duration-300`} />
              </div>

              {/* Plan details */}
              <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gradient-primary">
                    ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-neon-cyan mt-1">
                    Billed annually (${plan.yearlyPrice}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-neon-cyan/20 flex items-center justify-center mt-0.5 hover:bg-neon-cyan/40 transition-colors">
                      <Check className="w-3 h-3 text-neon-cyan hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.variant} 
                className="w-full group"
                size="lg"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. 
            <br />
            <span className="text-foreground font-semibold">Need a custom solution?</span>{" "}
            <button className="text-neon-cyan hover:underline">Contact our sales team</button>
          </p>
        </div>
      </div>
    </section>
  )
}