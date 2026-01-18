import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { MapPin, Building, Plane, Train } from "lucide-react";

export const VenueSection = () => {
  return (
    <SectionWrapper id="venue">
      <SectionTitle 
        title="Venue" 
        subtitle="Join us at the beautiful campus of Tipaza University, Algeria"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Venue Info */}
        <div className="space-y-6">
          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center flex-shrink-0">
                <Building className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Tipaza University
                </h3>
                <p className="text-muted-foreground">
                  A modern academic institution located in the historic coastal city of Tipaza, offering excellent facilities for academic conferences and events.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  Tipaza, Algeria — A UNESCO World Heritage coastal city located approximately 70 km west of Algiers, known for its stunning Mediterranean views and rich history.
                </p>
              </div>
            </div>
          </div>

       
        </div>

        {/* Map Placeholder */}
        {/* Map */}
        <div className="glass-card overflow-hidden hover-lift h-[400px] relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.067468661665!2d2.448525375768856!3d36.62518097230231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0c6c7f1e7d8d%3A0x6b8c8c8c8c8c8c8c!2sUniversity%20Centre%20Morsli%20Abdellah!5e0!3m2!1sen!2sdz!4v1709660000000!5m2!1sen!2sdz"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          <div className="absolute bottom-4 right-4 z-10">
            <a 
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgNGB4yCAgCEAAYDRgeMggIAxAAGA0YHjIKCAQQABgIGA0YHjIKCAUQABgIGA0YHjIKCAYQABgIGA0YHjIKCAcQABgIGA0YHjIKCAgQABiABBiiBDIHCAkQABjvBdIBCDcwNjJqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=dz&sa=X&geocode=KZ0MAT8AgIUSMQyuLSBhGCc8&daddr=Tipaza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-primary font-semibold rounded-lg shadow-lg transition-colors text-sm backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
