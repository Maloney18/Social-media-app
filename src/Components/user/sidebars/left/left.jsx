// abeg i go dey do this part later, na this early morning i push the update. Na today i dey go back to school. I don late like this seff
// no vex

import Activity from "./activity";
import Explore from "./explore";
import { StyledLeftSideBar } from "./styledLeft";

const LeftSideBar = () => {
  return (
    <StyledLeftSideBar>
      <div className="wrapper grid">
        <div className="item">
          <Activity />
        </div>
        <div className="item">
          <Explore />
        </div>
      </div>
    </StyledLeftSideBar>
  );
};

export default LeftSideBar;
