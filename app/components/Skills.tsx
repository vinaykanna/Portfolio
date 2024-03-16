import SectionTitle from "./SectionTitle";

function Skills({ skills }: any) {
  return (
    <section>
      <SectionTitle title="Skills" />
      <div className="flex gap-4 flex-wrap mt-3">
        {skills.map((item: any, index: number) => (
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
