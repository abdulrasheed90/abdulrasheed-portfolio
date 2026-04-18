import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUp, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SOCIAL_LINKS, NAV_LINKS } from "../constants/data";
import logo from "../../logo2.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.status === "success") {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Connection error. Try again later.");
    }
  };

  return (
    <footer className="py-20 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-8">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative h-12 w-auto overflow-hidden">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </a>
            <p className="text-white/50 max-w-sm text-lg leading-relaxed">
              Pushing the boundaries of digital experiences through innovative code and exceptional design. Let's build something extraordinary together.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -5, color: "#00f0ff" }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 hover:border-neon-blue/50"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 md:-ml-40">
            <h4 className="text-xl font-display font-black uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="grid grid-rows-4 grid-flow-col gap-x-4 gap-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-base text-white/50 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xl font-display font-black uppercase tracking-widest text-white">Newsletter</h4>
            <p className="text-sm text-white/40 leading-relaxed">
              Subscribe to get the latest tech insights and project updates.
            </p>
            <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  disabled={status === "loading"}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address" 
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-blue/50 transition-all duration-300 disabled:opacity-50"
                />
                <button 
                  disabled={status === "loading" || status === "success"}
                  className="w-12 h-12 rounded-xl bg-neon-blue text-dark-bg flex items-center justify-center hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:scale-100"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : status === "success" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <ArrowUp className="w-5 h-5 rotate-45" />
                  )}
                </button>
              </div>

              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-green-500 font-bold"
                >
                  Subscribed successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-xs text-red-500"
                >
                  <AlertCircle className="w-3 h-3" />
                  <p>{message}</p>
                </motion.div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm uppercase tracking-widest text-white/30 font-bold">
            © 2026 AETHER PORTFOLIO. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/30 font-bold hover:text-neon-blue transition-colors duration-300"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-all duration-300">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-blue/5 blur-[120px] rounded-full -z-10" />
    </footer>
  );
}
