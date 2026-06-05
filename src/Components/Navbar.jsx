import "../App.css";

function Navbar() {
  const links = (
    <>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#research">Research</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#leadershipAndAcrtivites">Leadership & Activites</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact Me</a>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar  max-w-screen-2xl max-h-11 mx-auto fixed z-10  bg-gray-800 opacity-80">
        <div>
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1] p-4 shadow text-2xl font-bold bg-gray-800 opacity-80  text-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a href="#">
            <p className="font-bold text-2xl  md:text-[28px] text-blue-600 mx-2">
              Sany Hasan Emon
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex mx-auto">
          <ul className=" text-white  text-[22px] flex  gap-8 menu-horizontal px-1 uppercase">
            {links}
          </ul>
        </div>
        {/* nav end */}
        {/* <div className="navbar-end">
          <a href="../assets/Emon/CV.pdf" download>
            <button
              className="
              hover:scale-110
        relative px-5 py-2 
        uppercase
        text-orange-600 font-bold text-lg 
        rounded-xl 
        bg-sky-400
        shadow-lg
        hover:bg-sky-500
        hover:text-black
        transition 
        duration-300
        ease-in-out
        before:absolute 
        before:inset-0 
        before:rounded-xl 
        before:bg-sky-400
        before:blur-xl 
        before:opacity-75 
        before:animate-pulse
      "
            >
              Resume
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
