import { motion } from "motion/react";
import { SKILLS } from "../constants/data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tighter uppercase break-words px-4">
            TECHNICAL <span className="text-neon-blue neon-text uppercase">Arsenal</span>.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-medium">
            I've mastered a diverse range of modern technologies to build robust, scalable, and high-performance digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group hover:border-neon-blue/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon & Name */}
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-blue/10 group-hover:border-neon-blue/30 transition-all duration-500">
                  <skill.icon className="w-7 h-7 text-white/50 group-hover:text-neon-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-white/40">
                    <span>Expertise</span>
                    <span className="text-neon-blue">{skill.level}%</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-white/50 rounded-full"
                  />
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-neon-blue/5 blur-[60px] rounded-full group-hover:bg-neon-blue/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
