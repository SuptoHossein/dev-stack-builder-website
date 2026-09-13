import TechnologyCard from "./TechnologyCard";
import SelectedStackCard from "./SelectedStackCard";
import RemoveAll from "./RemoveAll";

const Technologies = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-3">
        <h2 className="text-4xl font-bold">
          Explore the ‍<span className="text-[#DF61B4]">Technologies</span>
        </h2>
        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="w-full flex gap-8 mt-10">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-5">
            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />
          </div>
        </div>
        <div className="w-1/4">
          <div className="border border-slate-200 p-5 rounded-xl">
            <div className="mb-5">
              <h2 className="font-bold text-2xl">Your Stack</h2>
              <p className="text-[#94A3B8]">2 Technolory Selected</p>
            </div>

            <div className="space-y-20">
              <SelectedStackCard />

              <RemoveAll />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
