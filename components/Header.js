import Image from "next/image";
import logo from "../public/logo1.png";
import logo2 from "../public/insta.png";
import { IoSearch } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { BiPlusCircle } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 lg:px-20 py-6">
      {/* Left Section */}
      <div>
        <div className="w-28 hidden lg:inline-grid cursor-pointer">
          <Image src={logo} alt="Main Logo" />
        </div>
        <div className="h-12 w-12 block lg:hidden cursor-pointer">
          <Image src={logo2} alt="Mobile Logo" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center border gap-2 px-2 py-1 rounded-md border-slate-500">
        <IoSearch className="text-slate-400" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>

      {/* Right Section */}
        <div className="flex items-center gap-2">
          <TiHome className="hidden md:inline-flex h-6 w-10 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <BiPlusCircle className="h-6 w-10 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" alt="profile" />
        </div>
    </header>
  );
};

export default Header;
