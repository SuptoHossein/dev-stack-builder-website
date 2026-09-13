import { IoMdClose } from "react-icons/io";
import type { Istack } from "../types/Stack";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface technologyProp {
  technology: Istack;
  technologies: Istack[];
  setTechnologies: Dispatch<SetStateAction<Istack[]>>
}


const SelectedStackCard = ({technology, technologies, setTechnologies}: technologyProp) => {

  const handleRemoveTechnology = (technology: Istack) => {
    const restTechnologies = technologies.filter(selectedTechnology => selectedTechnology.id !== technology.id)
    setTechnologies(restTechnologies)
    toast.warning(`${technology.name} is removed.`)
  }

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="border border-slate-200 rounded-xl px-3 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <img
              src={technology.icon}
              alt=""
              width={50}
            />
            <div className="">
              <h2 className="font-bold text-xl">{technology.name}</h2>
              <p className="text-[#94A3B8]">{technology.category}</p>
            </div>
          </div>
          <button onClick={() => handleRemoveTechnology(technology)} className="text-2xl cursor-pointer text-[#94A3B8] hover:text-rose-600">
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedStackCard;
