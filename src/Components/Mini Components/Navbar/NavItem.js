import React from "react";

export default function NavItem({
  children,
  navItemHeading,
  onClick,
  arrowUp,
}) {
  return (
    <div className="nav-item w-full">
      <div
        onClick={onClick}
        className="nav-item-heading mb-5 text-inherit m-auto cursor-pointer	hover:opacity-60 flex"
      >
        <p className="text-inherit font-bold text-2xl m-auto ">
          {navItemHeading}
        </p>
        <div className={`arrow-image ${arrowUp && "arrow-up"}`}></div>
      </div>
      <div className="sub-nav-items-container flex flex-col gap-2 text-xl">
        {children}
      </div>
    </div>
  );
}
