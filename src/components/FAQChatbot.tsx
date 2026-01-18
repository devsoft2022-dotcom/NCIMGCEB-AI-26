import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}
// Section links for navigation
const sectionLinks: Record<string, { name: string; id: string; isExternal?: boolean }> = {
  about: { name: "About", id: "about" },
  tracks: { name: "Scientific Tracks", id: "tracks" },
  dates: { name: "Important Dates", id: "dates" },
  callforpapers: { name: "Call for Papers", id: "call-for-papers" },
  registration: { name: "Registration", id: "registration" },
  committees: { name: "Committees", id: "committees" },
  speakers: { name: "Speakers", id: "speakers" },
  venue: { name: "Venue", id: "venue" },
  downloads: { name: "Downloads", id: "downloads" },
  contact: { name: "Contact", id: "contact" },
  whyattend: { name: "Why Attend", id: "why-attend" },
};
// Committee data for queries
const organizingCommittee = {
  president: "Dr. Achour Abdelraouf",
  chairs: ["Dr. Abdelhadi Sofiane", "Dr. Meghzili Seif Allah"],
  members: [
    "Dr. Hamiouda Sara", "Mr. Ghefari Abdelfattah", "Dr. Bouzit Fatima", "Dr. Goudjil Hadjer", "Mr. Djaafer Lakhdar",
    "Mme. Mehareb Soulef", "Dr. Berghout Oussama", "Dr. Louadj Amel", "Dr. Houari Hocine",
    "Dr. Mokadem Maamar", "Mr. Ghefari Abdelfattah", "Dr. Aissou Abdallah", "Dr. Bourahla Nassima",
    "Dr. Bouraghda Skander", "Dr. Megdoud Yousra", "Dr. Denine Sidali", "Mme. Bensoudane Sarra",
    "Dr. Ouahab Mohamed Younes", "Mme. Azzaz Ibtissam", "Mr. Boufrina Tawfiq", "Mme. Benammour Abir",
    "Dr. Barour Sabiha", "Dr. Sara Kherroubi"
  ],
};
const scientificCommittee = {
  president: "Dr. Hamiouda Sara",
  members: [
    "Dr. Yousfi Mohamed Lamine (Univ Tipaza)", "Pr. Daghbouche Yasmina (Univ Tipaza)",
    "Pr. Abdelmalk Samir (NSN Nano)", "Pr. Laidi Maammer (Univ Medea)",
    "Dr. Ould Khaoua Younes (USTHB)", "Pr. Si Moussa Cherif (Univ Medea)",
    "Pr. Kerchiche Yacine (ENP El Harrach)", "Dr. Yasmina Biskri (ENSETech Skikda)",
    "Dr. Kerzabi Rachida (CRAPAST Djelfa)", "Dr. Khalef Rostom (Univ Mila)",
    "Dr. Ali Tetbirt (UDES/EPST-CDER)", "Dr. Ziane Sami (Univ Mila)",
    "Dr. Abdeslam Nora Amele (Univ Biskra)", "and 45+ more researchers"
  ],
};

