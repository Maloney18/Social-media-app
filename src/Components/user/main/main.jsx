import { useState } from "react";

import { Home } from "../../pages";
import StartFromTop from "../../StartFromTop";
import DeskNavBar from "../navbar/deskNavBar";
import DropDownMenu from "../navbar/DropDownMenu";
import MobNavBar from "../navbar/mobNavBar";
import NavBar from "../navbar/navBar";

const MainContent = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <StartFromTop />
      <NavBar>
        <DeskNavBar handleMenu={handleMenu} />
        <MobNavBar handleMenu={handleMenu} />
        <DropDownMenu viewState={open ? "reveal" : ""} />
      </NavBar>
      <Home />
    </>
  );
};

export default MainContent;
