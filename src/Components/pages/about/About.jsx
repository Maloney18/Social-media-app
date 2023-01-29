import React from "react";
import { TextBox, VideoBox } from "../../features";
import { StyledAbout } from "./styledAbout";

const About = () => {
  return (
    <StyledAbout>
      <div id="about_us" className="lNS grid">
        <VideoBox src="https://www.youtube.com/embed/QXUyE7A_7dg" />
        <TextBox
          alignPText="center"
          heading2="Learning Never Stops"
          texts="All great minds understand that learning is a continuous journey and in order to kickstart your financial trading journey, it is important that you find the right partner to guide you along the right path, this is exactly why Zedapex Academy was built. We have a team of highly experienced instructors and a community of very dedicated traders to help you become profitable and remain profitable in forex, crypto and stocks trading."
          display="none"
        />
      </div>
    </StyledAbout>
  );
};

export default About;
