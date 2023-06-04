import React, { useState } from "react";


const Navbar = () => {
  const [saving, setSaving] = useState(false);


  return (
    <nav className=" sticky top-0 -mt-5 py-10 mb-5 flex justify-between ">
      <h1 className="text-xl font-burtons text-white">Hope Murithi</h1>
      <ul className="flex items-center">
        <li className="transform  hover:text-black transition duration-500 hover:scale-125">
          <a
            href="https://github.com/Hopp-Murithi?tab=repositories"
            className=" bg-gradient-to-tr from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-full ml-8 "
          >
            Projects
          </a>
        </li>
        <li className="transform  hover:text-black transition duration-500 hover:scale-125">
          <button
            className="bg-gradient-to-tr from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-full ml-8"
          ><a href="https://drive.google.com/file/d/1VLoBM6v4a4tQNaFf2xK5LogHtXlANuQr/view?usp=sharing">  Resume</a>
          
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
