import type { Dispatch, SetStateAction } from "react";
import type { Istack } from "../types/Stack";
import { toast } from "react-toastify";

interface PropType {
  technologies: Istack[];
  setTechnologies: Dispatch<SetStateAction<Istack[]>>;
}

const RemoveAll = ({ technologies, setTechnologies }: PropType) => {
  const handleRemoveAll = () => {
    setTechnologies(technologies = [])
    toast.warning(`All Technologies are removed.`)
  }
  return (
    <div className="mt-20">
      <button onClick={handleRemoveAll} className="px-4 py-2 text-rose-800 rounded-xl cursor-pointer w-full border border-rose-400 hover:bg-rose-300 hover:border-rose-400 ">Remove All</button>
    </div>
  );
};

export default RemoveAll;
