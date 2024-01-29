import { useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 border-b p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center text-primary space-x-3 "
            >
              <img className=" w-10" src={logo} alt="img" />
              <span className="w-10 inline-block items-center">XYZ</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link className="block hover:text-gray-300 cursor-pointer" activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path}>
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* language and sing up*/}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </a>
            <button
              className="bg-secondary py-2 px-4 transition-all duration-300 rounded
                            hover:text-white hover:bg-indigo-600  cursor-pointer"
            >
              Sign up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none 
                            focus:text-gray-300 cursor-pointer"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 text-xl px-4 pt-24 pb-5 bg-secondary mobile-menu ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link className="block hover:text-gray-300 text-white" onClick={toggleMenu} activeClass="active" spy={true} smooth={true} offset={-80} to={path} key={link}>
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
