import React from 'react'
// import  Route from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 import { Link } from "react-router-dom";
function Home() {

  const navigate = useNavigate();

  const changelocation = () => {
    navigate("/signup")
  }

  return (
    <div className="h-full bg-gray-500  grid  content-center justify-items-center">
      <h1 className=" font-mono text-5xl text-white">WELCOME TO MY PAGE</h1>

      <section className=" space-x-2">
        <Link to="/signup">
          <button className="bg-blue-500 text-white px-5 py-2">
            Get started
          </button>
        </Link>
        <button className=" bg-white text-blue-500  px-5 py-2 ">
          Learn more
        </button>
      </section>
    </div>
  );
}

export default Home