const faqData: { keywords: string[]; answer: string; links?: string[] }[] = [
  // --- General Information ---
  { 
    keywords: ["what is ncimgceb", "about congress", "tell me about", "what is this", "conference"], 
    answer: "NCIMGCEB-AI'26 is the 1st National Congress on Innovative Materials, Green Chemistry, Environment, Biomedical Sciences, and Artificial Intelligence Applications.\n\n📅 Date: April 25, 2026\n📍 Venue: Tipaza University – Morsli Abdellah\n\nIt's a premier gathering for researchers and professionals to explore the intersection of science and AI.",
    links: ["about"]
  },
  { 
    keywords: ["objectives", "goals", "aim", "purpose", "why was it created"], 
    answer: "🎯 Our Main Objectives:\n\n• Highlight advances in materials, chemistry, environment, & AI\n• Foster multidisciplinary collaboration\n• Bridge the gap between academia and industry\n• Promote sustainable development solutions\n• Integrate AI into traditional scientific fields",
    links: ["about"]
  },
  { 
    keywords: ["national or international", "scope", "international participants"], 
    answer: "While it is a National Congress, NCIMGCEB-AI'26 has an international scope! 🌍\n\nWe warmly welcome international participants and submissions. Papers can be presented in English or French.",
    links: ["about"]
  },
  { 
    keywords: ["language", "english", "french", "arabic", "presentation language"], 
    answer: "🗣️ Official Languages:\n\n• 🇬🇧 English (Preferred for publication)\n• 🇫🇷 French\n\nPresentations can be given in either language. We recommend including an English abstract for broader visibility.",
    links: ["callforpapers"]
  },

  // --- Dates & Schedule ---
  { 
    keywords: ["when", "date", "time", "schedule", "calendar"], 
    answer: "📅 Mark your calendar!\n\n**Congress Day:** April 25, 2026\n\nKey Deadlines:\n• Abstract Submission: March 15, 2026\n• Notification: March 25, 2026\n• Registration Ends: April 10, 2026",
    links: ["dates"]
  },
  { 
    keywords: ["program", "agenda", "timetable", "what happens"], 
    answer: "📋 Tentative Program (April 25):\n\n08:00 – Registration & Welcome\n09:00 – Opening Ceremony\n09:30 – Keynote Speeches\n11:00 – Coffee Break\n11:30 – Parallel Sessions (Oral)\n13:00 – Lunch & Poster Session\n14:30 – Parallel Sessions continue\n16:30 – Closing Ceremony & Awards\n\nDetailed program coming soon!",
    links: ["dates"]
  },

  // --- Registration ---
  { 
    keywords: ["registration fee", "cost", "price", "how much", "fees"], 
    answer: "💰 Registration Fees:\n\n🎓 **Students:** 3,000 DZD\n👨‍🏫 **Academics:** 5,000 DZD\n💼 **Professionals:** 7,000 DZD\n\nFee covers: Access to all sessions, congress kit, lunch, coffee breaks, and certificate.",
    links: ["registration"]
  },
  { 
    keywords: ["how to register", "sign up", "join", "participation"], 
    answer: "📝 Registration is easy:\n\n1. Click 'Register Now' on our site\n2. Fill the Google Form\n3. Upload your abstract (if presenting)\n4. Receive payment instructions via email\n5. Complete payment to confirm your spot",
    links: ["registration"]
  },
  { 
    keywords: ["deadline", "last date", "late registration"], 
    answer: "⚠️ Important Deadlines:\n\n• **Abstract Submission:** March 15, 2026\n• **Registration Closes:** April 10, 2026\n\nWe strongly recommend registering early as spots may be limited!",
    links: ["dates"]
  },
  { 
    keywords: ["payment", "pay", "bank", "ccp"], 
    answer: "💳 Payment Methods:\n\n• CCP Transfer (Algeria Post)\n• Bank Transfer\n• Cash (at Tipaza University, by appointment)\n\nDetailed account information will be sent to you after you submit the registration form.",
    links: ["registration"]
  },
  { 
    keywords: ["refund", "cancel", "money back"], 
    answer: "🔄 Cancellation Policy:\n\n• 80% refund before March 25\n• 50% refund before April 10\n• No refunds after April 10\n\nPlease contact us immediately if you need to cancel.",
    links: ["contact"]
  },

  // --- Submissions & Papers ---
  { 
    keywords: ["submit", "submission", "abstract", "paper"], 
    answer: "📄 Submission Guidelines:\n\n• **Length:** 250-300 words for abstracts\n• **Format:** Word or PDF using our template\n• **Content:** Title, Authors, Affiliations, Keywords, Objectives, Methodology, Results\n• **Originality:** Must be unpublished work",
    links: ["callforpapers", "downloads"]
  },
  { 
    keywords: ["topics", "themes", "tracks", "subjects"], 
    answer: "🔬 We invite papers in 5 main tracks:\n\n1. Innovative Materials\n2. Green Chemistry\n3. Environment & Sustainability\n4. Biomedical Sciences\n5. AI Applications in Science\n\nWhich one fits your research?",
    links: ["tracks"]
  },
  { 
    keywords: ["publication", "journal", "proceedings", "publish"], 
    answer: "📚 Publication Opportunities:\n\n• All accepted abstracts in the **Congress Book of Abstracts** (ISBN)\n• Selected high-quality papers will be invited for publication in **indexed partner journals**.\n• Best Paper Awards will be given!",
    links: ["callforpapers"]
  },
  { 
    keywords: ["poster", "oral", "presentation type"], 
    answer: "🎤 Presentation Types:\n\n• **Oral:** 15 mins presentation + 5 mins Q&A\n• **Poster:** Dimensions 90x120cm (Portrait). Dedicated session during lunch.\n\nYou can indicate your preference during submission.",
    links: ["callforpapers"]
  },

  // --- Venue & Travel ---
  { 
    keywords: ["venue", "location", "where", "place", "tipasa"], 
    answer: "📍 Venue:\n\n**University of Tipaza – Morsli Abdellah**\nTipasa, Algeria.\n\nA beautiful coastal city known for its Roman ruins (UNESCO World Heritage) and scenic Mediterranean views.",
    links: ["venue"]
  },
  { 
    keywords: ["transport", "airport", "get there", "travel"], 
    answer: "✈️ Travel Info:\n\n• **Airport:** Algiers International Airport (ALG) is ~70km away.\n• **Road:** Accessible via the East-West Highway.\n• **Bus/Taxi:** Available from Algiers to Tipaza.\n\nWe can provide travel advice if needed!",
    links: ["venue"]
  },
  { 
    keywords: ["hotel", "accommodation", "stay"], 
    answer: "🏨 Accommodation:\n\nTipasa has many hotels and resorts. We are negotiating special rates for participants at nearby hotels.\n\nList of recommended hotels will be shared with registered participants.",
    links: ["venue"]
  },
  { 
    keywords: ["visa", "invitation letter"], 
    answer: "🛂 Visa Support:\n\nInternational participants needing a visa for Algeria can request an **Official Invitation Letter** after their abstract is accepted and registration is confirmed.",
    links: ["contact"]
  },

  // --- Committees ---
  { 
    keywords: ["president", "achour", "organizer"], 
    answer: "The Congress President is **Dr. Achour Abdelraouf**.\n\nThe event is organized by a dedicated team from Tipaza University and partner institutions.",
    links: ["committees"]
  },
  { 
    keywords: ["scientific committee", "reviewers"], 
    answer: "🔬 Scientific Committee:\n\nChaired by **Dr. Hamiouda Sara**, it includes over 50 experts from various universities (Tipaza, USTHB, Medea, etc.) ensuring rigorous peer review.",
    links: ["committees"]
  },
  { 
    keywords: ["organizing committee", "team"], 
    answer: "The Organizing Committee is chaired by **Dr. Abdelhadi Sofiane** and **Dr. Meghzili Seif Allah**, supported by a dynamic team managing logistics, reception, and media.",
    links: ["committees"]
  },

  // --- Fun / Persona ---
  { 
    keywords: ["who are you", "what are you", "bot", "real"], 
    answer: "I'm the **NCIMGCEB-AI'26 Assistant**! 🤖\n\nI'm an AI-powered chatbot designed to help you navigate the congress details. While I'm not human, I'm programmed to be as helpful as possible!",
    links: []
  },

  { 
    keywords: ["hello", "hi", "hey", "greetings", "salam", "bonjour"], 
    answer: "Hello there! 👋\n\nWelcome to NCIMGCEB-AI'26. How can I help you today? You can ask me about dates, submission, fees, or the venue!",
    links: []
  },
  { 
    keywords: ["thank", "thanks", "merci", "shukran"], 
    answer: "You're very welcome! 😊\n\nIf you have any more questions, just ask. We look forward to seeing you in Tipaza!",
    links: []
  },
  { 
    keywords: ["joke", "funny"], 
    answer: "Why did the AI go to the conference?\n\nTo improve its *neural* network! 😄\n\n(I promise the scientific talks will be better than my jokes!)",
    links: []
  },
  { 
    keywords: ["contact", "email", "phone", "support"], 
    answer: "📞 Contact Us:\n\n• **Email:** ncimgcebai26event@gmail.com\n• **Phone:** +213 779 440 345\n• **WhatsApp:** Available on the site\n\nWe usually reply within 24 hours.",
    links: ["contact"]
  }
];

