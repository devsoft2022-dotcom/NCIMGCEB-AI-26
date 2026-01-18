import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { User, Linkedin, Globe } from "lucide-react";

const speakers = [
  {
    name: "Prof. Ahmed Benali",
    title: "Distinguished Professor",
    affiliation: "University of Science and Technology Houari Boumediene",
    expertise: "Green Chemistry & Sustainable Materials",
    image: null,
  },
  {
    name: "Dr. Fatima Zohra Kaddour",
    title: "Research Director",
    affiliation: "CRAPC - Research Center",
    expertise: "Nanomaterials & Environmental Applications",
    image: null,
  },
  {
    name: "Prof. Mohamed Cherif",
    title: "Full Professor",
    affiliation: "University of Algiers 1",
    expertise: "AI in Biomedical Sciences",
    image: null,
  },
  {
    name: "Dr. Sarah Amrani",
    title: "Senior Researcher",
    affiliation: "CDTA - Advanced Technologies Research",
    expertise: "Machine Learning & Computational Chemistry",
    image: null,
  },
];

export const SpeakersSection = () => {
  return (
    <SectionWrapper id="speakers">
      <SectionTitle 
        title="Keynote Speakers" 
        subtitle="Distinguished researchers and experts who will share their insights and groundbreaking research"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <Card
            key={speaker.name}
            variant="glass"
            className="hover-lift group text-center overflow-hidden"
          >
            <CardContent className="p-6">
              {/* Photo Placeholder */}
              <div className="relative mx-auto w-32 h-32 rounded-full bg-secondary border-4 border-primary/20 mb-6 overflow-hidden group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-16 h-16 text-muted-foreground" />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {speaker.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {speaker.title}
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                {speaker.affiliation}
              </p>
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                {speaker.expertise}
              </span>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
                <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Globe className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          More speakers to be announced soon. Stay tuned for updates!
        </p>
      </div>
    </SectionWrapper>
  );
};
