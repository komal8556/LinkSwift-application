import React from "react";
import { navLinks } from "../constant/index";
import { toggleIcon, closeIcon } from "../assets";

const navigation = () => {
  const [toggle, setToggle] = React.useState("false")

  return (
    <nav className="py-7 md:py-9 ">

      <div className="flex flex-col md:hidden relative">
        <div className="flex w-full justify-between">
           <span className="text-textColor text-2xl font-semibold">LinkSwift</span>
           <button>
              <img src={!toggle ? toggleIcon : closeIcon} className="w-5" alt="toggle icon" 
              onClick={() => setToggle(!toggle)}
              />
           </button>
        </div>
        <div className={` ${!toggle ? "hidden" : "flex"} flex-col w-[70%] px-10  py-20 bg-textColor/90 absolute right-0 top-14 text-center rounded-2xl text-white`}>
          <ul className="flex flex-col gap-5">
            {navLinks.map((navLink) => (
              <li 
              key={navLink.id}
              className="text-lg hover:text-accent">
                {navLink.title}
              </li>
            ) )}
          </ul>
          <div className="flex mt-12 flex-col gap-3">
            <button className="text-accent font-medium px-6 py-2 border-2  border-accent rounded-xl cursor-pointer hover:bg-accent hover:text-background">
              Log in
            </button>
            <button className="text-background font-medium bg-accent px-6 py-2 rounded-xl cursor-pointer hover:bg-[#b51b61]">
              Sign in
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex  md:items-center md:justify-between md:w-full md:gap-12">
        <div className="flex gap-16 items-center">

          <span className="text-textColor text-2xl font-semibold">LinkSwift</span>

          <ul className="flex gap-8">
            {navLinks.map((navLink) => (
              <li
              key={navLink.id}
              className="text-textColor text-base hover:text-accent cursor-pointer"
              >
                {navLink.title}
              </li>
            ))}
          </ul>
        </div>

          <div className="flex gap-3">
            <button className="text-accent font-medium px-6 py-2 border-2  border-accent rounded-xl cursor-pointer hover:bg-accent hover:text-background">
              Log in
            </button>
            <button className="text-background font-medium bg-accent px-6 py-2 rounded-xl cursor-pointer hover:bg-[#b51b61]">
              Sign in
            </button>
          </div>

      </div>

    </nav>
  );
};

export default navigation;
