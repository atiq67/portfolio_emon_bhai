import pwd from "../assets/Emon/Experience/PWD.jpg";
import soft from "../assets/Emon/Experience/soft2.png";
import royal from "../assets/Emon/Experience/royal_cement_logo.jpg";
import ksrm from "../assets/Emon/Experience/ksrm-logo.jpg";
import wasa from "../assets/Emon/Experience/wasa_logo.png";
import Scholarship from "../assets/Emon/Experience/scholership.jpg";
import dining from "../assets/Emon/Experience/dining.webp";

function Experience() {
  return (
    <div id="experience" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-white px-7 md:px-20  font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 uppercase ">
          Experience
        </h2>
        <hr className=" md:pb-10 md:mx-20 border-black" />

        <div className="text-black">
          <div className="pb-10 ">
            <h2 className="text-2xl md:text-3xl py-5 text-stone-950 uppercase">
              Software training:
            </h2>
            <div className="text-xl md:text-2xl">
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="flex justify-center items-center gap-2">
                  <figure className="w-14 h-14">
                    <img className="rounded-[50%]" src={soft} alt="pwd" />
                  </figure>
                  <p className="text-blue-400">
                    Software-Aided Civil Engineering Design and Analysis
                  </p>
                </div>
                <p className="font-normal italic text-blue-400">
                  01/06/2024- 07/10/2024{" "}
                </p>
              </div>
              <ul className="list-disc font-normal italic pl-10">
                <li>
                  Completed professional training by the Institute of
                  Information and Communication Technology (IICT), CUET, under
                  the EDGE Project; gained proficiency in ETABS, HEC-HMS,
                  SewerGEMS, PLAXIS, and Microsoft Project.
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-10 ">
            <h2 className="text-2xl md:text-3xl py-5 text-stone-950 uppercase">
              Industrial training at:
            </h2>
            <div className="text-xl md:text-2xl">
              <div className="flex flex-col md:flex-row justify-between text-orange-500">
                <div className="flex justify-center items-center gap-2">
                  <figure className="w-14 h-14">
                    <img className="rounded-[50%]" src={pwd} alt="pwd" />
                  </figure>
                  <p className="text-blue-400">Public Works Department (PWD)</p>
                </div>
                <p className="font-normal italic text-blue-400">
                  05/12/2024- 31/12/2024{" "}
                </p>
              </div>
              <ul className="list-disc font-normal italic pl-10">
                <li>
                  Observed and participated in various stages of building
                  construction at PWD
                </li>
                <li>
                  Assisted with site supervision and quality control checks
                </li>
                <li>
                  Gained hands-on experience in interpreting construction
                  drawings and BOQs
                </li>
                <li>
                  Learned on-site material estimation and construction
                  procedures
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-10 ">
            <h2 className="text-2xl md:text-3xl py-5 text-stone-950 uppercase">
              Technical day tour at:{" "}
            </h2>

            <div className="flex flex-col gap-10">
              <div className="text-xl md:text-2xl">
                <div className="flex flex-col md:flex-row justify-between text-orange-500">
                  <div className="flex justify-center items-center gap-2">
                    <figure className="pt-3 w-14 h-14">
                      <img className=" rounded-[50%]" src={ksrm} alt="pwd" />
                    </figure>
                    <p className="text-blue-400">
                      KSRM Steel Plant, Chittagong
                    </p>
                  </div>
                </div>
                <ul className="list-disc font-normal italic pl-10">
                  <li>
                    Observed the complete rebar manufacturing process: billet
                    heating, rolling, and cooling
                  </li>
                  <li>
                    Gained insight into quality control and key material tests
                    such as yield strength and elongation
                  </li>
                </ul>
              </div>

              <div className="text-xl md:text-2xl">
                <div className="flex flex-col md:flex-row justify-between text-orange-500">
                  <div className="flex justify-center items-center gap-2">
                    <figure className="w-14 h-14">
                      <img className="rounded-[50%]" src={royal} alt="pwd" />
                    </figure>
                    <p className="text-blue-400">
                      Royal Cement Ltd., Chittagong
                    </p>
                  </div>
                </div>
                <ul className="list-disc font-normal italic pl-10">
                  <li>
                    Learned the cement production process: raw material prep,
                    kiln operation, and final grinding
                  </li>
                  <li>
                    Observed clinker formation, cement composition, and the role
                    of chemical additives
                  </li>
                </ul>
              </div>

              <div className="text-xl md:text-2xl">
                <div className="flex flex-col md:flex-row justify-between text-orange-500">
                  <div className="flex  justify-center items-center gap-2">
                    <figure className="w-14 h-14">
                      <img className="rounded-[50%]" src={wasa} alt="pwd" />
                    </figure>
                    <p className="text-blue-400">
                      Vandaljuri Mega Water Supply Project
                    </p>
                  </div>
                </div>
                <ul className="list-disc font-normal italic pl-10">
                  <li>
                    Gained insight into large-scale water distribution systems
                    and urban supply planning
                  </li>
                  <li>
                    Observed the planning and execution of a 130 km water
                    transmission pipeline project
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl py-5 text-stone-950 uppercase">
              Accomplishments:
            </h2>
            <div className="text-xl md:text-2xl">
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="flex justify-center items-center gap-2">
                  <figure className="w-14 h-14">
                    <img
                      className="rounded-[50%]"
                      src={Scholarship}
                      alt="pwd"
                    />
                  </figure>
                  <p className="text-blue-400">
                    Technical Scholarship for academic excellence
                  </p>
                </div>
                <p className="font-normal italic text-blue-400">
                  1st–8th semester{" "}
                </p>
              </div>

              <div className="text-xl md:text-2xl mt-10">
                <div className="flex flex-col md:flex-row justify-between text-orange-500">
                  <div className="flex  items-center gap-2">
                    <figure className="pt-3 w-14 h-14">
                      <img className=" rounded-[50%]" src={dining} alt="pwd" />
                    </figure>
                    <p className="text-blue-400">Dining Manager </p>
                  </div>
                </div>
                <ul className="list-disc font-normal italic pl-10 mt-2">
                  <li>
                    Successfully managed dining of 480 students at Shaheed
                    Mohammad Shah Hall, CUET from January to February 2025.
                    Sharpening my skills in budgeting, logistics, and
                    leadership, developed strong decision making, crisis
                    management and ensuring smooth day-to-day meal service.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
