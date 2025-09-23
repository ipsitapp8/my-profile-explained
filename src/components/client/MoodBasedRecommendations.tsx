import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Mountain, Waves, Sunrise, Flower, Sparkles } from "lucide-react";

const moods = [
  { id: "peaceful", label: "Seeking Peace", icon: Heart, color: "bg-blue-100 text-blue-800" },
  { id: "adventure", label: "Adventure", icon: Mountain, color: "bg-green-100 text-green-800" },
  { id: "spiritual", label: "Spiritual Growth", icon: Sparkles, color: "bg-purple-100 text-purple-800" },
  { id: "nature", label: "Nature Connection", icon: Flower, color: "bg-pink-100 text-pink-800" },
  { id: "meditation", label: "Meditation", icon: Sunrise, color: "bg-orange-100 text-orange-800" },
  { id: "cultural", label: "Cultural Immersion", icon: Waves, color: "bg-teal-100 text-teal-800" },
];

const recommendations = {
  peaceful: [
    { name: "Rishikesh Ganga Aarti", type: "Spiritual Experience", description: "Serene evening prayers by the holy Ganges" },
    { name: "Bodh Gaya", type: "Buddhist Site", description: "Where Buddha attained enlightenment" },
    { name: "Pushkar Lake", type: "Sacred Lake", description: "Tranquil waters surrounded by temples" },
  ],
  adventure: [
    { name: "Kedarnath Trek", type: "Pilgrimage Trek", description: "Challenging mountain pilgrimage" },
    { name: "Hemkund Sahib", type: "High Altitude Gurudwara", description: "Sacred lake at 4,329 meters" },
    { name: "Vaishno Devi", type: "Cave Temple", description: "Mountain cave shrine with scenic trek" },
  ],
  spiritual: [
    { name: "Kashi Vishwanath", type: "Ancient Temple", description: "One of the holiest Shiva temples" },
    { name: "Golden Temple", type: "Sikh Gurudwara", description: "Sacred golden shrine in Amritsar" },
    { name: "Meenakshi Temple", type: "Dravidian Architecture", description: "Magnificent temple complex in Madurai" },
  ],
  nature: [
    { name: "Valley of Flowers", type: "UNESCO Site", description: "Alpine flowers in Uttarakhand" },
    { name: "Sundarbans", type: "Mangrove Forest", description: "Sacred groves and wildlife" },
    { name: "Western Ghats Temples", type: "Hill Temples", description: "Ancient temples amid lush greenery" },
  ],
  meditation: [
    { name: "Vipassana Centers", type: "Meditation Retreats", description: "Silent meditation practices" },
    { name: "Dharamshala", type: "Tibetan Buddhist Center", description: "Dalai Lama's residence and teachings" },
    { name: "Osho Ashram", type: "Modern Spirituality", description: "Contemporary meditation techniques" },
  ],
  cultural: [
    { name: "Khajuraho Temples", type: "UNESCO Heritage", description: "Intricate temple sculptures and art" },
    { name: "Hampi", type: "Historical Ruins", description: "Vijayanagara Empire's cultural heritage" },
    { name: "Ajanta Ellora", type: "Cave Temples", description: "Ancient Buddhist and Hindu cave art" },
  ],
};

export const MoodBasedRecommendations = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Spiritual Journey</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Tell us how you're feeling, and we'll recommend the perfect places to visit based on your mood and spiritual needs
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {moods.map((mood) => {
          const IconComponent = mood.icon;
          return (
            <Button
              key={mood.id}
              variant={selectedMood === mood.id ? "default" : "outline"}
              onClick={() => setSelectedMood(mood.id)}
              className="h-auto p-4 flex flex-col items-center gap-2"
            >
              <IconComponent className="h-6 w-6" />
              <span className="text-sm">{mood.label}</span>
            </Button>
          );
        })}
      </div>

      {selectedMood && (
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>
              Based on your mood: <Badge className={moods.find(m => m.id === selectedMood)?.color}>
                {moods.find(m => m.id === selectedMood)?.label}
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {recommendations[selectedMood as keyof typeof recommendations]?.map((place, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{place.name}</CardTitle>
                    <Badge variant="secondary">{place.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{place.description}</p>
                    <Button size="sm" className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};