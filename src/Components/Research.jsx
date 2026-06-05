import { motion } from "framer-motion";

function Research() {
  return (
    <div id="research" className="relative w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-100">
            <span className="text-amber-500">Research</span>
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold">Academic Research</p>
            <div className="w-12 h-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Research Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="group"
        >
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border border-amber-600 border-opacity-20 rounded-xl hover:border-opacity-40 transition-all duration-300 overflow-hidden">
            {/* Accent line top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Academic Info */}
              <div className="md:col-span-1 space-y-6 border-b md:border-b-0 md:border-r md:border-amber-600 md:border-opacity-20 pb-6 md:pb-0 md:pr-6">
                <div>
                  <p className="text-amber-500 font-semibold uppercase text-sm mb-2">Major</p>
                  <p className="text-lg md:text-xl text-gray-100 font-serif">Structural Engineering</p>
                </div>
                <div>
                  <p className="text-amber-500 font-semibold uppercase text-sm mb-2">Minor</p>
                  <p className="text-lg md:text-xl text-gray-100 font-serif">Water Resources Engineering</p>
                </div>
              </div>

              {/* Middle Column - Thesis Info */}
              <div className="md:col-span-1 space-y-4 border-b md:border-b-0 md:border-r md:border-amber-600 md:border-opacity-20 pb-6 md:pb-0 md:px-6">
                <div>
                  <p className="text-amber-500 font-semibold uppercase text-sm mb-3">Thesis Title</p>
                  <p className="text-gray-200 font-semibold leading-relaxed">
                    Performance of Treated Sea Sand in Mortar
                  </p>
                </div>
                <div>
                  <p className="text-amber-500 font-semibold uppercase text-sm mb-2">Supervisor</p>
                  <p className="text-gray-300">Prof. Dr. G M Sadiqul Islam</p>
                  <p className="text-gray-400 text-sm">Department of Civil Engineering</p>
                  <p className="text-gray-400 text-sm">Chittagong University of Engineering & Technology</p>
                </div>
              </div>

              {/* Right Column - Research Description */}
              <div className="md:col-span-1 md:pl-6 space-y-4">
                <p className="text-amber-500 font-semibold uppercase text-sm">Research Overview</p>
                <p className="text-gray-300 leading-relaxed">
                  Analyzed the properties of treated sea sand from various locations, evaluated the effects of different treatment processes on sand characteristics, and compared the mechanical strength and durability of mortar incorporating treated sea sand.
                </p>
              </div>
            </div>

            {/* Publication Status */}
            <div className="mt-8 pt-6 border-t border-amber-600 border-opacity-20">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 bg-opacity-10 border border-amber-600 border-opacity-30 rounded-lg p-4">
                <p className="text-amber-400 font-semibold text-sm uppercase mb-1">Publication Status</p>
                <p className="text-gray-300">
                  The manuscript is currently under review in the <span className="text-amber-400 font-semibold">Journal of the Civil Engineering Forum (JCEF)</span>
                </p>
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-amber-600 to-transparent transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Research;
