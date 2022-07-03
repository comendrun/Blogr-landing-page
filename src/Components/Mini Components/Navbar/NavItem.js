import React from "react";


export default function NavItem({
  children,
  navItemHeading,
  onClick,
  navItemImage,
}) {
  return (
    <div className="nav-item">
      <div onClick={onClick} className="nav-item-heading">
        <p>{navItemHeading}</p>
        <img src={navItemImage} alt="arrow-down" className="arrow-down" />
      </div>
      <div className="sub-nav-items-container flex flex-col gap-2 bg-white">
        {children}
      </div>
    </div>
  );
}
