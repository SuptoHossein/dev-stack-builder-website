import { FaStar } from "react-icons/fa";
import type { Istack } from "../types/Stack";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

export interface stackProps {
  stack: Istack;
  technologies: Istack[];
  setTechnologies: Dispatch<SetStateAction<Istack[]>>
}

const TechnologyCard = ({ stack, technologies, setTechnologies }: stackProps) => {

  const [addToStack, setAddToStack] = useState(false);

  const handleAddtoStack = (stack:Istack) => {
    setTechnologies([...technologies, stack])
    setAddToStack(true);
    toast.success(`${stack.name} is added`)
  };
  return (
    <div>
      <div className={`border ${addToStack ? 'border-rose-300': 'border-slate-200'}  rounded-xl p-5 relative`}>
        <div className="flex flex-col space-y-3">
          <img src={stack.icon} width={40} alt="" />
          <h2 className="text-2xl font-bold">{stack.name}</h2>
          <p className="text-[#64748B]">{stack.description}</p>
          <div className="border border-slate-50 mt-6"></div>
        </div>

        <div className="mt-3 flex md:flex-col lg:flex-row justify-between items-center">
          <p className="text-[#475569] bg-[#F4F7FA] px-2 py-1 rounded-md">
            {stack.category}
          </p>
          <p>{stack.difficulty}</p>
          <p className="flex gap-2 items-center justify-center">
            {" "}
            <span className="text-[#FBBF24]">
              <FaStar />
            </span>
            {stack.rating}
          </p>
        </div>

        <button
          onClick={() => handleAddtoStack(stack)}
          disabled={addToStack}
          className={`mt-6 text-semibold w-full px-4 py-2 rounded-xl cursor-pointer ${addToStack ? 'bg-rose-200 text-rose-700 border border-rose-600' : 'bg-[#0A0F1D] text-white'}`          }
        >
          {addToStack === true ? "Added to Stack" : "Add to Stack"}
        </button>
        <p className="absolute top-6 right-9 py-1 bg-rose-100 text-rose-500 border border-rose-300 font-semibold rounded-4xl w-30 text-center">
          {stack.badge}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
