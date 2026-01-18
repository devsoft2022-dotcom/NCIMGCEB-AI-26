import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet, FileType, Download } from "lucide-react";

const downloads = [
  {
    icon: FileText,
    title: "Congress Flyer",
    description: "Official congress flyer with all essential information",
    format: "PDF",
    size: "603.6 kB",
    color: "from-primary to-cyan",
    filename: "NCIMGCEB-AI26-Flyer.pdf",
    path: "/templates/congress-flyer.pdf",
  },
    {
    icon: FileType,
    title: "Abstract Template",
    description: "Official abstract template for submissions",
    format: "DOCX",
    size: "856 KB",
    color: "from-violet to-primary",
    filename: "NCIMGCEB-AI26-Abstract-Template.docx",
    path: "/templates/abstract-template.docx",
  },
  {
    icon: FileSpreadsheet,
    title: "Poster Template",
    description: "Standard poster template for your presentation",
    format: "PPTX",
    size: "1.8 MB",
    color: "from-cyan to-violet",
    filename: "NCIMGCEB-AI26-Poster-Template.pptx",
    path: "/templates/poster-template.pptx",
  },

];

export const DownloadsSection = () => {
  return (
    <SectionWrapper id="downloads" background="muted">
      <SectionTitle 
        title="Downloads" 
        subtitle="Access all the templates and materials you need for your submission"
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {downloads.map((item) => (
          <Card key={item.title} variant="glass" className="hover-lift group">
            <CardHeader className="text-center">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {item.format}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                  {item.size}
                </span>
              </div>
              <Button 
                variant="hero" 
                className="w-full" 
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = item.path;
                  link.download = item.filename;
                  link.click();
                }}
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
