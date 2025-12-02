import { useState } from "react";
import themeLogo from "/night-mode.png";
export default function Header() {
  const navList = [
    { title: "Biography", link: "#info" },
    { title: "Projects", link: "#projects" },
    { title: "Contacts", link: "#contacts" },
  ];
  return (
    <header
      className="header bg-slate-100 dark:bg-slate-800 shadow-md sticky top-0 z-50 mx-auto px-6 flex flex-col items-center 
    space-y-3 md:flex-row md:justify-center md:space-y-0 mb-12">
      <nav className="p-5">
        <ul className="flex flex-row flex-wrap gap-4 justify-center items-center space-x-4 md:flex-nowrap md:space-x-6">
          {navList.map((item, index) => (
            <li key={index} className="text-sm md:text-base hover:text-emerald-600 dark:hover:text-emerald-400 font-medium">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <a href="">
          <img src={themeLogo} alt="ThemeMod" className="w-15 h-15"/>
        </a>
      </div>
    </header>
  );
}
