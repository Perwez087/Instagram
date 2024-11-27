import Image from "next/image";
import logo from "../public/logo1.png";
import logo2 from "../public/insta.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 lg:px-20 py-4">
      {/* Left Section */}
      <div>
        <div className="w-28 hidden lg:inline-grid cursor-pointer">
          <Image src={logo} alt="Main Logo" />
        </div>
        <div className="h-12 w-12 block lg:hidden cursor-pointer">
          <Image src={logo2} alt="Mobile Logo"/>
        </div>
      </div>

      {/* Middle Section */}
      <div>
        <input type="text" placeholder="Search" />
      </div>

      {/* Right Section */}
      <div>
        
      </div>
    </header>
  );
};

export default Header;
