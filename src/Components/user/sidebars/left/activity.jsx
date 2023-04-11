import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import Profile from "../../profile/profile";
import { StyledActivity } from "./styledActivity";

const Activity = () => {
  const suggestions = [
    {
      img: "cinderella.jpeg",
      username: "Cinderella",
      msg: "started following you",
      timeStamp: "2h",
      icon: <IoIosPersonAdd />,
    },
    {
      img: "cynthia.jpeg",
      username: "Cynthia Morgan",
      msg: "liked your photo",
      timeStamp: "1h",
      postImg: "facts.jpg",
    },
    {
      img: "patrick.jpeg",
      username: "CP Abiodun Alabi",
      msg: "started following you",
      timeStamp: "3m",
      icon: <IoIosPersonAdd />,
    },
    {
      img: "smart.jpeg",
      username: "Smart",
      msg: "liked your photo",
      timeStamp: "2m",
      postImg: "profile-pic.png",
    },
    {
      img: "derick.jpeg",
      username: "Derick",
      msg: "Started following you",
      timeStamp: "1m",
      icon: <IoIosPersonAdd />,
    },
  ];
  return (
    <StyledActivity>
      <div className="upper-most">
        <h2>activity</h2>
        <span className="see-all">See all</span>
      </div>
      <div className="heading">
        <h3>stories about you</h3>
      </div>
      <div className="mentions">
        <div className="mention">
          <Profile img={"default-user.png"} />
          <div className="texts">
            <p className="bold">mentions</p>
            <span className="msg">Two stories mention you</span>
          </div>
        </div>
      </div>
      <div className="heading">
        <h3>New</h3>
      </div>

      <div className="all-suggestion">
        {suggestions?.map((suggestion) => {
          const { img, username, msg, timeStamp, icon, postImg } = suggestion;
          return (
            <div key={username} className="add-new">
              <Profile img={img} />
              <div className="new-name">
                <p>{username}</p>
                <span>{msg}</span>&nbsp;
                <span className="time">{timeStamp}.</span>
              </div>

              {icon ? (
                <div className="add-icon">{icon}</div>
              ) : (
                <div className="image">
                  <img src={`Images/${postImg}`} alt="postImg" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </StyledActivity>
  );
};

export default Activity;
