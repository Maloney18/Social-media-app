import React from "react";
import Profile from "../profile/profile";
import { StyledStatus } from "./styledStatus";

const Status = ({ profiles, sliderRef }) => {
  return (
    <StyledStatus ref={sliderRef}>
      {profiles.map((profile) => (
        <Profile
          key={profile?.id}
          img={profile?.img}
          icon={profile?.icon}
          username={profile?.username}
        />
      ))}
    </StyledStatus>
  );
};

export default Status;
