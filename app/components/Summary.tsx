import SectionTitle from "./SectionTitle";

function Summary({ summary }: any) {
  return (
    <section>
      <SectionTitle title="SUMMARY" />
      <p className="text-sm mt-3">{summary}</p>
    </section>
  );
}

export default Summary;
