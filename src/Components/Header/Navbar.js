import React, { useState } from "react";
import NavItem from "../Mini Components/Navbar/NavItem";
import SubNavItem from "../Mini Components/Navbar/SubNavItem";

import topLogo from "../../Assets/images/logo.svg";
import hamburger from "../../Assets/images/icon-hamburger.svg";
import closeNavButton from "../../Assets/images/icon-close.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProductSubItems, setIsProductSubItems] = useState(false);
  const [isCompanySubItems, setIsCompanySubItems] = useState(false);
  const [isConnectSubItems, setIsConnectSubItems] = useState(false);

  return (
    <nav className="navbar flex flex-row fixed top-0 justify-between items-center mb-auto w-full px-4 py-8 ">
      <div
        onClick={() => setIsNavOpen((preBoolean) => !preBoolean)}
        className={
          isNavOpen
            ? "overlay fixed inline w-screen h-screen bg-black opacity-20 m-auto top-0 right-0 left-0"
            : "hidden"
        }
      ></div>
      <div className="logo-container">
        <img src={topLogo} alt="" className="top-logo" />
      </div>

      <div
        onClick={() => setIsNavOpen((preBoolean) => !preBoolean)}
        className="hamburger-img-container pr-5"
      >
        <img src={isNavOpen ? closeNavButton : hamburger} alt="" className="" />
      </div>

      <div
        className={
          "nav-items-container rounded-md flex flex-col fixed top-32  left-0 right-0 text-center w-10/12 bg-white m-auto text-black py-10 gap-10  " +
          `${isNavOpen ? "active" : "not-active"}`
        }
      >
        <div className="navigation-links-container overflow-hidden flex flex-col text-black gap-10 m-auto w-full">
          <NavItem
            navItemHeading="Product"
            onClick={() => setIsProductSubItems((preBoolean) => !preBoolean)}
          >
            <div
              className={
                " flex flex-col overflow-hidden gap-5 bg-slate-200 w-10/12 m-auto p-5 text-md font-semibold rounded-md " +
                `${isProductSubItems ? "nav-open" : "collapse"}`
              }
            >
              <SubNavItem SubNavItemName="Overview" />
              <SubNavItem SubNavItemName="Pricing" />
              <SubNavItem SubNavItemName="Marketplace" />
              <SubNavItem SubNavItemName="Features" />
              <SubNavItem SubNavItemName="Integrations" />
            </div>
          </NavItem>

          <NavItem
            navItemHeading="Company"
            onClick={() => setIsCompanySubItems((preBoolean) => !preBoolean)}
          >
            <div
              className={
                " flex flex-col overflow-hidden gap-5 bg-slate-200 w-10/12 m-auto p-5 text-md font-semibold rounded-md " +
                `${isCompanySubItems ? "nav-open" : "collapse"}`
              }
            >
              <SubNavItem SubNavItemName="About" />
              <SubNavItem SubNavItemName="Team" />
              <SubNavItem SubNavItemName="Blog" />
              <SubNavItem SubNavItemName="Careers" />
            </div>
          </NavItem>

          <NavItem
            navItemHeading="Connect"
            onClick={() => setIsConnectSubItems((preBoolean) => !preBoolean)}
          >
            <div
              className={
                " flex flex-col overflow-hidden gap-5 bg-slate-200 w-10/12 m-auto p-5 text-md font-semibold rounded-md " +
                `${isConnectSubItems ? "nav-open" : "collapse"}`
              }
            >
              <SubNavItem SubNavItemName="Contact" />
              <SubNavItem SubNavItemName="Newsletter" />
              <SubNavItem SubNavItemName="LinkedIn" />
            </div>
          </NavItem>
          {/* end of navigation-links-container div */}
        </div>
        <div className="user-login-container flex flex-col border-t-2 p-5 pt-10 gap-5">
          <button className="user-login-links font-bold text-xl" type="button">
            Login
          </button>
          <button className="user-login-links font-bold text-xl" type="button">
            Sign Up
          </button>
          {/* end of user-login-container div */}
        </div>
        {/* end of nav-items-container div */}
      </div>
    </nav>
  );
}
