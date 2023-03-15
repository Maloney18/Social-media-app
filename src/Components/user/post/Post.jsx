import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

const Post = () => {
  return (
    <>
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
          <img src="Images/facts.jpg" alt="facts" />
        </div>
        <div className="icons_wrapper">
          <div className="left-icons">
            <AiFillLike className="icon" />
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
                <img src="Images/elon-musk.jpg" alt="avater" />
              </div>
              <div className="img-wrapper">
                <img src="Images/profile-2.jpg" alt="avater" />
              </div>
              <div className="img-wrapper">
                <img src="Images/profile-3.jpg" alt="avater" />
              </div>
            </div>
            <div className="text_cont">
              <span>
                Liked by <span className="bold">Big Fame</span> and{" "}
                <span className="bold">1,993 others</span>
              </span>
            </div>
          </div>
          <p>
            We know the voices in our heads aren't real, but sometimes their
            ideas are just too good to ignore.
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
