import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, AlertTriangle, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emergencyContacts = [
  { service: "Police", number: "100", icon: AlertTriangle },
  { service: "Medical Emergency", number: "108", icon: Phone },
  { service: "Tourist Helpline", number: "1363", icon: Phone },
  { service: "Disaster Management", number: "1070", icon: AlertTriangle },
];

export const EmergencyContact = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "support", message: "Hello! How can we help you today?", time: "10:30 AM" }
  ]);
  const { toast } = useToast();

  const sendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage = {
      sender: "user",
      message: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory([...chatHistory, newMessage]);
    setChatMessage("");

    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        sender: "support",
        message: "Thank you for reaching out. Our team is reviewing your message and will assist you shortly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, supportResponse]);
    }, 1000);
  };

  const makeEmergencyCall = (number: string, service: string) => {
    toast({
      title: "Emergency Call",
      description: `Connecting you to ${service} (${number})`,
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Emergency Support & Help</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
            <CardDescription>
              Quick access to emergency services and support
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergencyContacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-red-600" />
                    <div>
                      <h4 className="font-medium">{contact.service}</h4>
                      <p className="text-sm text-muted-foreground">24/7 Available</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => makeEmergencyCall(contact.number, contact.service)}
                  >
                    Call {contact.number}
                  </Button>
                </div>
              );
            })}

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-yellow-600" />
                <h4 className="font-medium text-yellow-800">Current Location Services</h4>
              </div>
              <p className="text-sm text-yellow-700">
                Enable location sharing for faster emergency response
              </p>
              <Button size="sm" variant="outline" className="mt-2">
                Share Location
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Live Support Chat
            </CardTitle>
            <CardDescription>
              Chat with our support team for non-emergency assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 border rounded-lg p-4 mb-4 overflow-y-auto bg-muted/20">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <div className="flex items-center gap-1 mt-1 opacity-70">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{msg.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};