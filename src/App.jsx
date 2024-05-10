import React from "react";
import "./App.css";
import Counter from "./counter";
import Scrollheader from "./scrollheader";

function App() {
  return (
    <main className="h-[200vh]">
      <Scrollheader />
      <Counter />
    </main>
  );
}

export default App;
