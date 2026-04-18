import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "../constants/data";
import profileImage from "../../profile-image.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-start md:items-center justify-center pt-28 md:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:pl-2 md:pr-6 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start"
        >
          {/* Small Profile Image (Mobile focus) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 mb-1 rounded-3xl border-2 border-neon-blue/50 overflow-hidden neon-glow md:hidden shadow-[0_0_30px_rgba(0,240,255,0.2)]"
          >
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover object-top" />
          </motion.div>

          <div className="space-y-3 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              Available for Hire
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tighter text-neon-blue uppercase break-words md:whitespace-nowrap md:break-normal">
              ABDUL RASHEED
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-display font-bold leading-tight text-white/80">
              CRAFTING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white/50 neon-text">FUTURE</span> OF WEB.
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-lg leading-relaxed font-medium mt-2">
              I'm a <span className="text-white font-bold">Full Stack Developer</span> specializing in building high-performance, visually stunning digital experiences that push the boundaries of modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-2">
            <motion.a
              href="#contact"
              animate={{ 
                rotate: [0, -3, 3, -3, 3, 0],
                scale: [1, 1.05, 1, 1.05, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-neon-blue text-dark-bg font-bold flex items-center gap-2 group transition-all duration-300 neon-glow origin-center"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -5, color: "#00f0ff" }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 hover:border-neon-blue/50"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-neon-blue/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-white/10 rounded-full"
            />
            
            {/* Main Visual Card - Profile Image */}
            <div className="absolute inset-0 overflow-hidden rounded-[3rem] border-[3px] border-neon-blue/30 group shadow-2xl transition-all duration-500 hover:border-neon-blue">
              <div className="w-full h-full relative">
                <img 
                  src={profileImage} 
                  alt="Abdul Rasheed" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-neon-blue/20 blur-[100px] rounded-full pointer-events-none" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 p-4 glass-card neon-border"
            >
              <p className="text-xs font-mono text-neon-blue">{"{ code: 'clean' }"}</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 p-4 glass-card neon-border"
            >
              <p className="text-xs font-mono text-white/50">{"< Innovation />"}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon-blue to-transparent" />
      </motion.div>
    </section>
  );
}
