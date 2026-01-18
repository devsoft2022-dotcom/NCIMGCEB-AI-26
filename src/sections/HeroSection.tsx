import { Button } from "@/components/ui/button";
import { Calendar, MapPin, FileText, Download, FileSpreadsheet, ArrowDown } from "lucide-react";

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle bg-primary/20"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-violet/10 rounded-full blur-3xl animate-float-slow" />
    </div>
  );
};

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCallForPapers = () => {
    document.querySelector("#call-for-papers")?.scrollIntoView({ behavior: "smooth" });
  };

  const openRegistration = () => {
    window.open("https://forms.gle/Es6qdjojpSUTngzUA", "_blank");
  };

  const downloadFlyer = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}templates/congress-flyer.pdf`;
    link.download = 'NCIMGCEB-AI26-Flyer.pdf';
    link.click();
  };

  const downloadPosterTemplate = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}templates/poster-template.pptx`;
    link.download = 'NCIMGCEB-AI26-Poster-Template.pptx';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-background">
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
        

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">1st National Congress</span>
            <br />
            <span className="text-foreground">on Innovative Materials,</span>
            <br />
            <span className="text-foreground">Green Chemistry , Environment, Biomedical Sciences & </span>
            <br />
            <span className="gradient-text text-glow">AI Applications</span>
          </h1>

          {/* Congress Name */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="inline-block text-3xl md:text-4xl lg:text-5xl font-serif font-bold gradient-text text-glow tracking-wide">
              NCIMGCEB-AI'26
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Shaping the Future of Science through Sustainability and Artificial Intelligence
          </p>

          {/* Date & Location Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Date</p>
                <p className="text-foreground font-semibold">April 25, 2026</p>
              </div>
            </div>
            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-cyan" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-foreground font-semibold">Tipaza University, Algeria</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            {/* <Button variant="hero" size="xl" onClick={scrollToCallForPapers}>
              <FileText className="w-5 h-5" />
              Call for Papers
            </Button> */}
            <Button variant="heroOutline" size="xl" onClick={openRegistration}>
              Register Now
            </Button>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <Button variant="glass" size="lg" onClick={downloadFlyer}>
              <Download className="w-4 h-4" />
              Download Flyer (PDF)
            </Button>
            <Button variant="glass" size="lg" onClick={downloadPosterTemplate}>
              <FileSpreadsheet className="w-4 h-4" />
              Poster Template (PPT)
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <div className="glass-card p-3 rounded-full">
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
