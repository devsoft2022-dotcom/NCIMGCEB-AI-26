import { useEffect, useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "muted" | "gradient";
}

export const SectionWrapper = ({ 
  children, 
  id, 
  className = "",
  background = "default"
}: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClasses = {
    default: "",
    muted: "bg-secondary/30",
    gradient: "bg-gradient-to-b from-transparent via-secondary/20 to-transparent",
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-20 md:py-32 opacity-0 translate-y-8 transition-all duration-700 ${bgClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
