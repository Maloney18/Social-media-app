import React from "react";
import { Section } from "../../features/container";
import { StyledHome } from "./styledHome";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  return (
    <StyledHome>
      <Section>
        <div className="grid">
          <div className="wrapper grid">
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="wrapper grid">
            <div className="item">
              <span className="prev">&#10094;</span>
              <span className="next">&#10095;</span>

              <div className="inner-wrapper">
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="Images/profile-pic.png" alt="" />
                  </div>
                  <div className="text tac">
                    <p>My story</p>
                  </div>
                  <span className="add">
                    <AiOutlinePlus className="icon" />
                  </span>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="Images/profile-pic.png" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Your story</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="wrapper grid">
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
      </Section>
    </StyledHome>
  );
};

export default Home;
