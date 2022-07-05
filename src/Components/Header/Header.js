import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
  return (
    <section className="header bg-red-400 flex flex-col justify-center items-center ">
      <Navbar />
      <div className="header-body-container m-auto flex flex-col gap-y-4 justify-center items-center text-white">
        <h1 className="text-center text-4xl font-bold">A modern publishing platform</h1>
        <p className="text-center text-lg w-9/12">Grow your audience and build your online brand</p>
        <div className="header-body-link-container text-center flex gap-x-6">
          <button className="header-body-link border px-5 font-bold py-3 rounded-3xl text-white">Start for Free</button>
          <button className="header-body-link border px-5 font-bold py-3 rounded-3xl text-white">Learn More</button>
        </div>
      </div>
    </section>
  );
}
