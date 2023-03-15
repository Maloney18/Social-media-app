import { useRef, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { BsCameraVideo } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import { BiMessageDetail } from "react-icons/bi";

import NavBar from "../navbar/navBar";
import {
  Header,
  LinkCont,
  LinkWrapper,
  MenuBar,
  MobileNavCont,
  NavCont,
} from "../navbar/styledNavBar";
import { Home } from "../../pages";
import { FaUserFriends } from "react-icons/fa";
import StartFromTop from "../../StartFromTop";

const MainContent = () => {
  const navigate = useNavigate()
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const brandRef = useRef(null);
  const deskMenuRef = useRef(null);
  const mobMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const searchField = () => {
    setIsOpen(true);
    inputRef.current.focus();
  };

  const handleDeskMenuBar = () => {
    const menu = deskMenuRef.current;

    menu.classList.toggle("hamburger");
  };

  const handleMobMenuBar = () => {
    const menu = mobMenuRef.current;

    menu.classList.toggle("hamburger");
  };

  useEffect(() => {}, [isOpen]);

  return (
    <>
      <StartFromTop />
      <NavBar>
        <Header>
          <div className="brand-name">
            <p>me</p>
            <span>
              <FaHandPointRight className="icon" />
            </span>
            <p>You</p>
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
              <LinkWrapper data-title="menu">
                {/* <span
                  data-tooltip="menu"
                  data-flow="right"
                  className="tooltip"
                /> */}
                <div className="cover">
                  <MenuBar ref={deskMenuRef} onClick={handleDeskMenuBar}>
                    <div />
                  </MenuBar>
                </div>
              </LinkWrapper>
              <LinkWrapper data-title="upload" hide>
                {/* <span
                  data-tooltip="hello"
                  data-flow="right"
                  className="tooltip"
                /> */}

                <CgAddR className="icon" />
              </LinkWrapper>

              <LinkWrapper data-title="video" hide>
                <BsCameraVideo className="icon" />
              </LinkWrapper>
              {/* <LinkWrapper data-title="friend request" hide>
                <span>5</span>
                <FaUserFriends className="icon" />
              </LinkWrapper> */}
              <LinkWrapper data-title="notification" hide>
                <span>25</span>
                <IoMdNotificationsOutline className="icon" />
              </LinkWrapper>
              <LinkWrapper hide>
                <div className="cover" onClick={() => navigate('/user-profile')}>
                  <img src={"Images/profile-pic.png"} alt="facial identifier" />
                </div>
              </LinkWrapper>
            </LinkCont>
          </NavCont>
        </Header>
        <MobileNavCont className={isOpen ? "reduce_padding" : ""}>
          <div ref={brandRef} className={isOpen ? "zoom-in" : "brand-name"}>
            <p>me</p>
            <span>
              <FaHandPointRight className="icon" />
            </span>
            <p>You</p>{" "}
          </div>
          <NavCont className={isOpen ? "reduce_padding" : ""} navTwo>
            <div className="search-area">
              <button
                className={isOpen ? "change" : null}
                ref={buttonRef}
                onClick={searchField}
              >
                <BiSearchAlt2 className="icon" />
              </button>
              <input
                className={isOpen ? "slideOpen" : null}
                ref={inputRef}
                onBlur={() => setIsOpen(false)}
                type="text"
              />
            </div>
            <LinkCont className="open">
              <LinkWrapper data-title="menu">
                <div className="cover">
                  <MenuBar ref={mobMenuRef} onClick={handleMobMenuBar}>
                    <div />
                  </MenuBar>
                </div>
              </LinkWrapper>
              <LinkWrapper data-title="upload" hide>
                <CgAddR className="icon" />
              </LinkWrapper>

              <LinkWrapper data-title="video" hide>
                <BsCameraVideo className="icon" />
              </LinkWrapper>
              <LinkWrapper data-title="friend request" hide>
                <span>40</span>
                <FaUserFriends className="icon" />
              </LinkWrapper>
              <LinkWrapper data-title="notification" hide>
                <span>125</span>
                <IoMdNotificationsOutline className="icon" />
              </LinkWrapper>
              <LinkWrapper hide>
                <img src={"Images/profile-pic.png"} alt="facial identifier" />
              </LinkWrapper>
            </LinkCont>
          </NavCont>
        </MobileNavCont>
      </NavBar>
      <Home />
    </>
  );
};

export default MainContent;
