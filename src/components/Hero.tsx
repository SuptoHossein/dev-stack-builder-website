import Banner from './../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex flex-col space-y-10">
        <h2 className="font-bold text-7xl ">
          Build Your Ideal <br />
          <span className='bg-linear-to-r from-[#FE5525] via-[#B925A3] to-[#8038E7] bg-clip-text text-transparent'>Development Stack</span>
        </h2>
        <p className='text-[#475569] text-lg'>
          Explore frontend, backend, database, and tooling options, <br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>

        <div className="flex gap-3">
          <button className="bg-linear-to-r from-[#F9721A] to-[#DB4BA9] px-6 cursor-pointer py-2 rounded-md text-white font-semibold">
            Explore Technologies
          </button>
          <button className="border border-gray-200 cursor-pointer px-10 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>

      <div className="">
        <img src={Banner} alt="banner-stack" />
      </div>
    </div>
  );
};

export default Hero;
