import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMagnetOutline } from "react-icons/io5";
import {Link } from "react-router-dom";


function header() {
  return (
    <header className=" h-[10vh] bg-slate-100 flex items-center justify-end gap-5 px-5">
      <input
        type="text"
        placeholder="search..."
        className="h-[6vh] w-64 outline-none border-[1px] bg-transparent
    border-gray-600 rounded-full hover:border-2 pl-5"
      />

      <button>
        <IoMdNotificationsOutline className="text-xl" />
      </button>

      <div className="h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center text-white">
       <Link to="/dropdown">
        RV
       </Link>
      </div>
    </header>
  );
}

export default header;
