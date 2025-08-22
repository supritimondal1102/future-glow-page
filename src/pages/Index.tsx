import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AssistantBot } from "@/components/assistant-bot"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="futureflow-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <TestimonialsSection />
        </main>
        <Footer />
        <AssistantBot />
      </div>
    </ThemeProvider>
  );
};

export default Index;
