import { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import headerlogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        !event.target.closest("aside") &&
        !event.target.closest(".hamburger-icon")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      whileInView={{ once: true }}
      className="padding-x w-full py-8 z-20 absolute"
    >
      <nav className="flex items-center justify-between mx-container">
        <a href="/">
          <img src={headerlogo} alt="logo" height={29} width={130} />
        </a>
        <ul className="flex items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((i) => (
            <li key={i.label}>
              <a
                href={i.href}
                className="font-montserrat hover:text-slate-800 leading-normal text-slate-gray"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <h3 className="font-bold max-lg:hidden font-montserrat text-slate-500">
            {/* Sign In / Explore Now */}
          </h3>
        </div>
        <div className="hidden max-lg:block hamburger-icon">
          <img
            src={hamburger}
            alt="hamburger menu"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Side panel */}
      <aside
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col items-center justify-center`}
      >
        <a className="mx-10 mt-10 flex items-start justify-center" href="/">
          <img src={headerlogo} alt="logo" height={50} width={100} />
        </a>

        <ul className="flex flex-col mx-10 my-10 items-start justify-center gap-6 p-4">
          {navLinks.map((i) => (
            <li key={i.label}>
              <a
                href={i.href}
                className="font-montserrat hover:text-slate-800 leading-normal text-slate-gray"
                onClick={toggleMenu}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </motion.header>
  );
};

export default Nav;
