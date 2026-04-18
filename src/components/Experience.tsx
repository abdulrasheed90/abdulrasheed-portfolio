import { motion } from "motion/react";
import { EXPERIENCE } from "../constants/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tighter uppercase break-words px-4">
            PROFESSIONAL <span className="text-neon-blue neon-text uppercase">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-48 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-blue/20 to-transparent hidden md:block -translate-x-1/2" />

        <div className="space-y-24 relative">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card Container */}
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-8 relative group overflow-hidden border border-white/5 hover:border-neon-blue/50 transition-all duration-500"
                >
                  {/* Decorative corner glow */}
                  <div className={`absolute top-0 ${i % 2 === 0 ? "right-0" : "left-0"} w-32 h-32 bg-neon-blue/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="flex flex-col gap-4 relative z-10 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-between">
                      <span className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.2em] bg-neon-blue/10 px-3 py-1 rounded-full border border-neon-blue/20">
                        {exp.period}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-white group-hover:text-neon-blue transition-colors duration-300 uppercase">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold text-white/40 mt-1 uppercase tracking-wider">{exp.company}</p>
                    </div>
                    <p className="text-white/60 leading-relaxed text-sm font-medium">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Central Point */}
              <div className="relative z-20 flex items-center justify-center w-12 h-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: i * 0.2 + 0.5 }}
                  className="w-4 h-4 rounded-full bg-neon-blue neon-glow shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                />
                <div className="absolute inset-0 w-full h-full rounded-full border border-neon-blue/20 animate-pulse" />
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
