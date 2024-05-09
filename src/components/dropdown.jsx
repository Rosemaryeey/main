import React from "react";
import {
  IoArrowUndoCircleOutline,
  IoChevronForwardCircleOutline,
  IoChevronForwardOutline,
  IoHelpCircleSharp,
  IoLogOutOutline,
  IoMoonSharp,
  IoPeopleSharp,
  IoPersonSharp,
  IoSettingsSharp,
  
} from "react-icons/io5";
import { Link } from "react-router-dom";

function dropdown() {
  return (
    <div className="h-full w-full flex items-start justify-end">
      <section className=" text-black  bg-slate-400 h-[50vh] w-[30vw] flex items-center justify-center  flex-col">
        <header className="flex justify-around items-start flex-col h-[50vh] w-[30vw] p-5">
          <div
            className=" h-[8vh] w-[25vw] border-black border-b-2 flex justify-start
        items-start  "
          >
            <h3 className="h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center text-white">
              RV
            </h3>
            <h3 className="px-5">ROSEMARY OGUEZUONU</h3>
          </div>

          <div className="flex justify-between items-center h-5 w-[25vw] ">
            <main className="flex">
              <IoPersonSharp className=" bg-slate-400 h-5 w-5 rounded-full flex items-center justify-center" />
              <h4 className="px-5">Edit Profile </h4>
            </main>
            <aside>
              <IoChevronForwardOutline />
            </aside>
          </div>

          <div className="flex justify-between items-center h-5 w-[25vw] ">
            <main className="flex">
              <IoSettingsSharp className=" bg-slate-400 h-5 w-5 rounded-full flex items-center justify-center" />
              <h4 className="px-5">Setting & Privacy</h4>
            </main>
            <aside>
              <IoChevronForwardOutline />
            </aside>
          </div>

          <div className="flex justify-between items-center h-5 w-[25vw]">
            <main className="flex justify-start">
              <IoHelpCircleSharp className=" bg-slate-400 h-5 w-5 rounded-full flex items-center justify-center  " />
              <h4 className="px-5">Help & Support</h4>
            </main>

            <aside>
              <IoChevronForwardOutline />
            </aside>
          </div>

          <div className="flex justify-between items-center h-5  w-[25vw]">
            <main className="flex justify-start">
              <IoMoonSharp className=" bg-slate-400 h-5 w-5 rounded-full flex items-center justify-center" />
              <h4 className="px-5">Display & Accessiblity</h4>
            </main>
            <aside>
              <IoChevronForwardOutline />
            </aside>
          </div>
          <Link to="/login">
            <div className="flex justify-between items-center w-[25vw] h-5">
              <main className="flex justify-start">
                <IoLogOutOutline className=" bg-slate-400 h-5 w-5 rounded-full flex items-center justify-center" />
                <h4 className="px-5">Logout</h4>
              </main>
              <aside className="flex justify-end items-center">
                <IoChevronForwardOutline />
              </aside>
            </div>
          </Link>
        </header>
      </section>
    </div>
  );
}

export default dropdown;
