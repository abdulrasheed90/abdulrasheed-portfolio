import { motion } from "motion/react";
import { SERVICES } from "../constants/data";

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tighter uppercase break-words">
            CORE <span className="text-neon-blue neon-text uppercase">Services</span>.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-medium">
            I offer a wide range of specialized services to help businesses and individuals achieve their digital goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group hover:border-neon-blue/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon & Title */}
              <div className="space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-blue/10 group-hover:border-neon-blue/30 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white/50 group-hover:text-neon-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-black text-white group-hover:text-neon-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {service.description}
                  </p>
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
