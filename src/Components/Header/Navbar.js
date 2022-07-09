import React, { useState } from "react";
import NavItem from "../Mini Components/Navbar/NavItem";
import SubNavItem from "../Mini Components/Navbar/SubNavItem";

import topLogo from "../../Assets/images/logo.svg";
import hamburger from "../../Assets/images/icon-hamburger.svg";
import closeNavButton from "../../Assets/images/icon-close.svg";

export default function Navbar({showNavBG}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProductSubItems, setIsProductSubItems] = useState(false);
  const [isCompanySubItems, setIsCompanySubItems] = useState(false);
  const [isConnectSubItems, setIsConnectSubItems] = useState(false);

  return (
    <nav className="navbar flex flex-row fixed top-0 desktop: desktop:top-4 justify-between items-center desktop:items-start mb-auto desktop:mb-0 w-full desktop:w-[95vw] px-4 py-8 desktop:px-0 desktop:py-0 desktop:gap-20 ">
      <div
        onClick={() => setIsNavOpen((preBoolean) => !preBoolean)}
        className={
          isNavOpen
            ? "overlay fixed inline w-screen h-screen bg-black opacity-20 m-auto top-0 right-0 left-0"
            : "hidden"
        }
      ></div>
      <div className="logo-container desktop: desktop:py-4 desktop:pt-2 cursor-pointer flex-shrink-1">
        <a href="/">
        <img src={topLogo} alt="" className="top-logo" />
        </a>
      </div>

      <div
        onClick={() => setIsNavOpen((preBoolean) => !preBoolean)}
        className="hamburger-img-container pr-5 cursor-pointer	"
      >
        <img src={isNavOpen ? closeNavButton : hamburger} alt="" className="" />
      </div>
        <div className={`nav-overlay ${showNavBG && "show"}`}></div>
      <div
        className={
          "nav-items-container rounded-md flex flex-col desktop:flex-row fixed desktop:relative top-32 desktop:top-0  left-0 right-0 text-center w-10/12  bg-white desktop:bg-transparent m-auto text-black py-10 desktop:py-0 gap-10 desktop:gap-0 desktop:justify-start desktop:items-start desktop:w-full desktop:justify-start " +
          `${isNavOpen ? "active" : "not-active"}`
        }
      >

        <div className="navigation-links-container overflow-hidden flex flex-col desktop:flex-row text-black gap-10 desktop:gap-1 m-auto desktop:m-0 w-full desktop:w-max desktop:mr-auto ">
          <NavItem
            arrowUp={isProductSubItems}
            navItemHeading="Product"
            onClick={() => {
              setIsProductSubItems((preBoolean) => !preBoolean)
              setIsCompanySubItems(false)
              setIsConnectSubItems(false)
              }}
          >
            <div
              className={
                " flex flex-col overflow-hidden desktop:overflow-visible gap-5 bg-slate-200 desktop:bg-white w-10/12 desktop:w-full m-auto desktop:m-0 p-5 desktop:px-8 text-md desktop:items-start rounded-md " +
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
            arrowUp={isCompanySubItems}
            navItemHeading="Company"
            onClick={() => {
              setIsProductSubItems(false)
              setIsCompanySubItems((preBoolean) => !preBoolean)
              setIsConnectSubItems(false)
              }}
          >
            <div
              className={
                " flex flex-col overflow-hidden desktop:overflow-visible gap-5 bg-slate-200 desktop:bg-white w-10/12 desktop:w-full m-auto desktop:m-0 p-5 desktop:px-8 text-md desktop:items-start rounded-md " +
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
            arrowUp={isConnectSubItems}
            navItemHeading="Connect"
            onClick={() =>{
              setIsProductSubItems(false)
              setIsCompanySubItems(false)
              setIsConnectSubItems((preBoolean) => !preBoolean)
              }}
          >
            <div
              className={
                " flex flex-col overflow-hidden desktop:overflow-visible gap-5 bg-slate-200 desktop:bg-white w-10/12 desktop:w-full m-auto desktop:m-0 p-5 desktop:px-8 text-md desktop:items-start rounded-md " +
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

        <div className="user-login-container flex flex-col desktop:flex-row border-t-2 desktop:border-0 pt-10 desktop:p-0 desktop:pt-0 ">
          <button
            className="user-login-links font-bold text-xl w-max m-auto px-10 py-4 desktop:text-white desktop:hover:opacity-80"
            type="button"
          >
            Login
          </button>
          <button
            className="sign-up user-login-links font-bold text-xl text-white w-max m-auto px-10 py-4 rounded-full hover:opacity-80 desktop:bg-white desktop:hover:bg-slate-50/50 desktop:hover:text-white desktop:hover:opacity-100"
            type="button"
          >
            Sign Up
          </button>
          {/* end of user-login-container div */}
        </div>
        {/* end of nav-items-container div */}
      </div>
    </nav>
  );
}
