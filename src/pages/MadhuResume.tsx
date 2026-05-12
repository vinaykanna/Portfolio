import Summary from "../components/Summary";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Languages from "../components/Languages";
import Skills from "../components/Skills";
import {
  designation,
  education,
  experience,
  fullName,
  headerItems,
  languages,
  skills,
  summary,
} from "./MadhuResumeConfig";

function MadhuResume() {
  return (
    <section className="w-[1000px] m-auto border shadow-lg wrapper">
      <Header
        headerItems={headerItems}
        fullName={fullName}
        designation={designation}
      />
      <div className="flex p-6 gap-10">
        <div className="w-[100%] flex flex-col gap-6">
          <Summary summary={summary} />
          <Experience experience={experience} />
          <Skills skills={skills} />
          <Education education={education} />
          <Languages languages={languages} />
        </div>
        {/* <div className="w-[40%] flex flex-col gap-10">
          <Skills skills={skills} />
          <Languages languages={languages} />
        </div> */}
      </div>
    </section>
  );
}

export default MadhuResume;
