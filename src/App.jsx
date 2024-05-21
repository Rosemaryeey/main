import React from "react";
import "./App.css";
// import Counter from "./counter";
import Scrollheader from "./scrollheader";
import Recipe  from "./Recipe";
// import Promise from "./promise";
// import Another from "./another";
// import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <main className="h-[200vh]">
      <Scrollheader />
      {/* <Routes>
        <Route path="/" element={<Promise />} />
        <Route path="/:Another" element={<Another/>} />
      </Routes> */}
      {/* <Counter /> */}
      <Recipe />
    </main>
  );
}

export default App;
