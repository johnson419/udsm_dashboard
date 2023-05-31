import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <div className="flex mt-5 ml-5 mr-5 items-center justify-between">
        {/* logo */}
        <div className="ml-12 pt-2">
          <Image src="/Udsm.png" alt="logo" width={90} height={10} />{" "}
        </div>
        {/* navbar menus */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-300">
            Services
          </a>
          <a href="#" className="hover:text-blue-300">
            Events
          </a>
          <a href="#" className="hover:text-blue-300">
            About us
          </a>
          <a href="#" className="hover:text-blue-300">
            Terms
          </a>
          <a href="#" className="hover:text-blue-300">
            Community
          </a>
        </div>

        {/* Button */}
        <div className="flex mr-12">
          <a
            href="#"
            className="hidden md:block py-2 px-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </a>
        </div>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* mobile menu */}
      {/* <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="" className="hover:text-brightRed">
            Home
          </a>
          <a href="" className="hover:text-brightRed">
            Events
          </a>
          <a href="" className="hover:text-brightRed">
            Services
          </a>
          <a href="" className="hover:text-brightRed">
            About Us
          </a>
          <a href="" className="hover:text-brightRed">
            Careers
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Nav;
