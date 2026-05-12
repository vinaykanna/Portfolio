import SectionTitle from "./SectionTitle";

function Summary({ summary }: any) {
  return (
    <section>
      <SectionTitle title="Professional Summary" />
      {summary.map((item: string, index: number) => (
        <p className="text-[15px] mt-3" key={index}>
          {item}
        </p>
      ))}
    </section>
  );
}

export default Summary;
