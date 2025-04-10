import { useState, useEffect  } from "react";
import './App.css'
import "./index.css"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Toaster } from 'react-hot-toast';
import { StarfieldBackground } from "./components/StarfieldBackground";

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    if (window.location.hash) {
      const noHashURL = window.location.href.replace(window.location.hash, "");
      window.history.replaceState(null, "", noHashURL);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <StarfieldBackground />
      
      {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}></LoadingScreen>}{""}
      
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}
          text-gray-100`}>  
          
          <Toaster position="bottom-center"
          toastOptions={{
            style: {
              background: "#1E3A8A", // Tailwind's blue-900
              color: "#F8FAFC", // Tailwind's slate-50
              borderRadius: "8px",
              border: "1px solid #3B82F6", // Tailwind's blue-500
            },
            success: {
              style: {
                background: "#15803D", // Tailwind's green-700
              },
            },
            error: {
              style: {
                background: "#961b08", // Tailwind's red-700
              },
            },
          }} />
          <Home></Home>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
      </div>
    </>
  );
}

export default App
