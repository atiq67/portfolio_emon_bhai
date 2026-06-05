import autocad from "../assets/Emon/Skills/Technical/autocad.jpg";
import etabs from "../assets/Emon/Skills/Technical/etabs.png";
import plaxis from "../assets/Emon/Skills/Technical/Plaxis_logo.png";
import hec_hms from "../assets/Emon/Skills/Technical/hec-hms.png";
import pms from "../assets/Emon/Skills/Technical/pms.jpg";
import sGems from "../assets/Emon/Skills/Technical/sewerGems.jpg";

import ban from "../assets/Emon/Skills/language/bangla.jpg";
import eng from "../assets/Emon/Skills/language/eng.jpeg";

import leadership from "../assets/Emon/Skills/Soft/leadership.png";
import communication from "../assets/Emon/Skills/Soft/communication-2.png";
import teamwork from "../assets/Emon/Skills/Soft/team_work.png";
import evnt_mngt from "../assets/Emon/Skills/Soft/event_management.png";
import problem_slv from "../assets/Emon/Skills/Soft/problem_solving.png";

import excle from "../assets/Emon/Skills/Tools/ms_excel.png";
import powerpoint from "../assets/Emon/Skills/Tools/power-2.png";
import word from "../assets/Emon/Skills/Tools/ms_word.png";
import { motion } from "framer-motion";
import { useState } from "react";

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  const skillTabs = {
    languages: { label: "Languages", icon: "🌐" },
    technical: { label: "Technical Software", icon: "⚙️" },
    soft: { label: "Soft Skills", icon: "💼" },
    tools: { label: "Tools", icon: "🛠️" },
  };

  const skillsData = {
    languages: [
      { name: "Bengali", level: "Native", img: ban },
      { name: "English", level: "Fluent (IELTS: 6.5)", img: eng },
    ],
    technical: [
      { name: "AutoCAD", img: autocad },
      { name: "ETABS", img: etabs },
      { name: "PLAXIS", img: plaxis },
      { name: "HEC-HMS", img: hec_hms },
      { name: "PMS", img: pms },
      { name: "SewerGEMS", img: sGems },
    ],
    soft: [
      { name: "Leadership", img: leadership },
      { name: "Communication", img: communication },
      { name: "Teamwork", img: teamwork },
      { name: "Event Management", img: evnt_mngt },
      { name: "Problem Solving", img: problem_slv },
    ],
    tools: [
      { name: "MS Excel", img: excle },
      { name: "MS Word", img: word },
      { name: "MS PowerPoint", img: powerpoint },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <div id="skills" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            <span className="text-amber-500">Skills</span>
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Technical & Professional</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {Object.entries(skillTabs).map(([key, { label, icon }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === key
                  ? "bg-amber-600 text-gray-950 shadow-lg shadow-amber-600/40"
                  : "bg-gray-800 bg-opacity-50 text-gray-300 border border-amber-600 border-opacity-20 hover:border-opacity-50 hover:text-amber-400"
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </motion.div>

        {/* Special Section for Languages */}
        {activeTab === "languages" && (
          <motion.div
            key="languages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {skillsData.languages.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group"
                >
                  <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-xl hover:border-opacity-40 transition-all duration-300 text-center overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-amber-600 border-opacity-30 group-hover:border-opacity-100 transition-all">
                      <img src={skill.img} alt={skill.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-100 mb-2">{skill.name}</h3>
                    <p className="text-amber-400 font-semibold">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* IELTS Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 bg-gradient-to-r from-amber-600 to-amber-700 bg-opacity-15 border border-amber-600 border-opacity-30 rounded-lg text-center"
            >
              <p className="text-amber-400 font-semibold text-sm uppercase mb-1">IELTS Academic</p>
              <p className="text-gray-300">
                Overall Band <span className="text-amber-400 font-bold">6.5</span> (L: 6.5, R: 6, W: 6.5, S: 6.0)
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Technical Skills Grid */}
        {activeTab === "technical" && (
          <motion.div
            key="technical"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData.technical.map((skill, index) => (
                <motion.div key={index} variants={cardVariants} className="group">
                  <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-amber-600 transition-opacity duration-300"></div>
                    <div className="relative space-y-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-amber-600 border-opacity-20 group-hover:border-opacity-50 transition-all mx-auto">
                        <img src={skill.img} alt={skill.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-center font-semibold text-gray-100 group-hover:text-amber-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Soft Skills Grid */}
        {activeTab === "soft" && (
          <motion.div
            key="soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData.soft.map((skill, index) => (
                <motion.div key={index} variants={cardVariants} className="group">
                  <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-amber-600 transition-opacity duration-300"></div>
                    <div className="relative space-y-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-amber-600 border-opacity-20 group-hover:border-opacity-50 transition-all mx-auto">
                        <img src={skill.img} alt={skill.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-center font-semibold text-gray-100 group-hover:text-amber-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Tools Grid */}
        {activeTab === "tools" && (
          <motion.div
            key="tools"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData.tools.map((skill, index) => (
                <motion.div key={index} variants={cardVariants} className="group">
                  <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-amber-600 transition-opacity duration-300"></div>
                    <div className="relative space-y-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-amber-600 border-opacity-20 group-hover:border-opacity-50 transition-all mx-auto">
                        <img src={skill.img} alt={skill.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-center font-semibold text-gray-100 group-hover:text-amber-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Skills;
