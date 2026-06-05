import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-t from-gray-950 via-gray-900 to-gray-900 border-t border-amber-600 border-opacity-20 text-gray-400 mt-12">
      {/* Background grid texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage: 'linear-gradient(0deg, rgba(201, 168, 76, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 168, 76, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-8">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h3 className="text-2xl font-serif font-bold text-amber-500">Sany</h3>
            <p className="text-sm text-gray-500">Structural Engineer | CUET</p>
            <p className="text-xs text-gray-600 max-w-xs">
              Advancing civil infrastructure through innovative structural solutions and research.
            </p>
          </motion.div>

          {/* Center - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="flex flex-wrap gap-4 text-sm text-center">
              <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
              <span className="text-gray-700">•</span>
              <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
              <span className="text-gray-700">•</span>
              <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
            </div>
          </motion.div>

          {/* Right - Social & Scroll Top */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/sanyhasanemon/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 bg-opacity-50 border border-amber-600 border-opacity-20 hover:border-opacity-100 hover:text-amber-500 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm-1.5-10.3c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM19 19h-3v-4.5c0-1.08-.4-1.8-1.36-1.8-.74 0-1.18.49-1.37 1h-.04V19h-3v-9h3v1.23h.04c.19-.32.82-1.23 2.09-1.23 1.53 0 2.67 1 2.67 3.15V19z"/>
              </svg>
            </a>
            <a
              href="mailto:sanyhasanemon@gmail.com"
              className="p-2 rounded-lg bg-gray-800 bg-opacity-50 border border-amber-600 border-opacity-20 hover:border-opacity-100 hover:text-amber-500 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <motion.a
              href="#banner"
              whileHover={{ scale: 1.1 }}
              className="ml-2 p-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-gray-950 transition-all duration-300"
            >
              <ArrowUp size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-amber-600 via-amber-600 to-transparent opacity-20 my-8"></div>

        {/* Bottom - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-gray-600"
        >
          <p>
            © {currentYear} Sany Hasan Emon. All rights reserved. | Civil Engineering · Structural Analysis · Research
          </p>
        </motion.div>
      </div>

      {/* Subtle animation element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-10"></div>
    </footer>
  );
}

export default Footer;
