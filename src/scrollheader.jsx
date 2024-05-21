import React from "react";
import { useEffect, useState } from "react";

function scrollheader() {
  const [scrollheader, setScrollheader] = useState("static");
  useEffect(() => {
    const scrollfunc = () => {
      const scroll = window.scrollY;
      scroll > 200 ? setScrollheader("fixed") : setScrollheader("static");
    };

    window.addEventListener("scroll", scrollfunc);

    return () => window.removeEventListener("scroll", scrollfunc);
  });

  return (
    <header
      className={` h-[10vh] transition duration-500 w-screen
     flex items-center static justify-center bg-slate-500
    ${scrollheader}`}
    >
      scrollheader
    </header>
  );
}

export default scrollheader;
