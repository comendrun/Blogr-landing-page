import React from "react";

export default function SubNavItem({ SubNavItemName, link }) {
  return (
    <a href={link} className="sub-nav-item">
      {SubNavItemName}
    </a>
  );
}
