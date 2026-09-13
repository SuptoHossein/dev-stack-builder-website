import { FaStar } from "react-icons/fa";

const TechnologyCard = () => {
  return (
    <div>
      <div className="border border-slate-200 rounded-xl p-5 relative">
        <div className="flex flex-col space-y-3">
          <img
            src="https://icon.icepanel.io/Technology/svg/React.svg"
            width={40}
            alt=""
          />
          <h2 className="text-2xl font-bold">React</h2>
          <p className="text-[#64748B]">
            A declarative, component-based JavaScript library for building
            modern user interfaces.
          </p>
          <div className="border border-slate-50 mt-6"></div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <p className="text-[#475569] bg-[#F4F7FA] px-2 py-1 rounded-md">
            Frontend
          </p>
          <p>Beginner-Friendly</p>
          <p className="flex gap-2 items-center justify-center">
            {" "}
            <span className="text-[#FBBF24]">
              <FaStar />
            </span>
            4.9
          </p>
        </div>

        <p className="mt-6 bg-[#0A0F1D] px-4 py-2 rounded-xl text-white cursor-pointer text-center">
          Add to Stack
        </p>
        <p className="absolute top-9 right-9 py-1 bg-rose-100 text-rose-500 border border-rose-300 font-semibold rounded-4xl w-30 text-center">
          Popular
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
