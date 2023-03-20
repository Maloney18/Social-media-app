import Messages from "./messages";
import Suggestions from "./suggestions";
import "./right.css";

const Right = () => {
  return (
    <aside className="right">
      <Messages />
      <Suggestions />
    </aside>
  );
};

export default Right;
