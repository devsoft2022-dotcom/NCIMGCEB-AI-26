import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, FileText } from "lucide-react";

export const ContactSection = () => {
  const openWhatsApp = () => {
    // Placeholder WhatsApp number - replace with your real number
    window.open("https://wa.me/213779440345?text=Hello%2C%20I%20have%20a%20question%20about%20NCIMGCEB-AI%2726", "_blank");
  };

  const openContactForm = () => {
    // Placeholder Google Form link - replace with your real form
    window.open("https://forms.gle/YOUR_CONTACT_FORM_ID", "_blank");
  };

  return (
    <SectionWrapper id="contact" background="muted">
      <SectionTitle 
        title="Contact Us" 
        subtitle="Have questions? We're here to help. Reach out to our organizing committee."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:ncimgcebai26event@gmail.com" className="text-primary hover:underline">
                  ncimgcebai26event@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+213779440345" className="text-primary hover:underline">
                  +213 779 440 345
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet to-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  Tipaza University<br />
                  Tipaza, Algeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="glass-card p-8 hover-lift">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Get in Touch</h3>
              <p className="text-muted-foreground">
                Choose your preferred way to contact us. We typically respond within 24 hours.
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-emerald/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Fastest response time</p>
                </div>
              </div>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full bg-emerald hover:bg-emerald/90"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Send to WhatsApp
              </Button>
            </div>

            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">or</span>
              </div>
            </div> */}

            {/* Google Form Button
            // <div className="space-y-3">
            //   <div className="flex items-center gap-3 mb-2">
            //     <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            //       <FileText className="w-5 h-5 text-primary" />
            //     </div>
            //     <div>
            //       <h4 className="font-semibold text-foreground">Contact Form</h4>
            //       <p className="text-sm text-muted-foreground">For detailed inquiries</p>
            //     </div>
            //   </div>
            //   <Button 
            //     variant="heroOutline" 
            //     size="lg" 
            //     className="w-full"
            //     onClick={openContactForm}
            //   >
            //     <FileText className="w-5 h-5" />
            //     Contact via Google Form
            //   </Button>
            // </div> */}

            <p className="text-center text-sm text-muted-foreground mt-6">
              📧 For official matters, you can also email us directly at{" "}
              <a href="mailto:ncimgcebai26event@gmail.com" className="text-primary hover:underline">
                ncimgcebai26event@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
