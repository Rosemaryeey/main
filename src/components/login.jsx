import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/sun.jpg"

function login() {
  return (
    <form
      className="w-screen  flex items-center justify-center
     bg-cover h-screen  bg-[url(./assets/sun.jpg)] "
    
    >
      <section
        className="w-[35vw] h-[70vh]  border-2 border-r-transparent border-t-transparent border-b-transparent  bg-white  bg-opacity-10 rounded-md  
       flex items-center justify-between flex-col  p-7  border-l-black"
      >
        <h1 className="text-4xl  font-semibold ">LOGIN</h1>
        <div>
          <h4> USERNAME</h4>
          <input
            className="w-[25vw] h-[7vh] border-b-black border-2   border-transparent rounded-md bg-transparent
           "
            type="text"
            placeholder="enter username"
           required
          />
        </div>

        <div>
          <h4>PASSWORD</h4>
          <input
            className="w-[25vw] h-[7vh]  border-b-black border-2    border-transparent rounded-md bg-transparent
           "
            type="text"
            placeholder="......"
            required
          />
        </div>

        <Link to="/">SUBMIT</Link>
      </section>
    </form>
  );
}

export default login;
