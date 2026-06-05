import cuet from "../assets/Emon/CUET_logo-removebg-preview.png";
import milestone from "../assets/Emon/Milstone_collage.png";
import annada from "../assets/Emon/Annada_logo-removebg-preview.png";

function Education() {
  return (
    <div id="education" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-white px-7 md:px-20  font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 uppercase ">
          Education
        </h2>
        <hr className="md:pb-10 md:mx-20 border-black" />

        <div className="text-black py-10 flex flex-col md:flex-row gap-10 md:gap-5">
          <div
            className="card shadow-2xl bg-base-100 w-full border-[1px] lg:w-[33.33%]
         hover:bg-blue-200 hover:scale-105 hover:border-blue-300 transition-transform hover:cursor-pointer"
          >
            <figure className="px-2 pt-2  w-[90%] h-[90%] mx-auto">
              <img src={cuet} alt="cuet logo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                BACHELOR OF SCIENCE IN CIVIL ENGINEERING
              </h2>
              <p className="italic font-normal">
                Chittagong University of Engineering & Technology (CUET)
              </p>
              <p className="text-xl font-serif">
                <span className="uppercase font-sans">Result:</span> CGPA
                <span className="text-green-700"> 3.55</span> out of{" "}
                <span className="text-red-600">4.00</span>
              </p>
              <p className="text-sm text-red-700 italic">
                Ranked 11th out of 132 students
              </p>
            </div>
          </div>

          <div
            className="card shadow-2xl bg-base-100 w-full border-[1px] lg:w-[33.33%]
         hover:bg-blue-200 hover:scale-105 hover:border-blue-300 transition-transform hover:cursor-pointer"
          >
            <figure className="px-2 pt-2  w-[90%] h-[90%] mx-auto">
              <img
                src={milestone}
                alt="milestone logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">
                Higher Secondary Certificate (HSC)
              </h2>
              <p className="italic font-normal">
                Milestone College, Dhaka, Bangladesh
              </p>
              <p className="text-xl font-serif">
                <span className="font-sans uppercase">Result:</span> GPA
                <span className="text-green-700"> 5.00</span> out of{" "}
                <span className="text-red-600">5.00</span>
              </p>
            </div>
          </div>

          <div
            className="card shadow-2xl bg-base-100 w-full border-[1px] lg:w-[33.33%]
         hover:bg-blue-200 hover:scale-105 hover:border-blue-300 transition-transform hover:cursor-pointer"
          >
            <figure className="px-2 pt-2 w-[90%] h-[90%] mx-auto">
              <img src={annada} alt="annada logo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">
                Secondary School Certificate (SSC)
              </h2>
              <p className="italic font-normal">
                Annada Govt. High School, Brahmanbaria, Bangladesh{" "}
              </p>
              <p className="text-xl font-serif">
                <span className="font-sans uppercase">Result:</span> GPA
                <span className="text-green-700"> 4.77</span> out of{" "}
                <span className="text-red-600">5.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
