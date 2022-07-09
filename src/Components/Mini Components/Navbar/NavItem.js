import React from "react";

export default function NavItem({
  children,
  navItemHeading,
  onClick,
  arrowUp,
}) {
  return (
    <div className="nav-item w-full ">
      <div
        onClick={onClick}
        className="nav-item-heading mb-5 desktop:mb-0 text-inherit m-auto desktop:m-0 cursor-pointer hover:opacity-60 flex desktop:w-50 desktop:justify-start "
      >
        <p className="text-inherit font-bold text-xl m-auto desktop:px-5 desktop:py-4  desktop:text-white">
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
