import { IoIosPersonAdd } from "react-icons/io";
import Profile from "../../profile/profile";
import "./Suggestions.css";

const Suggestions = () => {
  const suggestions = [
    {
      img: "cinderella.jpeg",
      username: "Cinderella",
      msg: "Recently",
    },
    {
      img: "cynthia.jpeg",
      username: "Cynthia Morgan",
      msg: "Suggested for you",
    },
    {
      img: "patrick.jpeg",
      username: "CP Abiodun Alabi",
      msg: "Followed by Bella Cory",
    },
    {
      img: "smart.jpeg",
      username: "Smart",
      msg: "Suggested for you",
    },
    {
      img: "derick.jpeg",
      username: "Derick",
      msg: "Followed by Maloney",
    },
  ];
  return (
    <div className="suggestions">
      <div className="upper-most">
        <h2>Suggested For You</h2>
        <span className="see-all">See all</span>
      </div>

      <div className="all-suggestion">
        {suggestions?.map((suggestion) => {
          const { img, username, msg } = suggestion;
          return (
            <div key={username} className="add-new">
              <Profile img={img} />
              <div className="new-name">
                <p>{username}</p>
                <span className="time">{msg}</span>
              </div>

              <div className="add-icon">
                <IoIosPersonAdd />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Suggestions;
