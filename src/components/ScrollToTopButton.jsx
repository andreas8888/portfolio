import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 p-3 rounded-full z-50 transition-all duration-300 ease-in-out
      bg-[rgba(15,15,30,0.85)] backdrop-blur-xs border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)] 
      hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-400/40 hover:scale-105 
      text-cyan-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp
        size={24}
        className="stroke-[2.5] text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.2)]"
      />
    </button>
  );
};