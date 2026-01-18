import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, GraduationCap, Briefcase, Building } from "lucide-react";

const tiers = [
  {
    icon: GraduationCap,
    title: "Student",
    price: "3,000 DZD",
    // priceUsd: "~$22",
    description: "For enrolled students with valid ID",
    features: [
      "Full congress access",
      "Conference materials",
      "Certificate of attendance",
      "Coffee breaks & lunch",
      "Networking sessions",
    ],
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Academic",
    price: "5,000 DZD",
    // priceUsd: "~$37",
    description: "For researchers and University members",
    features: [
      "Full congress access",
      "Conference materials",
      "Certificate of attendance",
      "Coffee breaks & lunch",
      "Networking sessions",
      // "Publication opportunity",
      "Congress proceedings",
    ],
    popular: true,
  },
  {
    icon: Building,
    title: "Professional",
    price: "7,000 DZD",
    // priceUsd: "~$60",
    description: "For industry professionals",
    features: [
      "Full congress access",
      "Conference materials",
      "Certificate of attendance",
      "Coffee breaks & lunch",
      "Networking sessions",
      // "Publication opportunity",
      // "Workshop access",
      // "Priority seating",
      "Congress proceedings", 
      "Priority seating",
    ],
    popular: false,
  },
];

export const RegistrationSection = () => {
  return (
    <SectionWrapper id="registration">
      <SectionTitle 
        title="Registration" 
        subtitle="Choose your registration tier and secure your spot at NCIMGCEB-AI'26"
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <Card
            key={tier.title}
            variant="glass"
            className={`hover-lift relative ${tier.popular ? "ring-2 ring-primary" : ""}`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                {/* <span className="px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-cyan text-primary-foreground">
                  {/* Most Popular */}
                {/* </span> */} 
              </div>
            )}
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center mx-auto mb-4">
                <tier.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-serif font-bold text-foreground">{tier.price}</span>
                {/* <span className="text-muted-foreground ml-2 text-sm">{tier.priceUsd}</span> */}
              </div>

              <ul className="space-y-3 text-left mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "hero" : "heroOutline"} 
                className="w-full"
                size="lg"
                asChild
              >
                <a 
                  href="https://forms.gle/Es6qdjojpSUTngzUA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Submit Your Abstract
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          The registration ends <span className="text-primary font-semibold">March 08, 2026</span>
        </p>
      </div>
    </SectionWrapper>
  );
};
