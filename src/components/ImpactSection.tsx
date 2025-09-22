import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Heart, 
  Zap 
} from "lucide-react";

export const ImpactSection = () => {
  const impacts = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Enhanced Safety",
      description: "Safer pilgrim movement with fewer accidents through intelligent crowd monitoring",
      metric: "80% reduction in crowd-related incidents",
      color: "bg-primary/10 border-primary/20"
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Enriched Experience",
      description: "Smooth and organized temple experience preserving spiritual sanctity",
      metric: "95% pilgrim satisfaction rate",
      color: "bg-accent/10 border-accent/20"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Economic Growth",
      description: "Boosted heritage tourism economy through better management",
      metric: "40% increase in tourism revenue",
      color: "bg-primary/10 border-primary/20"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-accent" />,
      title: "Data-Driven Insights",
      description: "Comprehensive crowd analytics for authorities and policy makers",
      metric: "Real-time data for 4 major temples",
      color: "bg-accent/10 border-accent/20"
    }
  ];

  const stats = [
    { number: "4", label: "Sacred Sites", subtext: "Somnath, Dwarka, Ambaji, Pavagadh" },
    { number: "10M+", label: "Annual Pilgrims", subtext: "Protected by our system" },
    { number: "24/7", label: "Monitoring", subtext: "Continuous AI surveillance" },
    { number: "99.9%", label: "Uptime", subtext: "Reliable temple operations" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Transformative Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Preserving <span className="bg-gradient-sacred bg-clip-text text-transparent">Sacred Heritage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating meaningful impact through technology while respecting traditions and cultural values
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className={`border ${impact.color} bg-card/80 backdrop-blur-sm hover:shadow-temple transition-all duration-300 group`}>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-blessing">
                    {impact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {impact.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {impact.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{impact.metric}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-divine transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-card-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Ready to Transform Temple Management?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing pilgrimage experiences while preserving the sanctity of our sacred heritage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-card text-card-foreground hover:bg-card/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Request Demo
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Technical Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};