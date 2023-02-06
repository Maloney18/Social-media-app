import React from "react";
// import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { BsCameraVideo } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";

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
            <LinkCont className="open">
              <LinkWrapper title="menu">
                <MenuBar>
                  <div />
                </MenuBar>
              </LinkWrapper>
              <LinkWrapper hide>
                <CgAddR className="icon" />
              </LinkWrapper>

              <LinkWrapper hide>
                <BsCameraVideo className="icon" />
              </LinkWrapper>
              <LinkWrapper hide>
                <BiMessageDetail className="icon" />
              </LinkWrapper>
              <LinkWrapper hide>
                <IoMdNotificationsOutline className="icon" />
              </LinkWrapper>
              <LinkWrapper hide>
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
