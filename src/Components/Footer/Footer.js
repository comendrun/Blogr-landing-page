import React from "react";
import SubNavItem from "../Mini Components/Navbar/SubNavItem";
import NavItem from "../Mini Components/Navbar/NavItem";
import bottomLogo from "../../Assets/images/logo.svg";
import "./Footer.css";

import "../Mini Components/Navbar/NavItem.css";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between bg-black flex flex-col w-full items-center text-white gap-20 py-14">
      <div className="logo-container ">
        <img src={bottomLogo} alt="" className="bottom-logo" />
      </div>

      <div className="nav-items-container flex flex-col ">
        <div className="navigation-links-container flex flex-col gap-10 text-center">
          <NavItem navItemHeading="Product">
            <div className="flex flex-col overflow-hidden gap-5 w-10/12 m-auto p-5 text-md font-semibold rounded-md ">
              <SubNavItem SubNavItemName="Overview" />
              <SubNavItem SubNavItemName="Pricing" />
              <SubNavItem SubNavItemName="Marketplace" />
              <SubNavItem SubNavItemName="Features" />
              <SubNavItem SubNavItemName="Integrations" />
            </div>
          </NavItem>
          <NavItem navItemHeading="Company">
            <div className="flex flex-col text-slate-400">
              <SubNavItem SubNavItemName="About" />
              <SubNavItem SubNavItemName="Team" />
              <SubNavItem SubNavItemName="Blog" />
              <SubNavItem SubNavItemName="Careers" />
            </div>
          </NavItem>
          <NavItem navItemHeading="Connect">
            <div className="flex flex-col text-slate-400">
              <SubNavItem SubNavItemName="Contact" />
              <SubNavItem SubNavItemName="Newsletter" />
              <SubNavItem SubNavItemName="LinkedIn" />
            </div>
          </NavItem>
          {/* end of navigation-links-container div */}
        </div>

        {/* end of nav-items-container div */}
      </div>
    </footer>
  );
}
