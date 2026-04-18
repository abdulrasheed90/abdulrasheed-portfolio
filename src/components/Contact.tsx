import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tighter uppercase break-words">
            LET'S <span className="text-neon-blue neon-text uppercase">Connect</span>.
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tighter">Get in Touch</h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium max-w-md">
                I'm always open to discussing new projects, creative ideas or original visions.
              </p>
            </div>

            <div className="space-y-8 w-full max-w-md">
              {[
                { icon: Mail, label: "Email", value: CONTACT_INFO.email },
                { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
                { icon: MapPin, label: "Location", value: CONTACT_INFO.location },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col sm:flex-row items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-blue/10 group-hover:border-neon-blue/30 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-white/50 group-hover:text-neon-blue transition-colors" />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</p>
                    <p className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors font-display tracking-tight break-all sm:break-normal">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden group border border-white/5 hover:border-neon-blue/30 transition-all duration-500"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full space-y-6 text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-black text-white uppercase">Message Sent!</h3>
                  <p className="text-white/60">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry" 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Message</label>
                  <textarea 
                    id="message"
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  />
                </div>

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{errorMessage}</p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={status === "loading" ? {} : { scale: 1.02 }}
                  whileTap={status === "loading" ? {} : { scale: 0.98 }}
                  disabled={status === "loading"}
                  type="submit"
                  className={`w-full py-5 rounded-xl text-dark-bg font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
                    status === "loading" ? "bg-neon-blue/50 cursor-not-allowed" : "bg-neon-blue neon-glow"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      Sending...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
            
            {/* Decorative Glow */}
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-neon-blue/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
