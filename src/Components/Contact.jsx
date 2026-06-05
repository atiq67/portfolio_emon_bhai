import { Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    const data = new FormData(event.target);
    data.append("access_key", "0a76e62c-59bb-4d72-95e6-d2f20d7dd0f7");

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Let&apos;s Connect</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="mailto:sanyhasanemon@gmail.com">
            <button className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-gray-950 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30">
              <Mail size={20} />
              Email Me
            </button>
          </a>
          <a href="https://www.linkedin.com/in/sanyhasanemon/" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-gray-950 font-semibold rounded-lg transition-all duration-300">
              LinkedIn
            </button>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="group"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-xl space-y-6 hover:border-opacity-40 transition-all duration-300 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>

            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Your Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-amber-500" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 bg-opacity-50 border border-amber-600 border-opacity-20 text-gray-100 placeholder-gray-500 rounded-lg focus:outline-none focus:border-amber-500 focus:border-opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Your Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-amber-500" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 bg-opacity-50 border border-amber-600 border-opacity-20 text-gray-100 placeholder-gray-500 rounded-lg focus:outline-none focus:border-amber-500 focus:border-opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Your Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-3.5 text-amber-500" size={20} />
                <textarea
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 bg-opacity-50 border border-amber-600 border-opacity-20 text-gray-100 placeholder-gray-500 rounded-lg focus:outline-none focus:border-amber-500 focus:border-opacity-100 transition-all duration-300 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-gray-950 font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/40 uppercase tracking-wider"
            >
              Send Message
            </motion.button>

            {/* Hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-amber-600 to-transparent transition-opacity duration-300 pointer-events-none"></div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
