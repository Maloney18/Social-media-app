import { useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { FaHandPointRight, FaUserFriends } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LinkCont, LinkWrapper, MenuBar, NavCont } from "../styledNavBar";
import { MobileNavCont } from "./styledMobile";

const MobNavBar = ({ handleMenu, Navigate }) => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const brandRef = useRef(null);
  const mobMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const searchField = () => {
    setIsOpen(true);
    inputRef.current.focus();
  };

  const handleMobMenuBar = () => {
    const menu = mobMenuRef.current;

    menu.classList.toggle("hamburger");
  };

  useEffect(() => {}, [isOpen]);

  return (
    <>
      <MobileNavCont className={isOpen ? "reduce_padding" : ""}>
        <div ref={brandRef} className={isOpen ? "zoom-in" : "brand-name"}>
          <p>me</p>
          <span>
            <FaHandPointRight className="icon" />
          </span>
          <p>You</p>
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
          <LinkCont>
            <LinkWrapper data-title="menu">
              <div onClick={handleMobMenuBar} className="cover">
                <MenuBar onClick={handleMenu} ref={mobMenuRef}>
                  <div />
                </MenuBar>
              </div>
            </LinkWrapper>
            <LinkWrapper data-title="create post" hide>
              <CgAddR className="icon" />
            </LinkWrapper>

            <LinkWrapper data-title="video" hide>
              <BsCameraVideo className="icon" />
            </LinkWrapper>
            <LinkWrapper data-title="requests" hide>
              <span>40</span>
              <FaUserFriends className="icon" />
            </LinkWrapper>
            <LinkWrapper data-title="notification" hide>
              <span>125</span>
              <IoMdNotificationsOutline className="icon" />
            </LinkWrapper>
            <LinkWrapper hide>
              <img
                src={"Images/profile-pic.png"}
                onClick={() => Navigate("/user-profile")}
                alt="facial identifier"
              />
            </LinkWrapper>
          </LinkCont>
        </NavCont>
      </MobileNavCont>
    </>
  );
};

export default MobNavBar;
