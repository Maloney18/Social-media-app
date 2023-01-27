import React from "react";

const VideoBox = ({ src }) => {
  return (
    <div className="videoBox">
      {/* <video src={src}></video> */}
      <iframe
        width="100%"
        height="301"
        src={src}
        title="INTRODUCING ZEDAPEX TRADING INSTITUTION"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBox;
