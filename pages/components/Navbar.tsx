import React, { useState } from "react";
import jsPDF from "jspdf";

const Navbar = () => {
  const [saving, setSaving] = useState(false);

  const saveResume = () => {
    setSaving(true);
    let doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/mqGfnyf/Hope-Murithi-s-Resume2-1.png",
      "png",
      0,
      0,
      417,
      653
    );
    doc.save("HopeMurithi.pdf");
    setSaving(false);
  };

  return (
    <div>
      <nav className="py-10 mb-5 flex justify-between sticky top-0">
        <h1 className="text-xl font-burtons text-yellow-600">Hope Murithi</h1>
        <ul className="flex items-center">
          <li className="transform  hover:text-black transition duration-500 hover:scale-125">
            <a
              href="https://github.com/Hopp-Murithi"
              className=" bg-gradient-to-tr from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-full ml-8 "
            >
              Projects
            </a>
          </li>
          <li className="transform  hover:text-black transition duration-500 hover:scale-125">
            <button className="bg-gradient-to-tr from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-full ml-8"
            onClick={saveResume}>
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
