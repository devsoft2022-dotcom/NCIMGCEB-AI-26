// import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
// import { Target, Lightbulb, Globe, Cpu, Leaf, FlaskConical, Users, BrainCircuit, Recycle } from "lucide-react";

// const objectives = [
//   {
//     icon: Lightbulb,
//     text: "Highlight recent advances in innovative materials, green chemistry, environmental sciences, biomedical sciences, and AI applications",
//   },
//   {
//     icon: Users,
//     text: "Provide a multidisciplinary platform for researchers, academics, professionals, and students",
//   },
//   {
//     icon: Globe,
//     text: "Foster collaboration between universities and industry",
//   },
//   {
//     icon: BrainCircuit,
//     text: "Promote integration of AI into science and technology domains",
//   },
//   {
//     icon: Recycle,
//     text: "Support sustainable development and circular-economy initiatives",
//   },
// ];

// const importanceItems = [
//   { icon: Target, text: "Design and development of new functional and eco-friendly materials" },
//   { icon: Leaf, text: "Clean chemical processes and green technologies" },
//   { icon: Globe, text: "Environmental protection and renewable energy solutions" },
//   { icon: FlaskConical, text: "Advanced biomedical diagnostics and therapeutic technologies" },
//   { icon: Cpu, text: "AI-based modeling, simulation, and decision support systems" },
// ];

// export const AboutSection = () => {
//   return (
//     <SectionWrapper id="about" background="muted">
//       <SectionTitle 
//         title="About the NCIMGCEB-AI'26" 
//         subtitle="A premier gathering of scientists, researchers, and innovators dedicated to advancing sustainable science"
//       />

//       <div className="space-y-16">
//         {/* Introduction */}
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             The <span className="text-primary font-semibold">1st National Congress on Innovative Materials, Green Chemistry, Environment, Biomedical Sciences, and Artificial Intelligence Applications (NCIMGCEB-AI'26)</span> represents a landmark event in Algeria's scientific landscape, hosted by <span className="font-semibold">Tipaza University – Morsli Abdellah</span> on <span className="font-semibold">April 25, 2026</span>.
//           </p>
//         </div>

//         {/* Objectives */}
//         <div>
//           <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-8">
//             🎯 Objectives of the NCIMGCEB-AI'26
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {objectives.map((objective, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-6 hover-lift flex items-start gap-4"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center shrink-0">
//                   <objective.icon className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <p className="text-muted-foreground">{objective.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scientific Importance */}
//         <div>
//           <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-4">
//             🧠 Scientific Importance
//           </h3>
//           <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
//             The NCIMGCEB-AI'26 focuses on the central theme of innovation and sustainability across five interconnected fields: innovative materials, green chemistry, environment, biomedical sciences, and artificial intelligence applications.
//           </p>
          
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {importanceItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-5 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors flex items-start gap-3"
//               >
//                 <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
//                 <p className="text-foreground text-sm">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-8">
//             The NCIMGCEB-AI'26 aims to bridge fundamental research and industrial applications, encourage interdisciplinary collaboration, and contribute to solving national and global challenges.
//           </p>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };
import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Target, Lightbulb, Globe, Cpu, Leaf, FlaskConical, Users, BrainCircuit, Recycle } from "lucide-react";

const objectives = [
  {
    icon: Lightbulb,
    text: "Highlight recent advances in innovative materials, green chemistry, environmental sciences, biomedical sciences, and AI applications",
  },
  {
    icon: Users,
    text: "Provide a multidisciplinary platform for researchers, academics, professionals, and students",
  },
  {
    icon: Globe,
    text: "Foster collaboration between universities and industry",
  },
  {
    icon: BrainCircuit,
    text: "Promote integration of AI into science and technology domains",
  },
  {
    icon: Recycle,
    text: "Support sustainable development and circular-economy initiatives",
  },
  {
    icon: Target,
    text: "Allow participants to use English, French, or Arabic in presentations and papers according to their preference",
  },
];

const importanceItems = [
  { icon: Target, text: "Design and development of new functional and eco-friendly materials" },
  { icon: Leaf, text: "Clean chemical processes and green technologies" },
  { icon: Globe, text: "Environmental protection and renewable energy solutions" },
  { icon: FlaskConical, text: "Advanced biomedical diagnostics and therapeutic technologies" },
  { icon: Cpu, text: "AI-based modeling, simulation, and decision support systems" },
];

export const AboutSection = () => {
  return (
    <SectionWrapper id="about" background="muted">
      <SectionTitle 
        title="About the NCIMGCEB-AI'26" 
        subtitle="A premier gathering of scientists, researchers, and innovators dedicated to advancing sustainable science"
      />

      <div className="space-y-16">

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The <span className="text-primary font-semibold">1st National Congress on Innovative Materials, Green Chemistry, Environment, Biomedical Sciences, and Artificial Intelligence Applications (NCIMGCEB-AI'26)</span> represents a landmark event in Algeria's scientific landscape, hosted by <span className="font-semibold">Tipaza University – Morsli Abdellah</span> on <span className="font-semibold">April 25, 2026</span>.
          </p>
        </div>

        {/* Objectives */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-8">
            🎯 Objectives of the NCIMGCEB-AI'26
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift flex items-start gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center shrink-0">
                  <objective.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">{objective.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scientific Importance */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-4">
            🧠 Scientific Importance
          </h3>

          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            The NCIMGCEB-AI'26 focuses on the central theme of innovation and sustainability across five interconnected fields: innovative materials, green chemistry, environment, biomedical sciences, and artificial intelligence applications.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {importanceItems.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors flex items-start gap-3"
              >
                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-8">
            The NCIMGCEB-AI'26 aims to bridge fundamental research and industrial applications, encourage interdisciplinary collaboration, and contribute to solving national and global challenges.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
