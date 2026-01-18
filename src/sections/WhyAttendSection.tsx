import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Users, BookOpen, Cpu, Award, Network, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Network,
    title: "National & Interdisciplinary Collaboration",
    description: "Connect with leading researchers across disciplines and build lasting professional networks.",
  },
  {
    icon: BookOpen,
    title: "High-Quality Publications",
    description: "Selected papers will be published in reputable indexed journals and proceedings.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Research Impact",
    description: "Explore how AI is transforming scientific research and accelerating discoveries.",
  },
  {
    icon: Award,
    title: "Best Paper Awards",
    description: "Recognition for outstanding research contributions across all scientific tracks.",
  },
  {
    icon: Users,
    title: "Expert Keynote Sessions",
    description: "Learn from distinguished speakers and pioneers in their respective fields.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description: "Workshops and sessions designed to advance your research career.",
  },
];

export const WhyAttendSection = () => {
  return (
    <SectionWrapper id="why-attend" background="muted">
      <SectionTitle 
        title="Why Attend NCIMGCEB-AI'26?" 
        subtitle="Join Algeria's premier interdisciplinary scientific congress and be part of shaping the future"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className="flex gap-4 group"
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-secondary border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
