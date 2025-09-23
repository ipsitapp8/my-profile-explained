import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Users, Clock, Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const guides = [
  {
    id: 1,
    name: "Ravi Sharma",
    rating: 4.9,
    reviews: 127,
    languages: ["Hindi", "English", "Gujarati"],
    specialization: "Temple Architecture & History",
    experience: "8 years",
    location: "Gujarat",
    price: "₹500/hour",
    availability: "Available",
    image: "/placeholder.svg",
    description: "Expert in Jyotirlinga temples with deep knowledge of ancient scriptures and architectural significance."
  },
  {
    id: 2,
    name: "Priya Mehta",
    rating: 4.8,
    reviews: 94,
    languages: ["Hindi", "English", "Tamil"],
    specialization: "Cultural Heritage & Rituals",
    experience: "6 years",
    location: "Tamil Nadu",
    price: "₹450/hour",
    availability: "Available",
    image: "/placeholder.svg",
    description: "Specialized in South Indian temple traditions and cultural practices with storytelling expertise."
  },
  {
    id: 3,
    name: "Amit Kumar",
    rating: 4.7,
    reviews: 156,
    languages: ["Hindi", "English", "Bengali"],
    specialization: "Photography & Spiritual Tours",
    experience: "10 years",
    location: "West Bengal",
    price: "₹600/hour",
    availability: "Busy",
    image: "/placeholder.svg",
    description: "Professional photographer and spiritual guide combining visual documentation with meaningful experiences."
  },
  {
    id: 4,
    name: "Sunita Patel",
    rating: 4.9,
    reviews: 203,
    languages: ["Hindi", "English", "Marathi"],
    specialization: "Women's Spiritual Journeys",
    experience: "12 years",
    location: "Maharashtra",
    price: "₹550/hour",
    availability: "Available",
    image: "/placeholder.svg",
    description: "Specialist in women-centric spiritual tours and goddess temple traditions across Maharashtra."
  }
];

export const GuideBooking = () => {
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null);
  const { toast } = useToast();

  const bookGuide = (guide: typeof guides[0]) => {
    toast({
      title: "Guide Booking Initiated",
      description: `Booking request sent to ${guide.name}. You'll receive confirmation shortly.`,
    });
    setSelectedGuide(null);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Book Your Personal Spiritual Guide</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Connect with experienced local guides who will enrich your spiritual journey with authentic insights and personalized experiences
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Card key={guide.id} className="h-full">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={guide.image} alt={guide.name} />
                  <AvatarFallback>{guide.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{guide.name}</CardTitle>
                    <Badge variant={guide.availability === "Available" ? "default" : "secondary"}>
                      {guide.availability}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{guide.rating}</span>
                    <span className="text-muted-foreground">({guide.reviews} reviews)</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{guide.specialization}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{guide.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{guide.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{guide.location}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="h-4 w-4" />
                  <span className="text-sm font-medium">Languages:</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {guide.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="font-bold text-lg">{guide.price}</p>
                  <p className="text-xs text-muted-foreground">Minimum 3 hours</p>
                </div>
                <Button 
                  onClick={() => bookGuide(guide)}
                  disabled={guide.availability !== "Available"}
                  className="w-24"
                >
                  {guide.availability === "Available" ? "Book Now" : "Unavailable"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>What's Included with Your Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-medium mb-1">Personalized Experience</h4>
              <p className="text-sm text-muted-foreground">Customized tours based on your interests</p>
            </div>
            <div className="text-center p-4">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-medium mb-1">Local Insights</h4>
              <p className="text-sm text-muted-foreground">Hidden gems and authentic experiences</p>
            </div>
            <div className="text-center p-4">
              <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-medium mb-1">Cultural Stories</h4>
              <p className="text-sm text-muted-foreground">Rich narratives and historical context</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};