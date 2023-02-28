import React from "react";

const Status = ({ profiles }) => {
  // console.log(profiles.length);
  // console.log(currentSlide);
  return (
    <>
      {profiles.map((profile) => (
        <div
          // style={{ transform: `translateX(${currentSlide * -100}%)` }}
          key={profile?.id}
          className="profile"
        >
          <div className="img_wrapper">
            <img src={`Images/${profile?.img}`} alt="avater" />
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
