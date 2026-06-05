import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import AboutMe from "./Components/AboutMe";
import "./App.css";

import "react-awesome-slider/dist/styles.css";
import Education from "./Components/Education";
import Research from "./Components/Research";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import LeadershipAndActivities from "./Components/LeadershipAndActivities";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
        {/* Navbar element */}
        <Navbar />

        {/* banner */}
        <Banner />

        {/*About me  */}
        <AboutMe />

        {/* Education */}
        <Education />

        {/* Research */}
        <Research />

        {/* Experience */}
        <Experience />

        {/* Skills */}
        <Skills />

        {/* Leadership & Acrtivites */}
        <LeadershipAndActivities />

        {/* Projects */}
        <Projects />

        {/* contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
