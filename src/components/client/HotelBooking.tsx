import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Waves, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const hotels = [
  {
    id: 1,
    name: "Divine Heritage Resort",
    location: "Near Somnath Temple, Gujarat",
    rating: 4.8,
    reviews: 234,
    price: "₹3,500",
    originalPrice: "₹4,200",
    image: "/placeholder.svg",
    amenities: ["Free WiFi", "Parking", "Restaurant", "Temple View"],
    category: "Luxury",
    description: "Luxury resort with stunning temple views and traditional architecture"
  },
  {
    id: 2,
    name: "Spiritual Retreat Lodge",
    location: "Rishikesh, Uttarakhand",
    rating: 4.6,
    reviews: 189,
    price: "₹2,200",
    originalPrice: "₹2,800",
    image: "/placeholder.svg",
    amenities: ["Free WiFi", "Yoga Hall", "Organic Food", "Ganga View"],
    category: "Wellness",
    description: "Peaceful lodge perfect for spiritual retreats and meditation"
  },
  {
    id: 3,
    name: "Heritage Palace Hotel",
    location: "Pushkar, Rajasthan",
    rating: 4.7,
    reviews: 156,
    price: "₹4,800",
    originalPrice: "₹6,000",
    image: "/placeholder.svg",
    amenities: ["Free WiFi", "Pool", "Spa", "Cultural Shows"],
    category: "Heritage",
    description: "Restored palace hotel with royal ambiance and modern amenities"
  },
  {
    id: 4,
    name: "Temple View Guest House",
    location: "Varanasi, Uttar Pradesh",
    rating: 4.3,
    reviews: 98,
    price: "₹1,500",
    originalPrice: "₹2,000",
    image: "/placeholder.svg",
    amenities: ["Free WiFi", "Temple Shuttle", "Rooftop Cafe", "Ganga Aarti View"],
    category: "Budget",
    description: "Comfortable guest house with authentic local experience"
  }
];

const amenityIcons = {
  "Free WiFi": Wifi,
  "Parking": Car,
  "Restaurant": Utensils,
  "Temple View": MapPin,
  "Yoga Hall": Coffee,
  "Organic Food": Utensils,
  "Ganga View": Waves,
  "Pool": Waves,
  "Spa": Coffee,
  "Cultural Shows": Coffee,
  "Temple Shuttle": Car,
  "Rooftop Cafe": Coffee,
  "Ganga Aarti View": Waves
};

export const HotelBooking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const { toast } = useToast();

  const bookHotel = (hotel: typeof hotels[0]) => {
    if (!checkIn || !checkOut || !guests) {
      toast({
        title: "Incomplete Booking Details",
        description: "Please fill in check-in, check-out dates and number of guests",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Hotel Booking Confirmed!",
      description: `Your stay at ${hotel.name} has been booked successfully`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Luxury": return "bg-purple-100 text-purple-800";
      case "Heritage": return "bg-amber-100 text-amber-800";
      case "Wellness": return "bg-green-100 text-green-800";
      case "Budget": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Spiritual Stay Accommodations</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Book comfortable accommodations near sacred sites with spiritual ambiance and modern amenities
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Book Your Stay
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="location">Destination</Label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="up">Uttar Pradesh</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="checkin">Check-in Date</Label>
              <Input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="checkout">Check-out Date</Label>
              <Input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn}
              />
            </div>
            <div>
              <Label htmlFor="guests">Guests</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger>
                  <SelectValue placeholder="No. of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5+">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="h-full">
            <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
              <img 
                src={hotel.image} 
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-2 left-2 ${getCategoryColor(hotel.category)}`}>
                {hotel.category}
              </Badge>
            </div>
            
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{hotel.name}</CardTitle>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{hotel.rating}</span>
                    <span className="text-muted-foreground">({hotel.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground line-through">{hotel.originalPrice}</p>
                  <p className="font-bold text-xl">{hotel.price}</p>
                  <p className="text-xs text-muted-foreground">per night</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <CardDescription>{hotel.description}</CardDescription>
              
              <div>
                <h4 className="font-medium mb-2">Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {hotel.amenities.map((amenity) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee;
                    return (
                      <div key={amenity} className="flex items-center gap-2 text-sm">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <Button 
                onClick={() => bookHotel(hotel)}
                className="w-full"
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};