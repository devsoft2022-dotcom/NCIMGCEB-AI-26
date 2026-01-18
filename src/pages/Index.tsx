import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FAQChatbot } from "@/components/FAQChatbot";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { TracksSection } from "@/sections/TracksSection";
import { WhyAttendSection } from "@/sections/WhyAttendSection";
import { DatesSection } from "@/sections/DatesSection";
import { CallForPapersSection } from "@/sections/CallForPapersSection";
import { SpeakersSection } from "@/sections/SpeakersSection";
import { CommitteesSection } from "@/sections/CommitteesSection";
import { RegistrationSection } from "@/sections/RegistrationSection";
import { DownloadsSection } from "@/sections/DownloadsSection";
import { VenueSection } from "@/sections/VenueSection";
import { ContactSection } from "@/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NCIMGCEB-AI'26 | 1st National Congress on Innovative Materials, Green Chemistry & AI</title>
        <meta 
          name="description" 
          content="Join the 1st National Congress on Innovative Materials, Green Chemistry, Environment, Biomedical Sciences, and AI Applications. April 25, 2026 at Tipaza University, Algeria." 
        />
        <meta name="keywords" content="NCIMGCEB-AI, congress, scientific conference, green chemistry, AI, Algeria, Tipaza University, innovative materials, biomedical sciences" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <TracksSection />
          {/* <WhyAttendSection /> */}
           <CommitteesSection />
          <DatesSection />
          {/* <CallForPapersSection /> */}
          {/* <SpeakersSection /> */}
         
          <RegistrationSection />
          <DownloadsSection />
          <VenueSection />
          <ContactSection />
        </main>

        <Footer />
        
        {/* Floating Actions */}
        <FloatingWhatsApp />
        <FAQChatbot />
      </div>
    </>
  );
};

export default Index;
