import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SolutionOverview } from "@/components/SolutionOverview";
import { DashboardPreview } from "@/components/DashboardPreview";
import { MobileAppSection } from "@/components/MobileAppSection";
import { ImpactSection } from "@/components/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <SolutionOverview />
        <section id="dashboard">
          <DashboardPreview />
        </section>
        <MobileAppSection />
        <section id="impact">
          <ImpactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
