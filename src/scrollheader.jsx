import React from "react";
import { useEffect, useState } from "react";

function scrollheader() {
  const [Scrollheader, setScrollheader] = useState("");
  useEffect(() => {
    console.log(window.scrolly);
  });
  return (
    <header className="flex items-center justify-center bg-slate-500">
      scrollheader
    </header>
  );
}

export default scrollheader;
