function Research() {
  return (
    <div id="research" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-white px-7 md:px-20 font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 uppercase">
          Research
        </h2>
        <hr className=" md:pb-10 md:mx-20 border-black" />

        <div className="mt-20 flex font-serif justify-center items-center text-black">
          <div className="flex flex-col md:flex-row gap-10 items-center text-left">
            <div className="border-black border-b-2 py-7 md:px-7 md:border-r-2 md:border-b-0 md:w-[60%]">
              <p className="font-normal  text-lg md:text-2xl">
                <span className="font-bold font-sans uppercase text-sky-600">
                  Major :
                </span>{" "}
                Structural Engineering{" "}
              </p>
              <p className="font-normal  text-lg md:text-2xl">
                <span className="font-bold font-sans uppercase text-sky-600">
                  Minor :
                </span>{" "}
                Water Resources Engineering{" "}
              </p>
              <div className="font-normal  text-lg md:text-2xl">
                <p>
                  <span className="font-bold font-sans uppercase text-sky-600">
                    Undergraduate Thesis Title :
                  </span>{" "}
                  Performance of Treated Sea Sand in Mortar
                </p>
                <p>
                  Thesis was supervised by{" "}
                  <span className="font-bold font-sans uppercase text-gray-950">
                    Prof. Dr. G M Sadiqul Islam
                  </span>
                  ,{" "}
                </p>
                <p className="text-base">Department of Civil Engineering, </p>
                <p className="text-sm italic">
                  Chittagong University of Engineering & Technology{" "}
                </p>
              </div>
            </div>
            <div className="md:w-[50%] text-blue-600 font-normal text-2xl">
              Analyzed the properties of treated sea sand from various
              locations, evaluated the effects of different treatment processes
              on sand characteristics, and compared the mechanical strength and
              durability of mortar incorporating treated sea sand.{" "}
            </div>
          </div>
        </div>
        <div className="text-red-600 text-center text-xl my-8">
          <p>
            *** The manuscript is now under review in the Journal of the Civil
            Engineering Forum (JCEF)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Research;
