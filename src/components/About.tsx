import { motion } from "motion/react";
import aboutImage from "../../about-image.png";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group h-full flex flex-col justify-start pt-4"
        >
          <div className="relative w-full aspect-square md:h-[600px] max-w-lg mx-auto">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-neon-blue/20 blur-[100px] rounded-[3rem] group-hover:bg-neon-blue/40 transition-colors duration-500" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden glass-card border-[3px] border-neon-blue/30 group-hover:border-neon-blue transition-all duration-500 shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Web Development Coding" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              
              {/* Floating Label */}
              <div className="absolute bottom-8 left-8 right-8 p-5 glass-card neon-border backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-sm font-display font-medium text-white/90 leading-relaxed italic">
                  "Code is like humor. When you have to explain it, it’s bad."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-[2px] w-8 bg-neon-blue rounded-full"></div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-neon-blue">Cory House</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-[3px] border-r-[3px] border-neon-blue/40 rounded-tr-[4rem] transition-all duration-500 group-hover:border-neon-blue/80 group-hover:-top-4 group-hover:-right-4" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-[3px] border-l-[3px] border-neon-blue/40 rounded-bl-[4rem] transition-all duration-500 group-hover:border-neon-blue/80 group-hover:-bottom-4 group-hover:-left-4" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tighter">
              FULL-STACK DEVELOPER & <br className="hidden md:block" />
              <span className="text-neon-blue neon-text uppercase">AI Vibe Coder</span>.
            </h2>
            <div className="w-20 h-1 bg-neon-blue rounded-full mx-auto md:mx-0" />
          </div>

          <div className="space-y-6 text-lg text-white/60 leading-relaxed">
            <p>
              I am a passionate <span className="text-white font-bold">Full-Stack Developer</span> and an <span className="text-white font-bold">AI "Vibe Coder"</span>. I specialize in leveraging generative AI to build complete, production-ready web applications at lightning speed.
            </p>
            <p>
              Having completed my professional training at <span className="text-white font-bold">SMIT</span>, I mastered the art of building scalable platforms. During my career, I transitioned into an AI-powered development workflow. Now, I can develop fully functional, high-end websites in just under a week—without writing every single line of code manually.
            </p>
            <p>
              Whether it's designing a premium user interface or building a robust backend, I use AI tools to rapidly build digital solutions that are both functional and visually stunning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-1">
              <p className="text-3xl font-display font-black text-white">1 Week</p>
              <p className="text-xs uppercase tracking-widest text-neon-blue font-bold">Avg. Delivery Time</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-display font-black text-white">100%</p>
              <p className="text-xs uppercase tracking-widest text-neon-blue font-bold">AI-Powered Workflow</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
