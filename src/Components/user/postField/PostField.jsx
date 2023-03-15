import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { VscReactions } from "react-icons/vsc";
import { StyledPostField } from "./styledPostField";

const PostField = () => {
  return (
    <StyledPostField>
      <div className="combine">
        <div className="img_wrapper">
          <img src="Images/profile-pic.png" alt="" />
        </div>
        <div className="input_cont">
          <input type="text" name="" placeholder="Let out your mind" />
        </div>
      </div>
      <div className="actions_cont">
        <div className="icons_cont">
          <div className="icon_wrapper">
            <BsCameraVideo className="icon" />
            <span className="desc">live</span>
          </div>
          <div className="icon_wrapper">
            <MdOutlineInsertPhoto className="icon" />
            <span className="desc">photo</span>
          </div>
          <div className="icon_wrapper">
            <VscReactions className="icon" />

            <span className="desc">feeling</span>
          </div>
        </div>
        <button className="btn">post</button>
      </div>
    </StyledPostField>
  );
};

export default PostField;
