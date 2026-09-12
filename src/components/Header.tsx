import Logo from "./../assets/logo-text.png";

const Header = () => {
  return (
    <div>
      <nav className="container mx-auto py-5">
        <div className="flex justify-around items-center">
          <img src={Logo} alt="" />

          <ul className="flex gap-4">
            <li className="hover:text-[#DA2B76] cursor-pointer">Home</li>
            <li className="hover:text-[#DA2B76] cursor-pointer">
              Technologies
            </li>
            <li className="hover:text-[#DA2B76] cursor-pointer">Project</li>
            <li className="hover:text-[#DA2B76] cursor-pointer">About</li>
            <li className="hover:text-[#DA2B76] cursor-pointer">Contact</li>
          </ul>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full transition duration-300 hover:bg-[#ad0f5e] hover:text-white cursor-pointer ">
              Sign In
            </button>
            <button className="bg-[#D8217D] px-5 py-2 rounded-full text-white hover:bg-[#ad0f5e] cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
};

export default Header;
