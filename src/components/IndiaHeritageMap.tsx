import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Music, Building } from 'lucide-react';

interface StateData {
  name: string;
  crowdLevel: 'low' | 'medium' | 'high';
  temples: string[];
  monuments: string[];
  folkSongs: string[];
  coordinates: { x: number; y: number };
}

const stateData: Record<string, StateData> = {
  rajasthan: {
    name: 'Rajasthan',
    crowdLevel: 'high',
    temples: ['Dilwara Temples', 'Karni Mata Temple', 'Brahma Temple'],
    monuments: ['Hawa Mahal', 'Amber Fort', 'City Palace'],
    folkSongs: ['Ghoomar', 'Kalbeliya', 'Manganiyar'],
    coordinates: { x: 200, y: 180 }
  },
  gujarat: {
    name: 'Gujarat',
    crowdLevel: 'medium',
    temples: ['Somnath Temple', 'Dwarkadheesh Temple', 'Akshardham'],
    monuments: ['Rani ki Vav', 'Champaner', 'Laxmi Vilas Palace'],
    folkSongs: ['Garba', 'Raas', 'Bhajan'],
    coordinates: { x: 150, y: 220 }
  },
  kerala: {
    name: 'Kerala',
    crowdLevel: 'medium',
    temples: ['Padmanabhaswamy Temple', 'Guruvayur Temple', 'Sabarimala'],
    monuments: ['Mattancherry Palace', 'Fort Kochi', 'Bekal Fort'],
    folkSongs: ['Thiruvathira', 'Oppana', 'Margam Kali'],
    coordinates: { x: 220, y: 450 }
  },
  tamilnadu: {
    name: 'Tamil Nadu',
    crowdLevel: 'high',
    temples: ['Meenakshi Temple', 'Brihadeeswarar Temple', 'Rameswaram'],
    monuments: ['Mahabalipuram', 'Thanjavur Palace', 'Fort St. George'],
    folkSongs: ['Bharatanatyam', 'Karagattam', 'Kummi'],
    coordinates: { x: 250, y: 400 }
  },
  karnataka: {
    name: 'Karnataka',
    crowdLevel: 'medium',
    temples: ['Virupaksha Temple', 'Chamundeshwari Temple', 'Udupi Krishna'],
    monuments: ['Mysore Palace', 'Hampi', 'Gol Gumbaz'],
    folkSongs: ['Yakshagana', 'Dollu Kunitha', 'Kamsale'],
    coordinates: { x: 220, y: 350 }
  },
  maharashtra: {
    name: 'Maharashtra',
    crowdLevel: 'high',
    temples: ['Shirdi Sai Baba', 'Siddhivinayak', 'Mahakaleshwar'],
    monuments: ['Gateway of India', 'Ajanta Caves', 'Ellora Caves'],
    folkSongs: ['Lavani', 'Powada', 'Bhajan'],
    coordinates: { x: 200, y: 280 }
  }
};

const getCrowdColor = (level: string) => {
  switch (level) {
    case 'low': return 'hsl(var(--accent))';
    case 'medium': return 'hsl(var(--primary-glow))';
    case 'high': return 'hsl(var(--primary))';
    default: return 'hsl(var(--muted))';
  }
};

const getCrowdBadge = (level: string) => {
  const variants = {
    low: 'bg-accent/20 text-accent border-accent/30',
    medium: 'bg-primary-glow/20 text-primary border-primary/30',
    high: 'bg-primary/20 text-primary border-primary/50'
  };
  return variants[level as keyof typeof variants];
};

