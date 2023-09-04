import { passions } from "../config";
import { Diamond } from "../icons";
import SectionTitle from "./SectionTitle";

function Passions() {
  return (
    <section>
      <SectionTitle title="PASSIONS" />
      {passions.map((item, index) => (
        <div className="flex gap-2 mt-2" key={index}>
          <div>
            <Diamond color="rgb(149, 29, 196)" className="w-4 mt-1" />
          </div>
          <h4 className="text-md text-secondary font-semibold flex-1">
            {item}
          </h4>
        </div>
      ))}
    </section>
  );
}

export default Passions;
