import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      
      <div className="container mx-auto flex justify-between text-[#94A3B8]">
        <p className="flex items-center gap-1 my-10">
          <LuCopyright />
          2026 Dev Stack. All rights reserved.
        </p>

        <ul className="flex gap-5 cursor-pointer my-10">
          <li className="hover:text-[#DA2B76]">Privacy</li>
          <li className="hover:text-[#DA2B76]">Terms</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
