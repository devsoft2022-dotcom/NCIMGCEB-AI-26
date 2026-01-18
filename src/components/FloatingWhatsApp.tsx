import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const phoneNumber = "213779440345"; // Replace with actual number
  const message = encodeURIComponent("Hello, I would like information about NCIMGCEB-AI'26.");

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse Effect */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-pulse-ring" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-secondary text-foreground text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us on WhatsApp
      </span>
    </button>
  );
};
