import { use, useState } from "react";
import type { Istack } from "../types/Stack";
import EmptyStack from "./EmptyStack";
import TechnologyCard from "./TechnologyCard";
import SelectedStackCard from "./SelectedStackCard";
import RemoveAll from "./RemoveAll";

interface stackProps {
  stackPromise: Promise<Istack[]>;
}

const Technologies = ({ stackPromise }: stackProps) => {
  const stacks = use(stackPromise);

  const [technologies, setTechnologies] = useState<Istack[]>([]);
  


  // console.log(selectdStacks, 'selectedStacks');

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col space-y-3">
        <h2 className="text-4xl font-bold">
          Explore the ‍<span className="text-[#DF61B4]">Technologies</span>
        </h2>
        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex sm:flex-col md:flex-row gap-8 mt-10">
        <div className="sm:w-4/4 lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stacks.map((stack) => (
              <TechnologyCard
                key={stack.id}
                stack={stack}
                technologies={technologies}
                setTechnologies={setTechnologies}
              ></TechnologyCard>
            ))}
          </div>
        </div>

        <div className="sm:w-full md:w-1/4">
          <div className="border border-slate-200 p-5 rounded-xl">
            <div className="mb-5">
              <h2 className="font-bold text-2xl">Your Stack</h2>
              <p className="text-[#94A3B8]">
                {technologies.length === 0
                  ? "No technologies selected yet."
                  : `${technologies.length} Technologies Selected`}
              </p>
            </div>

            <div className="space-y-2">
              {technologies.length === 0 ? (
                <EmptyStack />
              ) : (
                technologies.map((technology) => (
                  <SelectedStackCard
                    key={technology.id}
                    technology={technology}
                    technologies={technologies}
                    setTechnologies={setTechnologies}
                  />
                ))
              )}

              {technologies.length !== 0 ? <RemoveAll technologies={technologies} setTechnologies={setTechnologies} /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
