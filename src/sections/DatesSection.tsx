import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Calendar, FileText, CheckCircle, Send, Award } from "lucide-react";

const dates = [
  {
    icon: FileText,
    date: "January 15, 2026",
    title: "Call for Abstract",
    description: "Start submitting your research abstracts through our online portal.",
    status: "upcoming",
  },
  {
    icon: Send,
    date: "March 08, 2026",
    title: "Abstract Submission Deadline",
    description: "Final deadline for abstract submissions.",
    status: "upcoming",
  },
  {
    icon: CheckCircle,
    date: "April 01, 2026",
    title: "Notification of Acceptance",
    description: "Authors will be notified about the status of their submissions.",
    status: "upcoming",
  },

  {
    icon: FileText,
    date: "April 20, 2026",
    title: "General Program Submission",
    description: "Authors will be notified about the Congress Program.",
    status: "upcoming",
  },
  {
    icon: Award,
    date: "April 25, 2026",
    title: "Congress Day",
    description: "The main event at Tipaza University, Algeria.",
    status: "upcoming",
    highlight: true,
  },
];

export const DatesSection = () => {
  return (
    <SectionWrapper id="dates">
      <SectionTitle 
        title="Important Dates" 
        subtitle="Mark your calendar for these key milestones"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-cyan to-violet" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {dates.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${item.highlight ? "bg-gold animate-pulse" : "bg-primary"} ring-4 ring-background`} />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className={`glass-card p-6 hover-lift ${item.highlight ? "ring-2 ring-gold/50" : ""}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${item.highlight ? "bg-gold/20" : "bg-primary/20"} flex items-center justify-center`}>
                        <item.icon className={`w-5 h-5 ${item.highlight ? "text-gold" : "text-primary"}`} />
                      </div>
                      <span className={`text-sm font-semibold ${item.highlight ? "text-gold" : "text-primary"}`}>
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
