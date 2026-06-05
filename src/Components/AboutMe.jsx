function AboutMe() {
  return (
    <div id="about" className="mt-10 md:mt-16">
      <div className="h-full py-10 text-black px-7 md:px-20  font-bold">
        <h2 className="text-sky-600 text-center text-2xl pb-4 ">ABOUT ME</h2>
        <hr className=" md:pb-10 md:mx-20 border-black" />

        <div>
          <p className=" text-2xl md:text-3xl text-center font-normal">
            My goal is to build a fulfilling career in the field of Structural
            Engineering by engaging in teaching, research, and continuous
            knowledge development. I hope to make a meaningful impact in both
            academic and professional circles by sharing knowledge and
            supporting sustainable, innovative approaches to civil
            infrastructure.
          </p>

          <div className="flex flex-col md:flex-row ali gap-10 mt-10 justify-center items-center">
            <div>
              <a href="/Industry_cv.pdf" download>
                <button
                  className="w-[175px]
              hover:scale-110
        relative px-5 py-2 
        uppercase
        text-white font-normal hover:font-bold text-lg 
        rounded-xl 
        bg-sky-400
        shadow-lg
        hover:bg-sky-600
        transition 
        duration-300
        ease-in-out"
                >
                  Indrustial CV
                </button>
              </a>
            </div>
            <div>
              <a href="/Academic_cv.pdf" download>
                <button
                  className="w-[175px]
               hover:scale-110
         relative px-5 py-2 
         uppercase
         text-white font-normal hover:font-bold text-lg 
         rounded-xl 
         bg-sky-400
         shadow-lg
         hover:bg-sky-600
         transition 
         duration-300
         ease-in-out"
                >
                  Academic CV
                </button>
              </a>
            </div>
          </div>

          <p className="text-sky-600 italic text-2xl text-center pt-16 md:pt-20 pb-5 font-bold">
            Research Interest
          </p>
          <div className="flex flex-wrap gap-12 justify-center items-center">
            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Structural Engineering</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Sustainable Materials</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Computional Mechanics </p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">
                Sustainable Materials and Infrastructures
              </p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl">Geopolymer Concrete</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Structural Behavior</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Earthquake Engineering</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Finite Element Modeling</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Life-Cycle Assessment</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl ">Prestressed Concrete</p>
            </div>

            <div
              className="w-full  md:w-[45%] shadow-2xl border-[1px] rounded-2xl px-10 py-10  text-center
            hover:bg-blue-200 font-normal hover:font-bold  hover:text-3xl hover:border-blue-300 hover:scale-110  transition-transform hover:cursor-pointer"
            >
              <p className="text-2xl">
                High-Performance and Multi-Functional Cementitious Materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
