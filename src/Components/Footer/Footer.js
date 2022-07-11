import React from "react";
import SubNavItem from "../Mini Components/Navbar/SubNavItem";
import NavItem from "../Mini Components/Navbar/NavItem";
import bottomLogo from "../../Assets/images/logo.svg";
import "./Footer.css";

import "../Mini Components/Navbar/NavItem.css";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between bg-black flex flex-col w-full items-center text-white gap-20 py-14 desktop:flex-row desktop:justify-evenly desktop:items-start">
      <div className="logo-container ">
        <img src={bottomLogo} alt="" className="bottom-logo" />
      </div>

      <div className="nav-items-container flex flex-col  desktop:gap-20  desktop:w-[60%] desktop:justify-center desktop:items-evenly">
        <div className="navigation-links-container flex flex-col gap-10 text-center desktop:flex-row desktop:text-left ">
          <div className="desktop: desktop:text-left desktop:m-0 desktop:w-[30%] desktop:">
            <NavItem navItemHeading="Product">
              <div className="flex flex-col gap-2 desktop:gap-5 m-auto p-5 desktop:font-semibold text-slate-400  w-[100%] desktop:p-0 desktop:py-5">
                <SubNavItem SubNavItemName="Overview" />
                <SubNavItem SubNavItemName="Pricing" />
                <SubNavItem SubNavItemName="Marketplace" />
                <SubNavItem SubNavItemName="Features" />
                <SubNavItem SubNavItemName="Integrations" />
              </div>
            </NavItem>
          </div>
          <div className="desktop: desktop:text-left desktop:m-0 desktop:w-[30%] desktop:gap-">
            <NavItem navItemHeading="Company">
              <div className="flex flex-col gap-2 desktop:gap-5 m-auto p-5 desktop:font-semibold text-slate-400  w-[100%] desktop:p-0 desktop:py-5">
                <SubNavItem SubNavItemName="About" />
                <SubNavItem SubNavItemName="Team" />
                <SubNavItem SubNavItemName="Blog" />
                <SubNavItem SubNavItemName="Careers" />
              </div>
            </NavItem>
          </div>
          <div className="desktop: desktop:text-left desktop:m-0 desktop:w-[30%] desktop:gap-">
            <NavItem navItemHeading="Connect">
              <div className="flex flex-col gap-2 desktop:gap-5 m-auto p-5 desktop:font-semibold text-slate-400  w-[100%] desktop:p-0 desktop:py-5">
                <SubNavItem SubNavItemName="Contact" />
                <SubNavItem SubNavItemName="Newsletter" />
                <SubNavItem SubNavItemName="LinkedIn" />
              </div>
            </NavItem>
          </div>
          {/* end of navigation-links-container div */}
        </div>

        {/* end of nav-items-container div */}
      </div>
    </footer>
  );
}
