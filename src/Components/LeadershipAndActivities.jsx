import gp from "../assets/Emon/Activities/gp.png";
import aci from "../assets/Emon/Activities/aci.jpg";
import sports from "../assets/Emon/Activities/sports.jpg";
import ps from "../assets/Emon/Activities/ps.png";
import { motion } from "framer-motion";

function LeadershipAndActivities() {
  const organizations = [
    { name: "Green for Peace", role: "General Secretary", logo: gp },
    { name: "ACI Student Chapter, CUET", role: "Vice President", logo: aci },
    { name: "CUET Photographic Society", role: "Vice President", logo: ps },
    { name: "CUET Sports Club", role: "Organizing Secretary", logo: sports },
  ];

  const volunteering = [
    "National Concrete Fest 2023 - Organized by ACI Student Chapter, CUET",
    "24-Hour Concrete Cube Competition - Organized by ACI Student Chapter, CUET",
    "7th International Conference On Advances In Civil Engineering (ICACE-2024) - Organized by Department of Civil Engineering, CUET",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div id="leadershipAndAcrtivites" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            Leadership <span className="text-amber-500">&</span> Activities
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Community Engagement</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Organizational Roles */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-serif font-bold text-gray-100"
          >
            <span className="text-amber-500">Organizational</span> Roles
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {organizations.map((org, index) => (
              <motion.div key={index} variants={cardVariants} className="group">
                <div className="relative h-full p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600 border-opacity-20 rounded-xl hover:border-opacity-40 transition-all duration-300 overflow-hidden text-center">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>

                  {/* Logo */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gray-700 bg-opacity-50 p-2 border border-amber-600 border-opacity-20 group-hover:border-opacity-50 transition-all overflow-hidden">
                    <img src={org.logo} alt={org.name} className="w-full h-full object-contain" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-serif font-bold text-gray-100 mb-1 group-hover:text-amber-400 transition-colors">
                    {org.name}
                  </h3>
                  <p className="text-amber-500 font-semibold text-sm">{org.role}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">2024-25 Committee</p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-amber-600 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Volunteering */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-serif font-bold text-gray-100"
          >
            <span className="text-amber-500">Volunteering</span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-3"
          >
            {volunteering.map((volunteer, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex gap-3 p-4 bg-gray-800 bg-opacity-40 border-l-4 border-amber-600 rounded-lg hover:bg-opacity-60 transition-all duration-300 group"
              >
                <span className="text-amber-500 font-bold flex-shrink-0 text-lg">○</span>
                <p className="text-gray-300 group-hover:text-amber-400 transition-colors">{volunteer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipAndActivities;
