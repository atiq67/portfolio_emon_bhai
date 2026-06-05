import { Typewriter } from "react-simple-typewriter";
import banner_img from "../assets/Emon/emon_pp_BR.png";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

function Banner() {
  return (
    <div id="banner" className="relative w-full pt-24 md:pt-32 px-6 md:px-12 pb-16 md:pb-24">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 grid-texture" style={{backgroundImage: 'linear-gradient(0deg, rgba(201, 168, 76, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 168, 76, 0.05) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-100 mb-2">
                  Sany Hasan
                </h1>
                <h1 className="text-5xl md:text-6xl font-serif font-bold">
                  <span className="text-amber-500">
                    <Typewriter
                      words={["Emon"]}
                      loop={true}
                      typeSpeed={80}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-300 font-serif italic">
                Civil Engineering Graduate <span className="text-amber-500">|</span> Structural Engineering
              </p>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4">
                <motion.a
                  href="https://www.linkedin.com/in/sanyhasanemon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, color: "#c9a84c" }}
                  className="p-3 rounded-lg bg-gray-800 bg-opacity-50 border border-amber-600 border-opacity-30 text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:sanyhasanemon@gmail.com"
                  whileHover={{ scale: 1.15, color: "#c9a84c" }}
                  className="p-3 rounded-lg bg-gray-800 bg-opacity-50 border border-amber-600 border-opacity-30 text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                >
                  <Mail size={24} />
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="pt-4"
              >
                <a href="#contact">
                  <button className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-gray-950 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/40">
                    Get In Touch
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image - Right */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative group">
              {/* Image border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" style={{padding: '3px'}}></div>
              <img
                src={banner_img}
                alt="Sany Hasan Emon"
                className="relative rounded-2xl w-72 h-72 md:w-96 md:h-96 object-cover bg-gray-800"
              />
              {/* Corner accent lines */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500 rounded-br-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}

export default Banner;
