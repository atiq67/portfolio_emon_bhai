import gp from "../assets/Emon/Activities/gp.png";
import aci from "../assets/Emon/Activities/aci.jpg";
import sports from "../assets/Emon/Activities/sports.jpg";
import ps from "../assets/Emon/Activities/ps.png";

function LeadershipAndActivities() {
  return (
    <div id="leadershipAndAcrtivites" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-white px-7 md:px-20  font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 uppercase ">
          Leadership & Activites
        </h2>
        <hr className=" md:pb-10 md:mx-20 border-black" />

        <div className="text-black">
          <div className="pb-10">
            <h2 className="text-xl md:text-2xl py-10  uppercase">
              ORGANIZATIONAL:
            </h2>
            <div className="text-center flex flex-wrap justify-center items-center gap-10">
              <div
                className="w-96 md:w-[500px] shadow-2xl p-5 flex flex-col justify-center items-center gap-5 md:gap-10
              rounded-2xl font-normal hover:font-bold hover:scale-110 hover:bg-blue-200 hover:border-blue-300 hover:border-[1px] transition-transform"
              >
                <figure>
                  <img
                    className="w-28 md:w-44 h-28 md:h-44 rounded-2xl"
                    src={gp}
                    alt=""
                  />
                </figure>

                <hr className="w-full border-black" />

                <div className="text-md md:text-2xl">
                  <p className="uppercase">Green for Peace </p>
                  <p className="italic text-sky-800">General Secretary</p>
                  <p className="text-sm md:text-xl text-slate-950">
                    2024-25 Committee
                  </p>
                </div>
              </div>

              <div
                className="w-96 md:w-[500px] shadow-2xl p-5 flex flex-col justify-center items-center gap-5 md:gap-10
              rounded-2xl font-normal hover:font-bold hover:scale-110 hover:bg-blue-200 hover:border-blue-300 hover:border-[1px] transition-transform"
              >
                <figure>
                  <img
                    className="w-28 md:w-44 h-28 md:h-44 rounded-2xl"
                    src={aci}
                    alt=""
                  />
                </figure>

                <hr className="w-full border-black" />

                <div className="text-md md:text-2xl">
                  <p className="uppercase">ACI Student Chapter, CUET</p>
                  <p className="italic text-sky-800">Vice President</p>
                  <p className="text-sm md:text-xl text-slate-950">
                    2024-25 Committee
                  </p>
                </div>
              </div>

              <div
                className="w-96 md:w-[500px] shadow-2xl p-5 flex flex-col justify-center items-center gap-5 md:gap-10
              rounded-2xl font-normal hover:font-bold hover:scale-110 hover:bg-blue-200 hover:border-blue-300 hover:border-[1px] transition-transform"
              >
                <figure>
                  <img
                    className="w-28 md:w-44 h-28 md:h-44 rounded-2xl"
                    src={ps}
                    alt=""
                  />
                </figure>

                <hr className="w-full  border-black" />

                <div className="text-md md:text-2xl">
                  <p className="uppercase">CUET Photographic Society </p>
                  <p className=" italic text-sky-800">Vice President</p>
                  <p className="text-sm md:text-xl text-slate-950">
                    2024-25 Committee
                  </p>
                </div>
              </div>

              <div
                className="w-96 md:w-[500px] shadow-2xl p-5 flex flex-col justify-center items-center gap-5 md:gap-10
              rounded-2xl font-normal hover:font-bold hover:scale-110 hover:bg-blue-200 hover:border-blue-300 hover:border-[1px] transition-transform"
              >
                <figure>
                  <img
                    className="w-28 md:w-44 h-28 md:h-44 rounded-2xl"
                    src={sports}
                    alt=""
                  />
                </figure>

                <hr className="w-full border-black" />

                <div className="text-md md:text-2xl">
                  <p className="uppercase">CUET Sports Club</p>
                  <p className="italic text-sky-800">Organizing Secretary</p>
                  <p className="text-sm md:text-xl text-slate-950">
                    2024-25 Committee
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-10">
            <h2 className="text-xl md:text-2xl py-10  uppercase">
              VOLUNTEERING:
            </h2>

            <ul className="text-xl md:text-2xl list-disc font-normal  pl-10 text-back">
              <li>
                National Concrete Fest 2023- Organized by ACI Student
                Chapter,CUET
              </li>
              <li>
                24- Hour Concrete Cube Competition- Organized by ACI Student
                Chapter,CUET{" "}
              </li>
              <li>
                7th International Conference On Advances In Civil
                Engineering(ICACE-2024)- Organized by Department of Civil
                Engineering(CUET){" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipAndActivities;
