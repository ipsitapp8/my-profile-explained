import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  QrCode, 
  MapPin, 
  Bell, 
  Calendar, 
  Info,
  Star,
  Clock,
  Users,
  Navigation as NavigationIcon
} from "lucide-react";

export const MobileAppSection = () => {
  const appFeatures = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Smart Slot Booking",
      description: "Book your darshan time slots in advance to avoid crowds"
    },
    {
      icon: <NavigationIcon className="w-6 h-6 text-accent" />,
      title: "Live Navigation",
      description: "Real-time navigation with crowd-aware route optimization"
    },
    {
      icon: <QrCode className="w-6 h-6 text-primary" />,
      title: "Contactless Entry",
      description: "QR-based entry system for seamless temple access"
    },
    {
      icon: <Bell className="w-6 h-6 text-accent" />,
      title: "Live Updates",
      description: "Real-time crowd levels and waiting time notifications"
    },
    {
      icon: <Info className="w-6 h-6 text-primary" />,
      title: "Cultural Guide",
      description: "Rich cultural information and temple history"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Nearby Services",
      description: "Find parking, food, and accommodation easily"
    }
  ];

  const mockAppScreens = [
    {
      title: "Temple Status",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-card-foreground">Somnath Temple</span>
            <Badge className="bg-destructive/10 text-destructive border-destructive/20">High Crowd</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Current Wait</span>
              <span className="font-semibold text-card-foreground">45 min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next Available</span>
              <span className="font-semibold text-primary">6:30 PM</span>
            </div>
          </div>
          <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
            Book Next Slot
          </Button>
        </div>
      )
    },
    {
      title: "Your Booking",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-sacred rounded-xl mx-auto mb-4 flex items-center justify-center">
              <QrCode className="w-12 h-12 text-primary-foreground" />
            </div>
            <p className="font-semibold text-card-foreground">Darshan Token</p>
            <p className="text-sm text-muted-foreground">#D2025-0156</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time Slot</span>
              <span className="font-semibold text-card-foreground">6:30 - 7:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Temple</span>
              <span className="font-semibold text-card-foreground">Somnath</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="app" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Smartphone className="w-4 h-4 mr-2" />
            Pilgrim Mobile Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Your Sacred Journey <span className="bg-gradient-sacred bg-clip-text text-transparent">In Your Hands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive mobile app designed for modern pilgrims while respecting ancient traditions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Mockups */}
          <div className="relative">
            <div className="flex gap-6 justify-center">
              {mockAppScreens.map((screen, index) => (
                <div key={index} className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-96 bg-gradient-to-b from-card to-card/80 rounded-3xl p-6 shadow-temple border-8 border-primary/10">
                    <div className="bg-background rounded-2xl h-full p-4 overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4 text-xs text-muted-foreground">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-primary rounded-sm"></div>
                          <div className="w-1 h-2 bg-primary rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="font-bold text-card-foreground text-lg">{screen.title}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                          <span className="text-xs text-muted-foreground ml-2">4.9 (2.1k)</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      {screen.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6 font-display">
                Everything You Need for a <span className="text-primary">Perfect Pilgrimage</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mobile app combines cutting-edge technology with deep respect for tradition, 
                ensuring your spiritual journey is smooth, safe, and meaningful.
              </p>
            </div>

            <div className="grid gap-4">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                  <div className="flex-shrink-0 p-2 bg-gradient-blessing rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <div className="pt-6">
              <h4 className="font-semibold text-card-foreground mb-4">Download the App</h4>
              <div className="flex gap-4">
                <Button className="bg-card border border-border text-card-foreground hover:bg-muted flex-1">
                  <div className="text-left">
                    <div className="text-xs">Download on</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                <Button className="bg-card border border-border text-card-foreground hover:bg-muted flex-1">
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* App Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">App Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">App Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Booking Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};