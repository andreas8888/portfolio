import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(15,15,30,0.85)] backdrop-blur-xs border-b border-cyan-500/20 shadow-[0_0_60px_rgba(34,211,238,0.3)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <a href="#home" className="font-mono text-xl font-bold text-pink-500">
            andreas.linde<span className="text-cyan-400">ström</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-pink-400"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-purple-200 hover:text-pink-400 transition-colors"
              >
                {item === "home" ? "Hem" : item === "about" ? "Om" : item === "projects" ? "Erfarenhet" : "Kontakt"}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
