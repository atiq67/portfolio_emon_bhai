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

function Skills() {
  return (
    <div id="skills" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-white px-7 md:px-20  font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 uppercase ">
          Skills
        </h2>
        <hr className=" md:pb-10 md:mx-20 border-black" />

        <div className="text-black">
          <div className="pb-10">
            <h2 className="text-xl md:text-2xl py-10 uppercase">Languages:</h2>
            <div className="flex flex-wrap justify-center items-center gap-7">
              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={ban}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">Bengali</p>
                <p className="text-blue-600">(Native)</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={eng}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">English</p>
                <p className="text-blue-600">(Fluent)</p>
              </div>
            </div>

            <div className="text-red-600 text-center text-xl mt-14">
              <p>
                *** <span className="text-black">IELTS Accademic:</span>{" "}
                <span className="text-sky-600"> Overall Band 6.5</span> (L: 6.5,
                R: 6, W: 6.5, S: 6.0)
              </p>
              <p></p>
            </div>
          </div>

          <div className="pb-10">
            <h2 className="text-xl md:text-2xl py-10  uppercase">
              Technical Skills:
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-7">
              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={autocad}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl">AutoCAD</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={etabs}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">ETABS</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={plaxis}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">PLAXIS</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={hec_hms}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl">HecHms</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={pms}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">PMS</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={sGems}
                    alt=""
                  />
                </figure>
                <p className="text-lg md:text-2xl">SewerGEMS</p>
              </div>
            </div>
          </div>

          <div className="pb-10">
            <h2 className="text-xl md:text-2xl py-10  uppercase">
              Soft Skills:
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-7">
              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={leadership}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">Leadership</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={communication}
                    alt=""
                  />
                </figure>
                <p className="text-lg md:text-2xl ">Communication</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={teamwork}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">Teamwork</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={evnt_mngt}
                    alt=""
                  />
                </figure>
                <p className="text-md md:text-2xl break-words">
                  EventManagement
                </p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={problem_slv}
                    alt=""
                  />
                </figure>
                <p className="text-lg md:text-2xl break-words">
                  ProblemSolving
                </p>
              </div>
            </div>
          </div>

          <div className="pb-10">
            <h2 className="text-xl md:text-2xl py-10 uppercase">Tools:</h2>
            <div className="flex flex-wrap justify-center items-center gap-7">
              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={excle}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">MS Excel</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={word}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-2xl ">MS Word</p>
              </div>

              <div
                className="w-36 shadow-2xl md:w-60 border-[1px] rounded-3xl flex flex-col items-center gap-5 p-10
              hover:bg-blue-200 font-normal hover:font-bold hover:border-blue-300 hover:scale-110 transition-transform"
              >
                <figure>
                  <img
                    className="w-16 md:w-32 h-16 md:h-32 rounded-3xl"
                    src={powerpoint}
                    alt=""
                  />
                </figure>
                <p className="text-xl md:text-xl">MS PowerPoint</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
