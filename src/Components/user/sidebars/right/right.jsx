import Messages from "./messages";
import { StyledRightSideBar } from "./styledRight";
import Suggestions from "./suggestions";

const RightSideBar = () => {
  return (
    <StyledRightSideBar>
      <div className="wrapper grid">
        <div className="item">
          <Messages />
        </div>
        <div className="item">
          <Suggestions />
        </div>
      </div>
    </StyledRightSideBar>
  );
};

export default RightSideBar;
