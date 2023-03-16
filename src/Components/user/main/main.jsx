import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Home } from "../../pages";
import StartFromTop from "../../StartFromTop";
import DeskNavBar from "../navbar/deskNavBar";
import DropDownMenu from "../navbar/DropDownMenu";
import MobNavBar from "../navbar/mobNavBar";
import NavBar from "../navbar/navBar";

const MainContent = () => {
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <StartFromTop />
      <NavBar>
        <DeskNavBar Navigate={Navigate} handleMenu={handleMenu} />
        <MobNavBar Navigate={Navigate} handleMenu={handleMenu} />
        <DropDownMenu Navigate={Navigate} viewState={open ? "reveal" : ""} />
      </NavBar>
      <Home />
    </>
  );
};

export default MainContent;
