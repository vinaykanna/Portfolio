import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Passions from "./components/Passions";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function Resume() {
  return (
    <section className="w-[1000px] m-auto border shadow-lg wrapper">
      <Header />
      <div className="px-6 pt-2">
        <Summary />
      </div>
      <div className="flex p-6 pt-4 gap-10">
        <div className="w-[60%] flex flex-col gap-6">
          <Experience />
        </div>
        <div className="w-[40%] flex flex-col gap-10">
          <Skills />
          <Achievements />
          <Passions />
          <Languages />
          <Education />
        </div>
      </div>
    </section>
  );
}

export default Resume;
