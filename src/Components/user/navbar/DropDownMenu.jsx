import { useState, useEffect } from "react";
import {
  BiBlock,
  BiFingerprint,
  BiLogOut,
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
import {
  IoIosSwitch,
  IoMdCall,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import { Switch } from "../../features";
import Profile from "../profile/profile";
import { Dropdown } from "./styledNavBar";

const DropDownMenu = ({ viewState, Navigate }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  useEffect(() => {
    calcString();
  }, []);

  const calcString = (string) => {
    let stringLength = string?.length;

    if (stringLength > 8) {
      return "move_to_left";
    }

    return;
  };

  const calcHeight = (e) => {
    const height = e.offsetHeight + 25;
    setMenuHeight(height);
  };

  function DropDownItem(props) {
    return (
      <>
        <li
          data-desc={props.title}
          className="dropdown_menu_item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          {props.leftIcon && (
            <span className="left_icon icon">{props.leftIcon}</span>
          )}
          {props.img && <span className="img_cont">{props.img}</span>}
          {props.heading && (
            <p className={`heading bold tac ${calcString(props.heading)}`}>
              {props.heading}
            </p>
          )}
          {props.children}
          {props.rightIcon && (
            <span className="right_icon icon">{props.rightIcon}</span>
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
            <DropDownItem
              title={"settings"}
              leftIcon={<FaCog />}
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
            <DropDownItem title={"video"} leftIcon={<BsCameraVideo />}>
              video
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
              heading={"Settings"}
              goToMenu="main"
            />
            <DropDownItem leftIcon={<BiBlock />} rightIcon={<FaChevronRight />}>
              Blocked Accounts
            </DropDownItem>
            <DropDownItem
              leftIcon={<IoMdNotificationsOutline />}
              rightIcon={<FaChevronRight />}
              goToMenu="notifications"
            >
              Notifications
            </DropDownItem>
            <DropDownItem
              leftIcon={<BsShieldExclamation />}
              rightIcon={<FaChevronRight />}
            >
              Privacy Policy
            </DropDownItem>
            <DropDownItem
              leftIcon={<FaBusinessTime />}
              rightIcon={<FaChevronRight />}
            >
              Terms of Service
            </DropDownItem>
            <DropDownItem
              leftIcon={<FaGuilded />}
              rightIcon={<FaChevronRight />}
            >
              Community Guidelines
            </DropDownItem>
            <DropDownItem
              leftIcon={<BiSupport />}
              rightIcon={<FaChevronRight />}
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
              heading={"Notifications"}
              goToMenu="settings"
            />
            <DropDownItem leftIcon={<BiSelection />} rightIcon={<Switch />}>
              push notification
            </DropDownItem>
            <DropDownItem
              leftIcon={<IoIosSwitch />}
              rightIcon={<FaChevronRight />}
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