const quickQuestions = [
  "How to submit?", 
  "Registration fees?",
  "Important dates?",
  "Where is the venue?",
  "Publication info?",
  "Contact organizers"
];

const WELCOME_MESSAGE = "Hello! 👋 I'm the NCIMGCEB-AI'26 Congress Assistant.\n\nI can help you with everything about our congress:\n\n📋 General information & objectives\n📝 Submission guidelines\n💰 Registration & fees\n📅 Important deadlines\n👥 Organizing & Scientific Committees\n📍 Venue, travel & accommodation\n📥 Templates & downloads\n📞 Contact details\n\nHow can I assist you today?";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const speak = (text: string) => {
    if (!isSoundOn) return;
    
    // Cancel any current speech
    window.speechSynthesis.cancel();

    // Clean text for speech (remove markdown, links, emojis)
    const cleanText = text
      .replace(/ .+$/, "") // Remove link markers
      .replace(/\*\*/g, "") // Remove bold markdown
      .replace(/👉/g, "") // Remove specific emojis if needed
      .replace(/https?:\/\/\S+/g, "the link below"); // Replace URLs

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Try to select a good English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("Samantha"));
    if (preferredVoice) utterance.voice = preferredVoice;

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Cleanup speech on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => { 
        setIsTyping(false); 
        setMessages([{ id: 1, text: WELCOME_MESSAGE, isBot: true }]);
        if (isSoundOn) speak(WELCOME_MESSAGE);
      }, 1200);
    }
  }, [isOpen, messages.length]);
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 100); }, [isOpen]);

  const findAnswer = (q: string): { text: string; links?: string[] } => {
    const lower = q.toLowerCase();
    for (const faq of faqData) {
      for (const kw of faq.keywords) {
        if (lower.includes(kw)) {
          return { text: faq.answer, links: faq.links };
        }
      }
    }
    return { 
      text: "I'm not sure about that specific question. 🤔\n\nHere are some topics I can help with:\n\n• Congress information & objectives\n• Submission process & guidelines\n• Registration & fees\n• Important dates\n• Committees (organizing & scientific)\n• Venue & travel\n• Downloads & templates\n\nOr feel free to contact us directly:",
      links: ["contact", "about"]
    };
  };

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isTyping) return;
    setMessages(prev => [...prev, { id: prev.length + 1, text: msg, isBot: false }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const { text: answer, links } = findAnswer(msg);
      const fullAnswer = answer + (links ? `\n\n ${links.join(",")}` : "");
      setTimeout(() => { 
        setIsTyping(false); 
        setMessages(prev => [...prev, { id: prev.length + 1, text: fullAnswer, isBot: true }]); 
        speak(fullAnswer);
      }, Math.min(500 + answer.length * 8, 2000));
    }, 600 + Math.random() * 800);
  };

  const renderMessageWithLinks = (text: string) => {
    const linkMatch = text.match(/ (.+)$/);
    const mainText = text.replace(/ .+$/, "").trim();
    const linkIds = linkMatch ? linkMatch[1].split(",") : [];

    return (
      <>
        <span className="whitespace-pre-line">{mainText}</span>
        {linkIds.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {linkIds.map(id => {
              const link = sectionLinks[id];
              if (!link) return null;
              
              if (link.isExternal) {
                return (
                  <a
                    key={id}
                    href={link.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors flex items-center gap-1"
                  >
                    → {link.name}
                  </a>
                );
              }

              return (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors flex items-center gap-1"
                >
                  → {link.name}
                </button>
              );
            })}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center ${isOpen ? "bg-secondary text-foreground" : "bg-gradient-to-r from-primary to-cyan text-primary-foreground hover:shadow-glow"}`}>
        {isOpen ? <X className="w-6 h-6" /> : <><MessageSquare className="w-6 h-6" /><span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan rounded-full animate-ping" /><span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan rounded-full" /></>}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl overflow-hidden animate-scale-in shadow-2xl">
          <div className="bg-gradient-to-r from-primary to-cyan p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center"><Bot className="w-6 h-6 text-primary-foreground" /></div>
              <div className="flex-1">
                <div className="flex items-center gap-2"><h3 className="font-semibold text-primary-foreground">Congress Assistant</h3><Sparkles className="w-4 h-4 text-primary-foreground/80" /></div>
                <div className="flex items-center gap-2 text-xs text-primary-foreground/80"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />Online • Ready to guide you</div>
              </div>
              <button 
                onClick={() => {
                  const newState = !isSoundOn;
                  setIsSoundOn(newState);
                  if (!newState) window.speechSynthesis.cancel();
                }} 
                className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                title={isSoundOn ? "Mute" : "Enable Text-to-Speech"}
              >
                {isSoundOn ? <Volume2 className="w-5 h-5 text-primary-foreground" /> : <VolumeX className="w-5 h-5 text-primary-foreground/70" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-primary-foreground/10 rounded-lg"><X className="w-5 h-5 text-primary-foreground" /></button>
            </div>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map(m => (
              <div key={m.id} className={`flex items-start gap-2 animate-fade-in-up ${m.isBot ? "" : "flex-row-reverse"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.isBot ? "bg-primary/20" : "bg-cyan/20"}`}>{m.isBot ? <Bot className="w-4 h-4 text-primary" /> : <User className="w-4 h-4 text-cyan" />}</div>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.isBot ? "bg-secondary text-foreground rounded-tl-sm" : "bg-primary text-primary-foreground rounded-tr-sm"}`}>
                  {m.isBot ? renderMessageWithLinks(m.text) : <span className="whitespace-pre-line">{m.text}</span>}
                </div>
              </div>
            ))}
            {isTyping && <div className="flex items-start gap-2 animate-fade-in-up"><div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><Bot className="w-4 h-4 text-primary" /></div><div className="bg-secondary rounded-2xl rounded-tl-sm p-4"><div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" /><span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:"150ms"}} /><span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:"300ms"}} /></div></div></div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-border bg-secondary/30">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {quickQuestions.map(q => (
                <button key={q} onClick={() => handleSend(q)} disabled={isTyping} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50">{q}</button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about the congress..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground"
                disabled={isTyping}
              />
              <Button onClick={() => handleSend()} disabled={isTyping || !input.trim()} size="icon" className="rounded-xl bg-primary hover:bg-primary/90"><Send className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
