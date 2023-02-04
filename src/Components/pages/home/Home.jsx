import React from "react";
import { Section } from "../../features/container";
import { StyledHome } from "./styledHome";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { SlLike } from "react-icons/sl";

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
                    <p>Your story {/* &rarr; */}</p>
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
                    <p>Username</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Username</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Username</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Username</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Username</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Username</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Username</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="img_wrapper">
                    <img src="" alt="" />
                  </div>
                  <div className="text tac">
                    <p>Username</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="profile">
                <div className="img_wrapper">
                  <img src="Images/profile-pic.png" alt="" />
                </div>
                <div className="text tac">
                  <p>username</p>
                  <p>location</p>
                </div>
                <BsThreeDots className="icon" />
              </div>
              <div className="post">
                <div className="img-wrapper">
                  <img src="Images/facts.jpg" alt="" />
                </div>
                <div className="icons_wrapper">
                  <div className="left-icons">
                    <SlLike className="icon" />
                    <FaRegComment className="icon" />
                    <BiShareAlt className="icon" />
                  </div>
                  <div className="right_icons">
                    <BsBookmark className="icon" />
                  </div>
                </div>
                <div className="engagements">
                  <div className="items_wrapper">
                    <div className="img_cont">
                      <div className="img-wrapper">
                        <img src="Images/elon-musk.jpg" alt="" />
                      </div>
                      <div className="img-wrapper">
                        <img src="Images/profile-2.jpg" alt="" />
                      </div>
                      <div className="img-wrapper">
                        <img src="Images/profile-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="text_cont">
                      <span>
                        Liked by <span className="bold">Big Fame</span> and{" "}
                        <span className="bold">1,993 others</span>{" "}
                      </span>
                    </div>
                  </div>
                  <p>
                    We know the voices in our heads aren't real, but sometimes
                    their ideas are just too good to ignore.
                  </p>
                </div>
              </div>
            </div>
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
