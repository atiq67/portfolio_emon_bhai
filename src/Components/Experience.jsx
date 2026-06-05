import pwd from "../assets/Emon/Experience/PWD.jpg";
import soft from "../assets/Emon/Experience/soft2.png";
import royal from "../assets/Emon/Experience/royal_cement_logo.jpg";
import ksrm from "../assets/Emon/Experience/ksrm-logo.jpg";
import wasa from "../assets/Emon/Experience/wasa_logo.png";
import Scholarship from "../assets/Emon/Experience/scholership.jpg";
import dining from "../assets/Emon/Experience/dining.webp";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Software Training",
      logo: soft,
      organization: "Software-Aided Civil Engineering Design and Analysis",
      date: "01/06/2024 - 07/10/2024",
      points: [
        "Completed professional training by IICT, CUET, under EDGE Project",
        "Gained proficiency in ETABS, HEC-HMS, SewerGEMS, PLAXIS, and Microsoft Project",
      ],
    },
    {
      title: "Industrial Training",
      logo: pwd,
      organization: "Public Works Department (PWD)",
      date: "05/12/2024 - 31/12/2024",
      points: [
        "Observed and participated in various stages of building construction",
        "Assisted with site supervision and quality control checks",
        "Gained hands-on experience in interpreting construction drawings and BOQs",
        "Learned on-site material estimation and construction procedures",
      ],
    },
  ];

  const technicalTours = [
    {
      logo: ksrm,
      name: "KSRM Steel Plant, Chittagong",
      points: [
        "Observed complete rebar manufacturing process: billet heating, rolling, and cooling",
        "Gained insight into quality control and key material tests",
      ],
    },
    {
      logo: royal,
      name: "Royal Cement Ltd., Chittagong",
      points: [
        "Learned cement production process: raw material prep, kiln operation, and grinding",
        "Observed clinker formation, cement composition, and role of chemical additives",
      ],
    },
    {
      logo: wasa,
      name: "Vandaljuri Mega Water Supply Project",
      points: [
        "Gained insight into large-scale water distribution systems and urban supply planning",
        "Observed planning and execution of 130 km water transmission pipeline project",
      ],
    },
  ];

  const accomplishments = [
    {
      logo: Scholarship,
      title: "Technical Scholarship",
      subtitle: "For academic excellence",
      duration: "1st - 8th semester",
    },
    {
      logo: dining,
      title: "Dining Manager",
      subtitle: "Shaheed Mohammad Shah Hall, CUET",
      duration: "January - February 2025",
      description: "Managed dining for 480 students with focus on budgeting, logistics, and leadership",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="experience" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            <span className="text-amber-500">Experience</span>
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Professional Journey</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Main Experiences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-xl hover:border-opacity-40 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Logo */}
                  <div className="w-20 h-20 rounded-lg bg-gray-700 bg-opacity-50 p-2 border border-amber-600 border-opacity-30 flex-shrink-0">
                    <img src={exp.logo} alt={exp.title} className="w-full h-full object-contain" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-serif font-bold text-gray-100">{exp.title}</h3>
                      <span className="text-xs md:text-sm bg-amber-600 bg-opacity-20 text-amber-400 px-3 py-1 rounded-full w-fit">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-amber-400 font-semibold">{exp.organization}</p>
                    <ul className="space-y-2 mt-3">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                          <span className="text-amber-500 flex-shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Tours */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-serif font-bold text-gray-100"
          >
            Technical Day <span className="text-amber-500">Tours</span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {technicalTours.map((tour, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="relative p-6 bg-gray-800 bg-opacity-40 border border-amber-600 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 rounded-lg bg-gray-700 bg-opacity-50 p-1 border border-amber-600 border-opacity-30 flex-shrink-0">
                      <img src={tour.logo} alt={tour.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-gray-100 font-semibold">{tour.name}</h4>
                      <ul className="space-y-1">
                        {tour.points.map((point, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex gap-2">
                            <span className="text-amber-500 flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Accomplishments */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-serif font-bold text-gray-100"
          >
            <span className="text-amber-500">Accomplishments</span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {accomplishments.map((ach, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-xl hover:border-opacity-40 transition-all duration-300 overflow-hidden">
                  <div className="flex gap-4 items-start">
                    <div className="w-20 h-20 rounded-lg bg-gray-700 bg-opacity-50 p-2 border border-amber-600 border-opacity-30 flex-shrink-0">
                      <img src={ach.logo} alt={ach.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-serif font-bold text-gray-100">{ach.title}</h4>
                      <p className="text-amber-400 text-sm font-semibold">{ach.subtitle}</p>
                      <p className="text-gray-400 text-sm">{ach.duration}</p>
                      {ach.description && (
                        <p className="text-gray-300 text-sm mt-2">{ach.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
