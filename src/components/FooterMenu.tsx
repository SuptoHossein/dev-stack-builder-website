import Logo from "./../assets/logo-text.png";

const FooterMenu = () => {
  return (
    <div className="container mx-auto pt-15">
      <div className="grid grid-cols-1 md:grid-cols-4 content-center">
        <div className="flex flex-col items-center md:items-start space-y-6 ">
          <img src={Logo} alt="" width={150} />
          <p className="text-[#94A3B8]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-5 mt-4">
            <p className="text-[#475569] cursor-pointer hover:text-[#DA2B76] font-semibold">
              GitHub
            </p>
            <p className="text-[#475569] cursor-pointer hover:text-[#DA2B76] font-semibold">
              Twitter
            </p>
            <p className="text-[#475569] cursor-pointer hover:text-[#DA2B76] font-semibold">
              LinkedIn
            </p>
          </div>
        </div>

        <div className="xs:sr-only sm:sr-only md:not-sr-only">
          <h2 className="mb-5">PRODUCT</h2>
          <ul className="text-[#94A3B8] space-y-2">
            <li className="hover:text-[#DA2B76]">
              <a href="">Home</a>
            </li>
            <li className="hover:text-[#DA2B76]">
              <a href="">Technologies</a>
            </li>
            <li className="hover:text-[#DA2B76]">
              <a href="">Projects</a>
            </li>
          </ul>
        </div>

        <div className="sm:sr-only md:not-sr-only">
          <h2 className="mb-5">COMPANY</h2>
          <ul className="text-[#94A3B8] space-y-2">
            <li className="hover:text-[#DA2B76]">
              <a href="">About</a>
            </li>
            <li className="hover:text-[#DA2B76]">
              <a href="">Contact</a>
            </li>
            <li className="hover:text-[#DA2B76]">
              <a href="">Careers</a>
            </li>
          </ul>
        </div>

        <div className="sm:sr-only md:not-sr-only">
          <h2 className="mb-5">LEGAL</h2>
          <ul className="text-[#94A3B8] space-y-2">
            <li className="hover:text-[#DA2B76]">
              <a href="">Privacy Policy</a>
            </li>
            <li className="hover:text-[#DA2B76]">
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      

      <div className="border border-slate-100 mt-20"></div>
    </div>
  );
};

export default FooterMenu;
