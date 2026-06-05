import { motion } from "framer-motion";
import { Download } from "lucide-react";

function AboutMe() {
  const interests = [
    "Structural Engineering",
    "Sustainable Materials",
    "Computational Mechanics",
    "Sustainable Materials & Infrastructures",
    "Geopolymer Concrete",
    "Structural Behavior",
    "Earthquake Engineering",
    "Finite Element Modeling",
    "Life-Cycle Assessment",
    "Prestressed Concrete",
    "High-Performance Cementitious Materials",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="about" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            About <span className="text-amber-500">Me</span>
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Structural Vision</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Goal Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            My goal is to build a fulfilling career in the field of Structural Engineering by engaging in teaching, research, and continuous knowledge development. I hope to make a meaningful impact in both academic and professional circles by sharing knowledge and supporting sustainable, innovative approaches to civil infrastructure.
          </p>

          {/* CV Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="/Industry_cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <button className="flex items-center gap-3 px-8 py-3 border-2 border-amber-600 text-amber-500 font-semibold rounded-lg hover:bg-amber-600 hover:text-gray-950 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-600/30">
                <Download size={20} />
                Industrial CV
              </button>
            </motion.a>
            <motion.a
              href="/Academic_cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <button className="flex items-center gap-3 px-8 py-3 border-2 border-amber-600 text-amber-500 font-semibold rounded-lg hover:bg-amber-600 hover:text-gray-950 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-600/30">
                <Download size={20} />
                Academic CV
              </button>
            </motion.a>
          </div>
        </motion.div>

        {/* Research Interests */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-100 mb-2">
              Research <span className="text-amber-500">Interests</span>
            </h3>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Exploring New Horizons</p>
          </motion.div>

          {/* Interest Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="relative px-6 py-5 bg-gray-800 bg-opacity-40 border-l-4 border-amber-600 rounded-lg hover:bg-opacity-60 transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Background accent */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <p className="relative text-gray-200 group-hover:text-amber-400 transition-colors duration-300 font-semibold">
                    {interest}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
