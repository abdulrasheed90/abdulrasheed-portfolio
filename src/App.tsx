import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../logo2.png";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-neon-blue selection:text-dark-bg">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="w-24 h-24 flex items-center justify-center relative">
                {/* Dual Spinning Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-b-2 border-neon-blue rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border-l-2 border-r-2 border-purple-500 rounded-full"
                />
                
                {/* Logo */}
                <motion.img 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  src={logo}
                  alt="Logo"
                  className="w-14 h-14 object-contain relative z-10"
                />
              </div>
            </motion.div>
            <div className="space-y-2 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Initializing</p>
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-neon-blue"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Custom Cursor Glow */}
            <motion.div
              animate={{
                x: mousePosition.x - 150,
                y: mousePosition.y - 150,
              }}
              transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
              className="fixed top-0 left-0 w-[300px] h-[300px] bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none z-50 hidden md:block"
            />

            <Background />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
