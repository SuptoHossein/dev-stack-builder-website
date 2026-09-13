import { IoMdClose } from "react-icons/io";

const SelectedStackCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="border border-slate-200 rounded-xl px-3 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <img
              src="https://icon.icepanel.io/Technology/svg/React.svg"
              alt=""
              width={50}
            />
            <div className="">
              <h2 className="font-bold text-xl">React</h2>
              <p className="text-[#94A3B8]">Frontend</p>
            </div>
          </div>
          <span className="text-2xl cursor-pointer text-[#94A3B8] hover:text-rose-600">
            <IoMdClose />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedStackCard;
