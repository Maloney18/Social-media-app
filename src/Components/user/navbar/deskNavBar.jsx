import { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { FaHandPointRight } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  Header,
  LinkCont,
  LinkWrapper,
  MenuBar,
  NavCont,
} from "./styledNavBar";

const DeskNavBar = ({ handleMenu }) => {
  const deskMenuRef = useRef(null);

  const handleDeskMenuBar = () => {
    const menu = deskMenuRef.current;

    menu.classList.toggle("hamburger");
    handleMenu();
  };

  return (
    <>
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
          <LinkCont className="">
            <LinkWrapper data-title="menu">
              {/* <span
                  data-tooltip="menu"
                  data-flow="right"
                  className="tooltip"
                /> */}
              <div onClick={handleDeskMenuBar} className="cover">
                <MenuBar ref={deskMenuRef}>
                  <div />
                </MenuBar>
              </div>
            </LinkWrapper>
            <LinkWrapper data-title="create post" hide>
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
            <LinkWrapper data-title="notification" hide>
              <span>25</span>
              <IoMdNotificationsOutline className="icon" />
            </LinkWrapper>
            <LinkWrapper data-title="profile" hide>
              <div className="cover">
                <img src={"Images/profile-pic.png"} alt="avater" />
              </div>
            </LinkWrapper>
          </LinkCont>
        </NavCont>
      </Header>
    </>
  );
};

export default DeskNavBar;
