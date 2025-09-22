import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Smartphone, Brain, AlertTriangle, MapPin, QrCode } from "lucide-react";

export const SolutionOverview = () => {
  const solutions = [
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "AI-Powered CCTV Analytics",
      description: "Real-time crowd density monitoring using computer vision and existing CCTV infrastructure",
      features: ["Crowd density mapping", "Flow pattern analysis", "Bottleneck detection"]
    },
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "Predictive Intelligence",
      description: "Machine learning algorithms predict crowd patterns and suggest optimal visiting times",
      features: ["Peak time prediction", "Weather integration", "Festival crowd modeling"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Pilgrim Mobile App",
      description: "Comprehensive mobile experience with booking, navigation, and real-time updates",
      features: ["Slot booking system", "Live navigation", "Cultural information"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
      title: "Emergency Management",
      description: "Instant alerts and guided evacuation support for crowd safety",
      features: ["Emergency alerts", "Evacuation routes", "Authority dashboard"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "IoT Sensor Network",
      description: "Strategic placement of sensors at temple gates for entry/exit tracking",
      features: ["Real-time counting", "Queue management", "Capacity monitoring"]
    },
    {
      icon: <QrCode className="w-8 h-8 text-primary" />,
      title: "QR Entry System",
      description: "Contactless entry with pre-booked slots and digital darshan tokens",
      features: ["Contactless entry", "Digital tokens", "Prayer slot booking"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Real-time Monitoring + AI Intelligence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Comprehensive <span className="bg-gradient-sacred bg-clip-text text-transparent">Smart Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ensuring safe, seamless, and culturally enriching pilgrim experience through cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-temple transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-blessing">
                    {solution.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">✨ Uses existing CCTV infrastructure</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary font-semibold">Offline-first mobile app</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary font-semibold">Government-backed smart tourism</span>
          </div>
        </div>
      </div>
    </section>
  );
};