export const IndiaHeritageMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            India Cultural Heritage Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on any state to explore temples, monuments, and folk songs. Colors indicate crowd levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="relative">
            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-temple">
              <svg 
                viewBox="0 0 400 500" 
                className="w-full h-auto max-h-[600px]"
                style={{ filter: 'drop-shadow(0 10px 20px hsl(var(--primary) / 0.1))' }}
              >
                {/* India Outline - Simplified */}
                <g>
                  {/* Rajasthan */}
                  <path 
                    d="M 120 140 L 220 140 L 240 180 L 220 220 L 160 240 L 120 200 Z"
                    fill={getCrowdColor(stateData.rajasthan.crowdLevel)}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-all duration-300"
                    onClick={() => setSelectedState('rajasthan')}
                  />
                  
                  {/* Gujarat */}
                  <path 
                    d="M 100 200 L 160 240 L 140 280 L 100 260 L 80 220 Z"
                    fill={getCrowdColor(stateData.gujarat.crowdLevel)}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-all duration-300"
                    onClick={() => setSelectedState('gujarat')}
                  />
                  
                  {/* Maharashtra */}
                  <path 
                    d="M 140 280 L 220 280 L 240 320 L 200 340 L 160 320 Z"
                    fill={getCrowdColor(stateData.maharashtra.crowdLevel)}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-all duration-300"
                    onClick={() => setSelectedState('maharashtra')}
                  />
                  
                  {/* Karnataka */}
                  <path 
                    d="M 180 340 L 260 340 L 280 380 L 240 400 L 200 380 Z"
                    fill={getCrowdColor(stateData.karnataka.crowdLevel)}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-all duration-300"
                    onClick={() => setSelectedState('karnataka')}
                  />
                  
                  {/* Tamil Nadu */}
                  <path 
                    d="M 240 400 L 300 400 L 320 440 L 280 480 L 240 460 Z"
                    fill={getCrowdColor(stateData.tamilnadu.crowdLevel)}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-all duration-300"
                    onClick={() => setSelectedState('tamilnadu')}
                  />
                  
                  {/* Kerala */}
                  <path 
                    d="M 200 420 L 240 460 L 220 480 L 180 460 L 180 440 Z"
                    fill={getCrowdColor(stateData.kerala.crowdLevel)}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-all duration-300"
                    onClick={() => setSelectedState('kerala')}
                  />
                </g>

                {/* State Labels */}
                {Object.entries(stateData).map(([key, state]) => (
                  <text
                    key={key}
                    x={state.coordinates.x}
                    y={state.coordinates.y}
                    textAnchor="middle"
                    className="fill-foreground text-xs font-medium pointer-events-none"
                  >
                    {state.name}
                  </text>
                ))}
              </svg>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <span className="text-sm text-muted-foreground">Low Crowd</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary-glow"></div>
                  <span className="text-sm text-muted-foreground">Medium Crowd</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">High Crowd</span>
                </div>
              </div>
            </Card>
          </div>

          {/* State Information */}
          <div className="space-y-6">
            {selectedState ? (
              <Card className="bg-card/80 backdrop-blur-sm shadow-temple">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      {stateData[selectedState].name}
                    </CardTitle>
                    <Badge className={getCrowdBadge(stateData[selectedState].crowdLevel)}>
                      <Users className="w-3 h-3 mr-1" />
                      {stateData[selectedState].crowdLevel} crowd
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Temples */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Building className="w-4 h-4 text-primary" />
                      Famous Temples
                    </h4>
                    <div className="grid gap-2">
                      {stateData[selectedState].temples.map((temple, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded-lg">
                          <span className="text-muted-foreground">{temple}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Monuments */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Building className="w-4 h-4 text-accent" />
                      Historic Monuments
                    </h4>
                    <div className="grid gap-2">
                      {stateData[selectedState].monuments.map((monument, index) => (
                        <div key={index} className="p-3 bg-accent/10 rounded-lg">
                          <span className="text-muted-foreground">{monument}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Folk Songs */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Music className="w-4 h-4 text-primary-glow" />
                      Traditional Folk Arts
                    </h4>
                    <div className="grid gap-2">
                      {stateData[selectedState].folkSongs.map((song, index) => (
                        <div key={index} className="p-3 bg-primary-glow/10 rounded-lg">
                          <span className="text-muted-foreground">{song}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/80 backdrop-blur-sm shadow-temple">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Select a State
                  </h3>
                  <p className="text-muted-foreground">
                    Click on any state in the map to explore its cultural heritage, temples, monuments, and traditional folk arts.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};