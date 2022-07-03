import React from "react";
import NavItem from "../Mini Components/Navbar/NavItem";
import SubNavItem from "../Mini Components/Navbar/SubNavItem";
import topLogo from "../../../Assets/images/logo.svg";
import arrowDown from "../../Assets/images/icon-arrow-light.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-red-400">
      <div className="logo-container">
        <img src={topLogo} alt="" className="top-logo" />
      </div>

      <div className="nav-items-container flex flex-col ">
        <div className="navigation-links-container flex flex-col">
          <NavItem navItemImage={arrowDown} navItemHeading="Product">
            <SubNavItem SubNavItemName="Overview" />
            <SubNavItem SubNavItemName="Pricing" />
            <SubNavItem SubNavItemName="Marketplace" />
            <SubNavItem SubNavItemName="Features" />
            <SubNavItem SubNavItemName="Integrations" />
          </NavItem>
          <NavItem navItemImage={arrowDown} navItemHeading="Company">
            <SubNavItem SubNavItemName="About" />
            <SubNavItem SubNavItemName="Team" />
            <SubNavItem SubNavItemName="Blog" />
            <SubNavItem SubNavItemName="Careers" />
          </NavItem>
          <NavItem navItemImage={arrowDown} navItemHeading="Connect">
            <SubNavItem SubNavItemName="Contact" />
            <SubNavItem SubNavItemName="Newsletter" />
            <SubNavItem SubNavItemName="LinkedIn" />
          </NavItem>
          {/* end of navigation-links-container div */}
        </div>
        <div className="user-login-container">
          <buton className="user-login-links" type="button">
            Login
          </buton>
          <buton className="user-login-links" type="button">
            Sign Up
          </buton>
          {/* end of user-login-container div */}
        </div>
        {/* end of nav-items-container div */}
      </div>
    </nav>
  );
}
