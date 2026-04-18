import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants/data";

const CATEGORIES = ["All", "Web", "App"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tighter uppercase break-words">
              FEATURED <span className="text-neon-blue neon-text uppercase">Projects</span>.
            </h2>
            <p className="text-white/50 max-w-xl text-lg font-medium">
              A curated selection of my most impactful and innovative work.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center md:justify-end gap-3"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-neon-blue text-dark-bg neon-glow"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass-card overflow-hidden border-white/5 hover:border-neon-blue/30 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 px-4 py-1 rounded-full bg-dark-bg/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold text-neon-blue">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-display font-black text-white group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 group-hover:border-neon-blue/20 group-hover:text-neon-blue/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-4 rounded-xl bg-neon-blue text-dark-bg font-bold text-sm flex items-center justify-center gap-2 neon-glow"
                    >
                      Demo
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neon-blue text-dark-bg flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
