import React from "react";

export default function NavItem({ children, navItemHeading, onClick }) {
  return (
    <div className="nav-item w-full">
      <div
        onClick={onClick}
        className="nav-item-heading mb-5 text-inherit w-4/12 m-auto "
      >
        <p className="text-inherit font-bold text-2xl text-center w-max m-auto ">
          {navItemHeading}
        </p>
      </div>
      <div className="sub-nav-items-container flex flex-col gap-2 text-xl">
        {children}
      </div>
    </div>
  );
}
