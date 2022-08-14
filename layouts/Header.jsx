import React from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    "home",
    "about",
    "characters",
    "comics",
    "creators",
    "events",
    "series",
    "stories",
    "contact",
  ];

  return (
    <nav className="fixed flex w-full items-center p-3 bg-neutral-900 text-white justify-between">
      <h1 className="pt-2 text-4xl md:text-5xl font-bold font-marvel uppercase tracking-wide">
        MARVEL TRAVERSE
      </h1>
      <ul className="items-center hidden md:flex font-normal text-xl">
        {links.map((page) => (
          <li className="p-4 capitalize" key={page}>
            <a href="">{page}</a>
          </li>
        ))}

        <li className="p-4">
          <button
            className="flex items-center"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </li>
      </ul>
      <div className="items-center flex md:hidden">
        <div className="p-2 flex items-center" onClick={handleNav}>
          <MdMenu size={30} />
        </div>

        <div className="p-2 flex items-center">
          <button
            className="text-2xl"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      <ul
        className={
          nav
            ? "items-center fixed left-0 top-0 w-full h-full font-normal text-2xl bg-red-900 duration-500"
            : "items-center fixed top-0 w-full h-full font-normal text-xl bg-red-900 left-[-100%] duration-500"
        }
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="pt-2 text-4xl md:text-5xl font-bold font-marvel uppercase tracking-wide">
            MARVEL TRAVERSE
          </h1>
          <MdClose size={30} onClick={handleNav} />
        </div>
        {links
          .filter((page) => page !== "contact")
          .map((page) => (
            <li
              className="p-4 capitalize border-b border-b-red-300 border-opacity-30"
              key={page}
            >
              <a href="">{page}</a>
            </li>
          ))}
        <li className="p-4 capitalize">
          <a href="">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
