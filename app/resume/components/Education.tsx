import { education } from "../config";
import { Calendar } from "../icons";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section>
      <SectionTitle title="EDUCATION" />
      <div className="mt-3">
        <h3 className="text-lg text-secondary font-semibold">
          {education.title}
        </h3>
        <h4 className="text-sm text-primary mt-1">{education.college}</h4>
        <div className="flex gap-2 items-center mt-2">
          <Calendar color="rgb(55, 65, 81, 0.7)" className="w-4" />
          <span className="text-sm text-gray-600">{education.period}</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
