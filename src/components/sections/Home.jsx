import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Andreas
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Andreas är en Systemutvecklare med brett tekniskt intresse och erfarenhet. Gedigen kunskap inom .NET och Microsofts miljö.
            God problemlösare med Fullstackprofil.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-pink-600 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]"
            >
              Erfarenhet
            </a>

            <a
              href="#contact"
              className="border border-pink-400 text-pink-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,105,180,0.4)] hover:bg-pink-400/10"
            >
              Kontakta
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
