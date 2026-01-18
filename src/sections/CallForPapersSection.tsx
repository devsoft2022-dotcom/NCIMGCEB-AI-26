import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Check, Globe, BookOpen } from "lucide-react";

const guidelines = [
  "Abstracts must be 250-300 words in English or French",
  "Include title, author(s), affiliation(s), and keywords",
  "Clearly state objectives, methodology, and expected results",
  "Submissions must be original and unpublished work",
  "Selected papers will be considered for journal publication",
];

const topics = [
  "Nanomaterials and Advanced Materials",
  "Green Chemistry and Sustainable Synthesis",
  "Environmental Monitoring and Protection",
  "Biomedical Materials and Drug Delivery",
  "AI and Machine Learning in Science",
  "Renewable Energy and Clean Technologies",
  "Computational Chemistry and Modeling",
  "Polymer Science and Engineering",
];

export const CallForPapersSection = () => {
  return (
    <SectionWrapper id="call-for-papers" background="muted">
      <SectionTitle 
        title="Call for Papers" 
        subtitle="We invite researchers to submit their original work for presentation and publication"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Submission Guidelines */}
        <Card variant="glass" className="hover-lift">
          <CardHeader>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Submission Guidelines</CardTitle>
            <CardDescription className="text-base">
              Follow these guidelines to ensure your submission is considered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{guideline}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                <FileText className="w-5 h-5" />
                Submit Abstract
              </Button>
              <Button variant="glass" size="lg">
                <BookOpen className="w-5 h-5" />
                Author Guidelines
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Topics */}
        <Card variant="glass" className="hover-lift">
          <CardHeader>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center mb-4">
              <Globe className="w-7 h-7 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Topics of Interest</CardTitle>
            <CardDescription className="text-base">
              We welcome submissions in the following areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm text-foreground">{topic}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Publication Opportunity:</span> Selected papers will be published in indexed journals and conference proceedings.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
