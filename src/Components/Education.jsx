import cuet from "../assets/Emon/CUET_logo-removebg-preview.png";
import milestone from "../assets/Emon/Milstone_collage.png";
import annada from "../assets/Emon/Annada_logo-removebg-preview.png";
import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      logo: cuet,
      degree: "Bachelor of Science in Civil Engineering",
      institution: "Chittagong University of Engineering & Technology (CUET)",
      gpa: "3.55",
      max: "4.00",
      status: "Ranked 11th out of 132 students",
    },
    {
      logo: milestone,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Milestone College, Dhaka, Bangladesh",
      gpa: "5.00",
      max: "5.00",
    },
    {
      logo: annada,
      degree: "Secondary School Certificate (SSC)",
      institution: "Annada Govt. High School, Brahmanbaria, Bangladesh",
      gpa: "4.77",
      max: "5.00",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="education" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            <span className="text-amber-500">Education</span>
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Academic Journey</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-xl hover:border-opacity-50 transition-all duration-300 overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>

                {/* Logo Section */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-lg bg-gray-700 bg-opacity-50 p-2 border border-amber-600 border-opacity-30 group-hover:border-opacity-100 transition-all duration-300">
                    <img
                      src={edu.logo}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-gray-100 text-center">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-400 text-center italic">
                    {edu.institution}
                  </p>

                  {/* GPA */}
                  <div className="pt-4 border-t border-amber-600 border-opacity-20 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-500 font-semibold">Result:</span>
                      <span className="text-gray-100">
                        <span className="text-amber-400 font-bold">{edu.gpa}</span>
                        <span className="text-gray-500"> / {edu.max}</span>
                      </span>
                    </div>
                    {edu.status && (
                      <p className="text-xs text-amber-600 text-center italic pt-2">
                        {edu.status}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-amber-600 to-transparent transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
