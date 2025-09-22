import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  MapPin, 
  Clock, 
  Shield,
  Activity,
  Eye
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export const DashboardPreview = () => {
  const temples = [
    { name: "Somnath Temple", capacity: 85, crowd: 1250, status: "High" },
    { name: "Dwarka Temple", capacity: 62, crowd: 890, status: "Medium" },
    { name: "Ambaji Temple", capacity: 45, crowd: 650, status: "Low" },
    { name: "Pavagadh Temple", capacity: 78, crowd: 1100, status: "High" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "High": return "text-destructive";
      case "Medium": return "text-accent";
      case "Low": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Live Monitoring Dashboard
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Real-time <span className="bg-gradient-sacred bg-clip-text text-transparent">Temple Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive monitoring and analytics for temple authorities and pilgrims
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Dashboard */}
          <div className="lg:col-span-2">
            <Card className="h-full border border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Eye className="w-5 h-5 text-primary" />
                  Live Crowd Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="rounded-lg overflow-hidden mb-6 h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${dashboardPreview})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <span className="font-semibold">Live CCTV Feed</span>
                    </div>
                    <p className="text-sm opacity-90">AI-powered crowd density analysis</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">3,890</div>
                    <div className="text-sm text-muted-foreground">Current Visitors</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">76%</div>
                    <div className="text-sm text-muted-foreground">Peak Capacity</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-6">
            <Card className="border border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Activity className="w-5 h-5 text-accent" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CCTV Network</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Online</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">IoT Sensors</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Mobile App</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Live</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">AI Analytics</span>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Processing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Peak Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Morning (6-9 AM)</span>
                    <span className="text-destructive font-medium">High</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Evening (5-8 PM)</span>
                    <span className="text-accent font-medium">Medium</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Night (8-10 PM)</span>
                    <span className="text-primary font-medium">Low</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Temple Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {temples.map((temple, index) => (
            <Card key={index} className="border border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-card-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">{temple.name}</span>
                  </div>
                  <Badge className={`${getStatusColor(temple.status)} bg-opacity-10 border-current/20`}>
                    {temple.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current Crowd</span>
                    <span className="font-semibold text-card-foreground">{temple.crowd}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="font-semibold text-card-foreground">{temple.capacity}%</span>
                    </div>
                    <Progress value={temple.capacity} className="h-2" />
                  </div>
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};