import { experience } from "../config";
import { Calendar, Location } from "../icons";
import SectionTitle from "./SectionTitle";

function Experience() {
  return (
    <section>
      <SectionTitle title="EXPERIENCE" />
      <div className="mt-2">
        {experience.map((item, index) => (
          <div key={index} className="mt-3">
            <h2 className="text-primary text-lg font-semibold">
              {item.company}
            </h2>
            {item.roles.map((role, index) => (
              <div key={index}>
                <h3 className="text-secondary text-md font-semibold">
                  {role.title}
                </h3>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center mt-2">
                    <Calendar color="rgb(55, 65, 81, 0.7)" className="w-4" />
                    <span className="text-sm">{role.period}</span>
                  </div>
                  <div className="flex gap-2 items-center mt-2">
                    <Location color="rgb(55, 65, 81, 0.7)" className="w-4" />
                    <span className="text-sm">{role.location}</span>
                  </div>
                </div>
                <ul className="mt-2 list-disc pl-5">
                  {role.work.map((item, index) => (
                    <li key={index} className="text-xs mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
