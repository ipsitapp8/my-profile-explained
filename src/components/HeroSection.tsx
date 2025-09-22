import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Smartphone } from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${templeHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 font-display">
            TEAM <span className="bg-gradient-sacred bg-clip-text text-transparent">HORK</span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-medium">
            A Journey Through Time and Culture
          </p>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            AI-Powered Temple & Pilgrimage Crowd Management for Sacred Sites of Gujarat
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-card-foreground font-medium">Safe Pilgrimage</span>
          </div>
          <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-card-foreground font-medium">Crowd Intelligence</span>
          </div>
          <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <Smartphone className="w-5 h-5 text-primary" />
            <span className="text-card-foreground font-medium">Smart Booking</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-temple"
            onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Experience Live Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-card/90 backdrop-blur-sm border-primary/30 text-card-foreground hover:bg-card px-8 py-4 text-lg font-semibold"
            onClick={() => document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Technical Approach
          </Button>
        </div>

        {/* Temple Sites */}
        <div className="mt-16 text-primary-foreground/70">
          <p className="text-sm uppercase tracking-wider mb-4">Protecting Sacred Heritage Sites</p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <span>🕉️ Somnath</span>
            <span>🏛️ Dwarka</span>
            <span>⛰️ Ambaji</span>
            <span>🌄 Pavagadh</span>
          </div>
        </div>
      </div>
    </section>
  );
};