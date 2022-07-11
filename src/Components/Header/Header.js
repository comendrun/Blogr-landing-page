import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(null);
  const [showNavBG, setShowNavBG] = useState(false);
  const header = useRef();

  // console.log(showNavBG)

  function scrollingValue() {
    const scroll = document.documentElement.scrollTop;
    if (scroll > headerHeight - 200) {
      setShowNavBG(true);
    } else {
      setShowNavBG(false);
    }
  }

  window.addEventListener("scroll", scrollingValue);

  useEffect(() => {
    setHeaderHeight(header.current?.clientHeight);
  }, [header]);
  return (
    <section
      ref={header}
      className="header flex flex-col justify-center items-center py-32 desktop:py-0"
    >
      <Navbar showNavBG={showNavBG} />
      <div className="header-body-container m-auto flex flex-col gap-y-10 justify-center items-center text-white desktop:w-full ">
        <h1 className="text-center text-4xl font-bold px-8 max-w-md desktop:max-w-full desktop:text-7xl">
          A modern publishing platform
        </h1>
        <p className="text-center text-lg w-9/12 max-w-md desktop:max-w-full desktop:text-2xl">
          Grow your audience and build your online brand
        </p>
        <div className="header-body-link-container text-center flex gap-x-4 desktop:gap-x-18 max-w-md	">
          <button className="header-body-link white border px-5 font-bold py-3 rounded-3xl text-transparent	 bg-white">
            Start for Free
          </button>
          <button className="header-body-link border px-5 font-bold py-3 rounded-3xl text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
