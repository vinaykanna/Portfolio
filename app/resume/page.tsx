import Education from "./components/Education";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function Resume() {
  return (
    <section className="w-[1000px] m-auto shadow-lg min-h-screen">
      <Header />
      <div className="flex p-6 gap-10">
        <div className="w-[60%] flex flex-col gap-6">
          <Summary />
        </div>
        <div className="w-[40%] flex flex-col gap-6">
          <Skills />
          <Education />
        </div>
      </div>
    </section>
  );
}

export default Resume;
