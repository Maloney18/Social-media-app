import React from "react";
// import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { BsCameraVideo } from "react-icons/bs";

import NavBar from "../navbar/navBar";
import {
  Header,
  LinkCont,
  LinkWrapper,
  MenuBar,
  NavCont,
} from "../navbar/styledNavBar";
import { Home } from "../../pages";

const MainContent = () => {
  return (
    <>
      <NavBar>
        <Header>
          <div className="brand-name">
            <p>brandName</p>
          </div>
          <NavCont>
            <MenuBar>
              <div />
            </MenuBar>
            <div />
            <div className="search-area">
              <button>
                <BiSearchAlt2 className="icon" />
              </button>
              <input
                type="text"
                placeholder="search for creators, inspiration and projects..."
              />
            </div>
            <LinkCont>
              <LinkWrapper>
                <CgAddR className="icon" />
              </LinkWrapper>

              <LinkWrapper>
                <BsCameraVideo className="icon" />
              </LinkWrapper>
              <LinkWrapper>
                <img src={"Images/profile-pic.png"} alt="facial identifier" />
              </LinkWrapper>
            </LinkCont>
          </NavCont>
        </Header>
      </NavBar>
      <Home />
    </>
  );
};

export default MainContent;
