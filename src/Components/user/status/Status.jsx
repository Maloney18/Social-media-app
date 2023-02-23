import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Status = () => {
  const profiles = [
    {
      img: ["profile-pic.png"],
      usernanme: "Your story",
      icon: <AiOutlinePlus className="icon" />,
    },
    {
      img: ["profile-3.jpg"],
      usernanme: "Jackson Juliana",
    },
    {
      img: ["profile-2.jpg"],
      usernanme: "Bella Cory",
    },
    {
      img: ["elon-musk.jpg"],
      usernanme: "Elon Musk",
    },
    {
      img: ["profile-pic.png"],
      usernanme: "Your story",
    },

    {
      img: ["profile-pic.png"],
      usernanme: "Your story",
    },

    {
      img: ["profile-pic.png"],
      usernanme: "Your story",
    },
    {
      img: ["profile-pic.png"],
      usernanme: "Your story",
    },
  ];

  return (
    <>
      {profiles.map((profile, item) => (
        <div key={item} className="profile">
          <div className="img_wrapper">
            <img src={`Images/${profile?.img}`} alt="status" />
          </div>
          <div className="text tac">
            <p>{profile?.usernanme}</p>
          </div>
          {profile?.icon ? <span className="add">{profile?.icon}</span> : null}
        </div>
      ))}
    </>
  );
};

export default Status;
