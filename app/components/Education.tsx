import { education } from "../config";
import { Calendar } from "../icons";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section>
      <SectionTitle title="EDUCATION" />
      <div className="mt-2">
        <h3 className="text-lg text-secondary font-semibold">
          {education.title}
        </h3>
        <h4 className="text-sm text-primary mt-1 font-semibold">
          {education.college}
        </h4>
        <div className="flex gap-2 items-center mt-2">
          <Calendar color="black" className="w-4" />
          <span className="text-sm">{education.period}</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
