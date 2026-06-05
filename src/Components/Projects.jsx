import ps1 from "../assets/Emon/Projects/p1.png";
import ps2 from "../assets/Emon/Projects/p2.png";
import ps3 from "../assets/Emon/Projects/p3.png";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      img: ps1,
      icon: "🏢",
      type: "Design Project",
      title: "Proposed Multi-purpose Commercial Building – Pahartali, Raozan, Chattogram",
      description: "This project features the structural design and analysis of a multi-purpose building using ETABS, ensuring safety, stability, and BNBC code compliance. It includes comprehensive detailing, pile foundation design, and cost estimation, integrating functionality from parking and commercial spaces to offices, event halls, and dormitories.",
      tags: ["ETABS", "Structural Design", "BNBC Code", "Foundation Design"],
    },
    {
      img: ps2,
      icon: "🧪",
      type: "Geotechnical Investigation",
      title: "Engineering Classification Of Soil At Selected Locations Within The Chattogram Metropolitan Area",
      description: "This geotechnical project under Course CE-332 examined the soil characteristics of Halishahar Public School, Chattogram, through field sampling and laboratory tests such as moisture content, sieve analysis, specific gravity, and Atterberg limits. The investigation provided insights into soil classification and engineering behavior, showing the soil is suitable for road and fill use.",
      tags: ["Soil Investigation", "Laboratory Tests", "Field Sampling", "Classification"],
    },
    {
      img: ps3,
      icon: "🔬",
      type: "Water Quality Assessment",
      title: "Comprehensive Analysis of Water Quality near Unilever Kalurghat Factory, Chittagong, Bangladesh",
      description: "This project, titled 'Comprehensive Analysis of Water Quality near Unilever Kalurghat Factory, Chittagong', assessed industrial wastewater impact through key tests including pH, BOD, COD, TDS, turbidity, and coliform presence. The analysis revealed high chemical contamination and turbidity beyond safe limits, emphasizing the need for improved wastewater treatment.",
      tags: ["Water Quality", "BOD/COD", "Turbidity", "Environmental Assessment"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div id="projects" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            <span className="text-amber-500">Projects</span>
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Key Works & Studies</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl border border-amber-600 border-opacity-20 hover:border-opacity-40 transition-all duration-300 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
                  {/* Image Column */}
                  <div className={`md:col-span-1 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative rounded-lg overflow-hidden h-64 md:h-full border border-amber-600 border-opacity-20 group-hover:border-opacity-40 transition-all">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`md:col-span-2 ${index % 2 === 1 ? "md:order-1" : ""} flex flex-col justify-between space-y-4`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.icon}</span>
                        <span className="text-xs uppercase tracking-widest font-semibold text-amber-400 bg-amber-600 bg-opacity-20 px-3 py-1 rounded-full">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-100 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-gray-700 bg-opacity-50 text-amber-400 rounded-full border border-amber-600 border-opacity-20 group-hover:border-opacity-50 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

export default Projects;
