import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Objectives", href: "#about" },
  { label: "Topics", href: "#tracks" },
  { label: "Dates", href: "#dates" },
  { label: "Committees", href: "#committees" },
  { label: "Registration", href: "#registration" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Left Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logos/ncimgceb-ai26-logo.png`}
                alt="NCIMGCEB-AI'26 Logo"
                className={`
                  w-auto rounded-lg shadow-sm transition-all duration-300
                  h-14 sm:h-16 lg:h-20
                  ${isScrolled ? "lg:h-12 sm:h-14" : ""}
                `}
              />
              <span className="hidden sm:block font-serif font-bold text-lg gradient-text">
                NCIMGCEB-AI'26
              </span>
            </div>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <ThemeToggle />

            {/* University Logo */}
            <div className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}logos/tipasa-university-logo.png`}
                alt="Tipaza University Logo"
                className={`
                  w-auto rounded-lg border border-primary/20 shadow-sm
                  h-12 sm:h-20 lg:h-20
                  transition-all duration-300
                  ${isScrolled ? "lg:h-10 sm:h-12" : ""}
                `}
              />
              <span className="hidden md:block text-xs text-muted-foreground leading-tight">
                Tipaza<br />University
              </span>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-card animate-fade-in-up">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
