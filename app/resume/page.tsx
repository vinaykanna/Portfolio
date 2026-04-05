import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import {
  designation,
  education,
  experience,
  fullName,
  headerItems,
  skillsElaborated,
  summary,
} from "./config";

function Resume() {
  return (
    <section className="w-[1000px] m-auto border shadow-lg wrapper p-8">
      <Header
        headerItems={headerItems}
        fullName={fullName}
        designation={designation}
      />
      <main>
        <div className="mt-4">
          <Summary summary={summary} />
        </div>
        <div className="mt-8">
          <Experience experience={experience} />
        </div>
        <div className="mt-8">
          <Skills.Elaborated skills={skillsElaborated} />
        </div>
        <div className="mt-8">
          <Education education={education} />
        </div>
      </main>
    </section>
  );
}

export default Resume;
