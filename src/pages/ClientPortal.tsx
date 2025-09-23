import { Navigation } from "@/components/Navigation";
import { SlotBooking } from "@/components/client/SlotBooking";
import { MoodBasedRecommendations } from "@/components/client/MoodBasedRecommendations";
import { EmergencyContact } from "@/components/client/EmergencyContact";
import { GuideBooking } from "@/components/client/GuideBooking";
import { ShoppingSections } from "@/components/client/ShoppingSections";
import { HotelBooking } from "@/components/client/HotelBooking";

const ClientPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-sacred bg-clip-text text-transparent mb-4">
              Pilgrimage Companion Portal
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your complete spiritual journey companion - from planning to experiencing India's sacred heritage
            </p>
          </header>

          <div className="space-y-16">
            <section id="slot-booking">
              <SlotBooking />
            </section>
            
            <section id="recommendations">
              <MoodBasedRecommendations />
            </section>
            
            <section id="emergency">
              <EmergencyContact />
            </section>
            
            <section id="guide-booking">
              <GuideBooking />
            </section>
            
            <section id="shopping">
              <ShoppingSections />
            </section>
            
            <section id="hotels">
              <HotelBooking />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientPortal;