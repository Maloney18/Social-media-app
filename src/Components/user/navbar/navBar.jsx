// no forget the menu-icon at smaller screen sizes
// check here https://react-icons.github.io/react-icons/search?q=menu to select the type of menu you want to use

import React from "react";

import { Outlet } from "react-router-dom";
import { StyledNavBar } from "./styledNavBar";

const NavBar = ({ children }) => {
  return (
    <StyledNavBar>
      <>{children}</>
      <Outlet />
    </StyledNavBar>
  );
};

export default NavBar;
