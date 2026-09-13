import Logo from "./../assets/logo-text.png";

const FooterMenu = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 ">
        <div className="flex flex-col space-y-3">
          <img src={Logo} alt="" width={150} />
          <p className="text-[#94A3B8]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-5">
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

        <div className="">
          <h2>PRODUCT</h2>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>

        <div className="">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>

        <div className="">
          <h2>PRODUCT</h2>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
