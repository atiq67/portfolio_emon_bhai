import ps1 from "../assets/Emon/Projects/p1.png";
import ps2 from "../assets/Emon/Projects/p2.png";
import ps3 from "../assets/Emon/Projects/p3.png";

function Projects() {
  return (
    <div id="projects" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-white px-7 md:px-20  font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 uppercase ">
          Projects
        </h2>
        <hr className=" md:pb-10 md:mx-20 border-black" />

        {/* div */}
        <div className="text-black my-10 lg:my-20 text-center flex flex-wrap justify-center items-center gap-24">
          {/* project-1 */}
          <div
            className="p-5 shadow-2xl flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-10
                        rounded-2xl hover:scale-110 hover:bg-blue-200 hover:border-blue-300 hover:border-[1px] transition-transform"
          >
            <figure className="lg:w-[150%]">
              <img className=" rounded-2xl" src={ps1} alt="" />
            </figure>

            <div className="text-md md:text-xl text-left">
              <p className="uppercase font-serif ">
                🏢{" "}
                <span className="font-sans text-sky-800">Design Project:</span>{" "}
                Proposed Multi-purpose Commercial Building – Pahartali, Raozan,
                Chattogram
              </p>
              <p className="text-sm mt-5 md:text-xl font-normal">
                This project features the{" "}
                <span className="font-bold ">
                  {" "}
                  structural design and analysis of a multi-purpose building
                </span>{" "}
                using ETABS, ensuring safety, stability, and BNBC code
                compliance. It includes
                <span className="font-bold">
                  {" "}
                  comprehensive detailing, pile foundation design, and cost
                  estimation,
                </span>{" "}
                integrating functionality from parking and commercial spaces to
                offices, event halls, and dormitories.
              </p>
            </div>
          </div>

          {/* project-2 */}
          <div
            className="p-5 shadow-2xl flex flex-col lg:flex-row-reverse justify-center items-center gap-5 md:gap-10
                        rounded-2xl hover:scale-110 hover:bg-blue-200 hover:border-blue-300 hover:border-[1px] transition-transform"
          >
            <figure className="lg:w-[160%]">
              <img className=" rounded-2xl" src={ps2} alt="" />
            </figure>

            <div className="text-md md:text-xl text-left">
              <p className="uppercase font-serif">
                🧪{" "}
                <span className="font-sans text-sky-800">
                  Geotechnical Investigation project:
                </span>{" "}
                Engineering Classification Of Soil At Selected Locations Within
                The Chattogram Metropoliton Area
              </p>
              <p className="text-sm mt-5 md:text-xl font-normal">
                This geotechnical project under{" "}
                <span className="font-bold italic"> Course CE-332</span>{" "}
                examined the soil characteristics of
                <span className="font-bold ">
                  {" "}
                  Halishahar Public School, Chattogram,
                </span>{" "}
                through{" "}
                <span className="font-bold  ">
                  {" "}
                  field sampling and laboratory tests
                </span>{" "}
                such as moisture content, sieve analysis, specific gravity, and
                Atterberg limits. The investigation provided insights into the
                soil’s
                <span className="font-bold ">
                  {" "}
                  classification and engineering behavior.
                </span>{" "}
                Findings show the soil is
                <span className="font-bold ">
                  {" "}
                  suitable for road and fill use, though its volume change
                  potential
                </span>{" "}
                requires consideration in design.
              </p>
            </div>
          </div>

          {/* project-3 */}
          <div
            className="p-5 shadow-2xl flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-10
                        rounded-2xl hover:scale-110 hover:bg-blue-200 hover:border-blue-300 hover:border-[1px] transition-transform"
          >
            <figure className="lg:w-[150%]">
              <img className=" rounded-2xl" src={ps3} alt="" />
            </figure>

            <div className="text-md md:text-xl text-left">
              <p className="uppercase font-serif">
                🔬{" "}
                <span className=" text-sky-400 font-sans">
                  Water Quality Assessment Project:{" "}
                </span>
                Comprehensive Analysis of Water Quality near Unilever Kalurghat
                Factory, Chittagong, Bangladesh
              </p>
              <p className="text-sm mt-5 md:text-xl font-normal">
                <span className="font-bold"> Course CE-332</span> This project,
                titled{" "}
                <span className="font-bold ">
                  {" "}
                  “Comprehensive Analysis of Water Quality near Unilever
                  Kalurghat Factory, Chittagong”,{" "}
                </span>{" "}
                assessed industrial wastewater impact through key tests
                including
                <span className="font-bold ">
                  {" "}
                  pH, BOD, COD, TDS, turbidity, and coliform presence.{" "}
                </span>{" "}
                The analysis revealed
                <span className="font-bold italic ">
                  {" "}
                  high chemical contamination and turbidity{" "}
                </span>{" "}
                beyond safe limits, though{" "}
                <span className="font-bold italic">
                  {" "}
                  coliform was absent,{" "}
                </span>{" "}
                indicating no bacterial risk. The findings emphasize the{" "}
                <span className="font-bold italic ">
                  {" "}
                  need for improved wastewater treatment{" "}
                </span>{" "}
                to ensure environmental compliance and public safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
