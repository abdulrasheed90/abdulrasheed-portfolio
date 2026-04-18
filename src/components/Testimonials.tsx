import { motion } from "motion/react";
import { TESTIMONIALS } from "../constants/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase">
            CLIENT <span className="text-neon-blue neon-text">VOICES</span>.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-medium">
            Don't just take my word for it. Here's what some of my amazing clients have to say about our collaboration.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 space-y-8 relative overflow-hidden group hover:border-neon-blue/30 transition-all duration-500"
            >
              <div className="space-y-4 relative z-10">
                <p className="text-lg text-white/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-neon-blue/50 transition-colors duration-500">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-display font-black text-white group-hover:text-neon-blue transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-neon-blue/5 blur-[60px] rounded-full group-hover:bg-neon-blue/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
