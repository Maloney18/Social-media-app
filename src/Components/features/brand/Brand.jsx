import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ src }) => {
  return (
    <Link to="./">
      <div className="brand">
        <img src={src ? src : null} alt="logo" />
      </div>
    </Link>
  );
};

export default Brand;
