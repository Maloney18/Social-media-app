import { useState, useEffect } from "react";
import {
  BiBlock,
  BiFingerprint,
  BiLogOut,
  BiMessage,
  BiSelection,
  BiSupport,
} from "react-icons/bi";
import { BsCameraVideo, BsShieldExclamation } from "react-icons/bs";
import { CgAddR, CgMail } from "react-icons/cg";
import {
  FaBusinessTime,
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaGuilded,
  FaSms,
  FaUserFriends,
} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import {
  IoIosSwitch,
  IoMdCall,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import { Switch } from "../../../features";
import Profile from "../../profile/profile";
import { Dropdown } from "./styledDropdown";

const DropDownMenu = ({ viewState, Navigate }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  useEffect(() => {
    calcString();
  }, []);

  useEffect(() => {
    calcHeight();
  }, [menuHeight]);

  const calcString = (string) => {
    let stringLength = string?.length;

    if (stringLength > 8) {
      return "move_to_left";
    }

    return;
  };

  const calcHeight = (e) => {
    const height = e?.offsetHeight + 25;
    setMenuHeight(height);
  };

  function DropDownItem(props) {
    return (
      <>
        <li data-desc={props.title} className="dropdown_menu_item">
          {props.leftIcon && (
            <span
              onClick={
                props?.goLeft
                  ? () => props.goToMenu && setActiveMenu(props.goToMenu)
                  : null
              }
              className="left_icon icon"
            >
              {props.leftIcon}
            </span>
          )}
          {props.img && <span className="img_cont">{props.img}</span>}
          {props.heading && (
            <p className={`heading bold tac ${calcString(props.heading)}`}>
              {props.heading}
            </p>
          )}
          {props.children}
          {props.rightIcon && (
            <span
              onClick={
                props?.goRight
                  ? () => props.goToMenu && setActiveMenu(props.goToMenu)
                  : null
              }
              className="right_icon icon"
            >
              {props.rightIcon}
            </span>
          )}
        </li>
      </>
    );
  }
  return (
    <Dropdown className={`${viewState}`} style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        onEnter={calcHeight}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <ul>
            <DropDownItem
              title={"profile"}
              img={
                <Profile profile Navigate={Navigate} img={"profile-pic.png"} />
              }
            >
              My Profile
            </DropDownItem>
            <DropDownItem title={"home"} leftIcon={<GoHome />}>
              Home
            </DropDownItem>
            <DropDownItem title={"messages"} leftIcon={<BiMessage />}>
              Messages
            </DropDownItem>
            <DropDownItem
              title={"settings"}
              leftIcon={<FaCog />}
              goRight
              rightIcon={<FaChevronRight />}
              goToMenu="settings"
            >
              Settings
            </DropDownItem>
            <DropDownItem leftIcon={<FaUserFriends />} title={"requests"}>
              Requests(249)
            </DropDownItem>
            <DropDownItem title={"create post"} leftIcon={<CgAddR />}>
              Create Post
            </DropDownItem>
            <DropDownItem title={"room"} leftIcon={<BsCameraVideo />}>
              Room
            </DropDownItem>
            <DropDownItem leftIcon={<BiFingerprint />} title={"verify account"}>
              Verify Account
            </DropDownItem>
            <DropDownItem title={"report issue"} leftIcon={<IoMdCall />}>
              Report Issue
            </DropDownItem>
          </ul>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        onEnter={calcHeight}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <ul>
            <DropDownItem
              leftIcon={<FaChevronLeft />}
              goLeft
              heading={"Settings"}
              goToMenu="main"
            />
            <DropDownItem
              leftIcon={<BiBlock />}
              rightIcon={<FaChevronRight />}
              goRight
            >
              Blocked Accounts
            </DropDownItem>
            <DropDownItem
              leftIcon={<IoMdNotificationsOutline />}
              rightIcon={<FaChevronRight />}
              goRight
              goToMenu="notifications"
            >
              Notifications
            </DropDownItem>
            <DropDownItem
              leftIcon={<BsShieldExclamation />}
              rightIcon={<FaChevronRight />}
              goRight
            >
              Privacy Policy
            </DropDownItem>
            <DropDownItem
              leftIcon={<FaBusinessTime />}
              rightIcon={<FaChevronRight />}
              goRight
            >
              Terms of Service
            </DropDownItem>
            <DropDownItem
              leftIcon={<FaGuilded />}
              rightIcon={<FaChevronRight />}
              goRight
            >
              Community Guidelines
            </DropDownItem>
            <DropDownItem
              leftIcon={<BiSupport />}
              rightIcon={<FaChevronRight />}
              goRight
            >
              Support
            </DropDownItem>
            <DropDownItem leftIcon={<BiLogOut />}>Log Out</DropDownItem>
          </ul>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "notifications"}
        onEnter={calcHeight}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <ul>
            <DropDownItem
              leftIcon={<FaChevronLeft />}
              goLeft
              heading={"Notifications"}
              goToMenu="settings"
            />
            <DropDownItem leftIcon={<BiSelection />} rightIcon={<Switch />}>
              push notification
            </DropDownItem>
            <DropDownItem
              leftIcon={<IoIosSwitch />}
              rightIcon={<FaChevronRight />}
              goRight
            >
              manage notifications
            </DropDownItem>
            <DropDownItem leftIcon={<FaSms />} rightIcon={<Switch />}>
              SMS notification
            </DropDownItem>
            <DropDownItem leftIcon={<CgMail />} rightIcon={<Switch />}>
              email notification
            </DropDownItem>
          </ul>
        </div>
      </CSSTransition>
    </Dropdown>
  );
};

export default DropDownMenu;
