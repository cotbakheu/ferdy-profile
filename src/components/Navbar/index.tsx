import React from "react";

// Utils Import
import classNames from "classnames";

// Icon Imports
import { IoMenu } from "react-icons/io5";
import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

function MenuToggler() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="sm:hidden relative">
      <IoMenu
        onClick={() => setShowMenu(!showMenu)}
        className="text-white text-3xl"
      />
      <div
        className={classNames(
          "absolute sm:hidden p-4 w-[80vw] top-12 transition-all duration-500 bg-background-secondary rounded-2xl shadow",
          showMenu ? "right-0" : "right-[-400px]"
        )}
      >
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <hr className={classNames("border-gray-400 my-2")} />
          <li>Github</li>
          <li>Instagram</li>
          <li>Discord</li>
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 left-0 w-full flex justify-between items-center p-6 sm:px-12 xl:px-24 bg-background-primary">
      <div className="flex gap-2 sm:text-base xl:text-2xl sm:w-[33.33%]">
        <p className="text-brand-primary ">{"<F/>"}</p>
        <p className="text-white font-semibold">Ferdy Aqliyansyah</p>
      </div>
      <ul className="hidden sm:flex gap-8 w-[33.33%] justify-center">
        <li
          className={classNames("hover:text-brand-primary", {
            ["text-brand-primary"]: location.pathname === "/",
          })}
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={classNames("hover:text-brand-primary", {
            ["text-brand-primary"]: location.pathname === "/blog",
          })}
        >
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
      <ul className="hidden sm:flex gap-8 w-[33.33%] justify-end">
        <li>
          <Link
            to={"https://www.instagram.com/ferdyaqliyansyah"}
            className="flex gap-2 hover:text-brand-primary"
            target="_blank"
          >
            <FaInstagram className="text-brand-primary text-2xl" />
            <p className="hidden xl:block">Instagram</p>
          </Link>
        </li>
        <li>
          <Link
            to={"https://discord.gg/mAQ8GYnK"}
            className="flex gap-2 hover:text-brand-primary"
            target="_blank"
          >
            <FaDiscord className="text-brand-primary text-2xl" />
            <p className="hidden xl:block">Discord</p>
          </Link>
        </li>
        <li>
          <Link
            to={"https://github.com/cotbakheu"}
            className="flex gap-2 hover:text-brand-primary"
            target="_blank"
          >
            <FaGithub className="text-brand-primary text-2xl" />
            <p className="hidden xl:block">Github</p>
          </Link>
        </li>
      </ul>
      <MenuToggler />
    </nav>
  );
}

export default Navbar;
