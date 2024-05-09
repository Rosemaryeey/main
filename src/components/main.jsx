import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";




function Main(){
    return (
      <main className="flex">
        <Sidebar />
        <section className="w-[80vw]">
          <Header />

          <section className="overflow-y-auto h-[80vh]">
            <Outlet />
          </section>
          <Footer />
        </section>
      </main>
    );
}

export default Main