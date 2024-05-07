import React from "react";
import { useState } from "react";
import { FaReglightbulb, FaLightbulb } from "react-icons/fa";

function Bulb() {
  const [toggleBulb, setToggleBulb] = useState(false);

  const ONBulb = () => {
    setToggleBulb(true);
  };

  const OFFBulb = () => {
    setToggleBulb(false);
  };

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-3">
      <section className="text-5xl">
        {toggleBulb && <FaLightbulb />}
        {toggleBulb && <FaRegLightbulb />}

        {/* {toggleBulb ? <FaLightbulb /> : <FaRegLightbulb /> } */}
      </section>
      <button
        className=" p-3 bg-slate-400 text-xl hover:bg-slate-600 "
        onClick={ONBulb}
      >
        ON
      </button>
      <button
        className=" p-3 bg-slate-400 text-xl hover:bg-slate-600 "
        onClick={OFFBulb}
      >
        OFF
      </button>
    </section>
  );
}
export default Bulb;
 