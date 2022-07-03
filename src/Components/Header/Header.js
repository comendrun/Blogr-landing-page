import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
  return (
    <section className="header bg-orange-300">
      <Navbar />
      <div className="headre-body-container">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header-body-link-container">
          <button className="header-body-link">Start for Free</button>
          <button className="header-body-link">Learn More</button>
        </div>
      </div>
    </section>
  );
}
