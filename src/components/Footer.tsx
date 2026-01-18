// import { Calendar, MapPin, Mail, Phone } from "lucide-react";

// const footerLinks = {
//   quickLinks: [
//     { label: "Objectives", href: "#about" },
//     { label: "Scientific Topics", href: "#tracks" },
//     { label: "Important Dates", href: "#dates" },
//     { label: "Registration", href: "#registration" },
//   ],
//   resources: [
//     { label: "Call for Papers", href: "#call-for-papers" },
//     { label: "Downloads", href: "#downloads" },
//     // { label: "Speakers", href: "#speakers" },
//     { label: "Venue", href: "#venue" },
//   ],
// };

// export const Footer = () => {
//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="bg-secondary/30 border-t border-primary/10">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold text-sm">NC</span>    <div className="flex items-center gap-2">
//               <img
//                 src={`${import.meta.env.BASE_URL}logos/tipasa-university-logo.png`}
//                 alt="Tipaza University Logo"
//                 className={`
//                   w-auto rounded-lg border border-primary/20 shadow-sm
//                   h-12 sm:h-20 lg:h-20
//                   transition-all duration-300
//                   hover:scale-105
//                 `}
//               />
//               </div>
              
//               <span className="text-xl font-serif font-bold gradient-text">NCIMGCEB-AI'26</span>
//             </div>
//             <p className="text-muted-foreground text-sm mb-6">
//               1st National Congress on Innovative Materials, Green Chemistry, Environment, Biomedical Sciences, and AI Applications
//             </p>
//             <div className="space-y-3">
//               <div className="flex items-center gap-3 text-sm text-muted-foreground">
//                 <Calendar className="w-4 h-4 text-primary" />
//                 <span>April 25, 2026</span>
//               </div>
//               <div className="flex items-center gap-3 text-sm text-muted-foreground">
//                 <MapPin className="w-4 h-4 text-primary" />
//                 <span>Tipaza University, Algeria</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               {footerLinks.quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     onClick={(e) => handleClick(e, link.href)}
//                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-lg font-semibold text-foreground mb-6">Resources</h3>
//             <ul className="space-y-3">
//               {footerLinks.resources.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     onClick={(e) => handleClick(e, link.href)}
//                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold text-foreground mb-6">Contact</h3>
//             <div className="space-y-4">
//               <a href="mailto:ncimgcebai26event@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
//                 <Mail className="w-4 h-4" />
//                 ncimgcebai26event@gmail.com
//               </a>
//               <a href="tel:+213779440345" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
//                 <Phone className="w-4 h-4" />
//                 +213 779 440 345
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-muted-foreground text-sm">
//             © 2026 NCIMGCEB-AI'26. All rights reserved.
//           </p>
//      <p className="text-muted-foreground text-sm">
//   Created by{" "}
//   <a
//     href="https://tomorrowcoders.com"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-primary transition-colors"
//   >
//     Tomorrowcoders Team
//   </a>
// </p>


//           <div className="flex items-center gap-6">
//             <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
import { Calendar, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "Objectives", href: "#about" },
    { label: "Scientific Topics", href: "#tracks" },
    { label: "Important Dates", href: "#dates" },
    { label: "Registration", href: "#registration" },
  ],
  resources: [
    { label: "Call for Papers", href: "#call-for-papers" },
    { label: "Downloads", href: "#downloads" },
    { label: "Venue", href: "#venue" },
  ],
};

export const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Logo */}
              <img
                src={`${import.meta.env.BASE_URL}logos/ncimgceb-ai26-logo.png`}
                alt="NCIMGCEB-AI'26 Logo"
                className="
                  h-10 sm:h-16 lg:h-10 w-auto
                  rounded-xl
                  border border-primary/20
                  shadow-md
                  transition-transform duration-300
                  hover:scale-105
                "
              />

              {/* Title */}
              <span className="text-xl sm:text-2xl font-serif font-bold gradient-text">
                NCIMGCEB-AI'26
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              1st National Congress on Innovative Materials, Green Chemistry,
              Environment, Biomedical Sciences, and AI Applications
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                April 25, 2026
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Tipaza University, Algeria
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:ncimgcebai26event@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4" />
                ncimgcebai26event@gmail.com
              </a>
              <a
                href="tel:+213779440345"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                +213 779 440 345
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 NCIMGCEB-AI'26. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <a
              href="https://tomorrowcoders.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Tomorrowcoders Team
            </a>
          </p>

          <div className="flex gap-6">
            <a className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
