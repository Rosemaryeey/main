import React from 'react'
import { NavLink } from "react-router-dom";




function sidebar() {
  return (
    <aside
      className=" h-screen grid justify-item-center 
    border-r-[1px] border-r-black w-[20vw]"
    >
      <section className="h-[10vh] border-black w-full  border-b-[1px] flex items-center justify-center " >
        <h1 className='font-bold text-2xl'>LOGO</h1>
      </section>

      <nav className=" pt-10  h-[90vh]  gap-7 grid justify-items-center content-start">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/products/shoes">Products</NavLink>
      </nav>
    </aside>
  );
}

export default sidebar