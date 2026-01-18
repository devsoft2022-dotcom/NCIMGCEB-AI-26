import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Atom, Leaf, TreePine, HeartPulse, Brain } from "lucide-react";

const tracks = [
  {
    icon: Atom,
    title: "Innovative Materials",
    description: "Advanced materials driving technological innovation and sustainability.",
    color: "from-primary to-emerald-glow",
    topics: [
      "Nanomaterials and nanotechnologies",
      "Bio-based and eco-sustainable composite materials",
      "Energy materials (batteries, supercapacitors, photovoltaics)",
      "Eco-friendly concretes and cements (eco-cements, geopolymers)",
      "Smart materials (self-healing, conductive, sensing)",
      "Industrial and technological applications of innovative materials",
    ],
  },
  {
    icon: Leaf,
    title: "Green Chemistry",
    description: "Sustainable chemical processes for a cleaner future.",
    color: "from-emerald-glow to-cyan",
    topics: [
      "Heterogeneous and homogeneous catalysis for clean processes",
      "Circular economy and valorization of industrial by-products",
      "Natural resource chemistry and biopolymers",
      "AI-assisted chemical processes and modeling",
      "New green solvents (water, ionic liquids, supercritical CO₂, deep eutectic solvents…)",
      "Innovations in sustainable pharmaceutical and cosmetic chemistry",
    ],
  },
  {
    icon: TreePine,
    title: "Environment",
    description: "Environmental protection and sustainable resource management.",
    color: "from-cyan to-violet",
    topics: [
      "Soil, air and water depollution",
      "Treatment and valorization of household, agricultural and industrial waste",
      "Renewable energies (solar, wind, biomass, hydrogen)",
      "Climate change adaptation and mitigation",
      "CO₂ capture and storage technologies",
      "Integrated management of natural resources and biodiversity",
    ],
  },
  {
    icon: HeartPulse,
    title: "Biomedical Sciences",
    description: "Innovative healthcare solutions and medical technologies.",
    color: "from-violet to-primary",
    topics: [
      "Development of biomaterials for implants and prostheses",
      "Nanoparticles and nanomedicine",
      "Personalized medicine and tissue engineering",
      "Innovative diagnostic and therapeutic technologies",
      "Pharmaceutical and cosmetological applications",
      "Medical biotechnologies and healthcare devices",
    ],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence Applications",
    description: "AI-powered solutions across science and industry.",
    color: "from-primary to-cyan",
    topics: [
      "AI and machine learning for material discovery and design",
      "AI for optimization of chemical, energy and industrial processes",
      "Smart systems for environmental management and protection",
      "AI in healthcare: medical imaging, assisted diagnosis, e-health",
      "Big Data, advanced modeling and multi-scale simulation",
      "Industry 4.0 and digital transformation in research and development",
    ],
  },
];

export const TracksSection = () => {
  return (
    <SectionWrapper id="tracks">
      <SectionTitle 
        title="Conference Topics" 
        subtitle="Explore our five interconnected research tracks spanning materials science, sustainability, and artificial intelligence"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <Card
            key={track.title}
            variant="glass"
            className={`hover-lift group cursor-pointer ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <CardHeader>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <track.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                {track.title}
              </CardTitle>
              <CardDescription className="text-base">
                {track.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {track.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
