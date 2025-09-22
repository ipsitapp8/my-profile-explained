import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, BarChart3, Smartphone, Info } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Home className="w-4 h-4" />, label: "Home", href: "#home" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Dashboard", href: "#dashboard" },
    { icon: <Smartphone className="w-4 h-4" />, label: "Mobile App", href: "#app" },
    { icon: <Info className="w-4 h-4" />, label: "Impact", href: "#impact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-sacred rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <div>
              <div className="font-bold text-card-foreground text-lg">TEAM HORK</div>
              <div className="text-xs text-muted-foreground -mt-1">Smart Pilgrimage</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Live Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
               <div className="px-4 pt-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};