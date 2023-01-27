import React from "react";
// import { Link } from "react-router-dom";
import NavBar from "../navbar/navBar";
import {
  Header,
  LinkCont,
  LinkWrapper,
  MenuBar,
  NavCont,
} from "../navbar/styledNavBar";

const MainContent = () => {
  return (
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
            <button>search</button>
            <input
              type="text"
              placeholder="search for creators, inspiration and projects..."
            />
          </div>
          <LinkCont>
            <LinkWrapper>add</LinkWrapper>

            <LinkWrapper>video</LinkWrapper>
            <LinkWrapper>profile pics </LinkWrapper>
          </LinkCont>
        </NavCont>
      </Header>
    </NavBar>
  );
};

export default MainContent;
