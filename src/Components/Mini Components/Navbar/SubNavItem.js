import React from "react";

export default function SubNavItem({ SubNavItemName, link }) {
  return (
    <a href={link} className="sub-nav-item cursor-pointer	opacity-70 hover:opacity-100 ">
      {SubNavItemName}
    </a>
  );
}
