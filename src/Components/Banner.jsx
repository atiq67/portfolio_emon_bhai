import { Typewriter } from "react-simple-typewriter";
import banner_img from "../assets/Emon/emon_pp_BR.png";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div id="banner">
      <div
        style={{ fontFamily: "monospace" }}
        className="pt-40 px-7 lg:px-20  flex justify-center items-center 
        flex-col md:flex-row md:justify-between gap-10 md:gap-0"
      >
        <div className="w-[100%] lg:w-[60%]">
          <h2 className="text-black text-4xl md:text-3xl lg:text-5xl font-bold mb-4">
            HI,
          </h2>
          <h2 className="text-black text-4xl md:text-3xl lg:text-5xl font-bold mb-4">
            I AM{" "}
            <span className="text-blue-600 uppercase">
              <Typewriter
                words={["Sany Hasan Emon"]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            ,
          </h2>
          <h2 className="text-black text-4xl md:text-3xl lg:text-3xl font-normal italic mb-4">
            Civil Engineering Graduate | Structural Engineering
          </h2>

          <div className="text-black flex gap-4 mb-4 ">
            <a href="https://www.linkedin.com/in/sanyhasanemon/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
            </a>
            <a href="mailto:sanyhasanemon@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-full h-auto">
          <motion.img
            src={banner_img}
            alt="Profile"
            // Animation
            initial={{ y: 100, opacity: 0 }} // start 100px below
            whileInView={{ y: 0, opacity: 1 }} // move to natural position
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
