import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const temples = [
  { id: "somnath", name: "Somnath Temple", location: "Gujarat", currentCrowd: "Medium" },
  { id: "dwarka", name: "Dwarkadhish Temple", location: "Gujarat", currentCrowd: "Low" },
  { id: "rameshwaram", name: "Ramanathaswamy Temple", location: "Tamil Nadu", currentCrowd: "High" },
  { id: "kashi", name: "Kashi Vishwanath", location: "Uttar Pradesh", currentCrowd: "High" },
  { id: "tirupati", name: "Tirupati Balaji", location: "Andhra Pradesh", currentCrowd: "Very High" },
];

const timeSlots = [
  "6:00 AM - 8:00 AM", "8:00 AM - 10:00 AM", "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM", "2:00 PM - 4:00 PM", "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM", "8:00 PM - 10:00 PM"
];

export const SlotBooking = () => {
  const [selectedTemple, setSelectedTemple] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const { toast } = useToast();

  const handleBooking = () => {
    if (!selectedTemple || !selectedDate || !selectedTime || !numberOfPeople) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all booking details",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your slot at ${temples.find(t => t.id === selectedTemple)?.name} has been booked for ${selectedDate} at ${selectedTime}`,
    });
  };

  const getCrowdColor = (crowd: string) => {
    switch (crowd) {
      case "Low": return "text-green-600";
      case "Medium": return "text-yellow-600";
      case "High": return "text-orange-600";
      case "Very High": return "text-red-600";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Temple Visit Slot Booking</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Book Your Visit
            </CardTitle>
            <CardDescription>
              Reserve your time slot for a peaceful darshan experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="temple">Select Temple</Label>
              <Select value={selectedTemple} onValueChange={setSelectedTemple}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a temple" />
                </SelectTrigger>
                <SelectContent>
                  {temples.map((temple) => (
                    <SelectItem key={temple.id} value={temple.id}>
                      <div className="flex items-center justify-between w-full">
                        <span>{temple.name}</span>
                        <span className={`text-sm ${getCrowdColor(temple.currentCrowd)}`}>
                          {temple.currentCrowd}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date">Visit Date</Label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <Label htmlFor="time">Time Slot</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="people">Number of People</Label>
              <Input
                type="number"
                min="1"
                max="20"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                placeholder="Enter number of visitors"
              />
            </div>

            <Button onClick={handleBooking} className="w-full">
              Book Slot
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Live Crowd Status
            </CardTitle>
            <CardDescription>
              Current crowd levels at major temples
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {temples.map((temple) => (
                <div key={temple.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{temple.name}</h4>
                    <p className="text-sm text-muted-foreground">{temple.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className={`font-medium ${getCrowdColor(temple.currentCrowd)}`}>
                      {temple.currentCrowd}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};