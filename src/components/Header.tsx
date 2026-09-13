import { IoMenuSharp } from "react-icons/io5";
import Logo from "./../assets/logo-text.png";

const Header = () => {
  return (
    <div className="">
      <div className="container mx-auto py-5 ">
        <nav className="fixed top-0 z-50 right-0 left-0 w-full bg-white shadow py-5">
          <div className="px-5 flex justify-between md:justify-around items-center">
            <div className="text-3xl md:hidden">
              <IoMenuSharp />
            </div>

            <img src={Logo} alt="" />

            <ul className="sr-only md:not-sr-only flex gap-5">
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
      </div>
    </div>
  );
};

export default Header;
