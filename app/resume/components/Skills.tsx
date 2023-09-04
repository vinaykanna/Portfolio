import { skills } from "../config";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section>
      <SectionTitle title="SKILLS" />
      <div className="flex gap-4 flex-wrap mt-3">
        {skills.map((item, index) => (
          <div
            className="text-xs border rounded px-2 py-1 font-semibold"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
