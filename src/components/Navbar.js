import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const links = [
    { name: "HOME" },
    { name: "ABOUT" },
    { name: "CONTACT" },
    { name: "FORUM" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between pt-5">
      <div className="w-20 h-20 bg-red-600 rounded-full text-slate-50 flex justify-center items-center ml-14 hover:cursor-default">
        <h1 className="font-bold text-4xl -rotate-6">麺</h1>
      </div>
      <FaBars className="hover:cursor-pointer z-20 fixed right-5 top-6 md:hidden" onClick={() => setDropdown(!dropdown)} />
      <ul className={`md:pl-10 pr-28 z-10 md:static fixed top-0 right-0 md:h-auto ease-in-out duration-500 ${!dropdown ? 'right-[-100%]' : 'right-0'} `}>
        {links.map((link, index) => (
          <li key={link.index} className="md:inline-block md:ml-10 mr-5 md:my-0 my-6">
            <a href="/" className="font-bold text-black text-l md:py-5 py-3 inline-block hover:underline underline-offset-4">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
