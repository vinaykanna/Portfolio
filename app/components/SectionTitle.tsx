function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xl mb-2 font-semibold border-black border-solid border-b-2">
      {title}
    </h2>
  );
}

export default SectionTitle;
