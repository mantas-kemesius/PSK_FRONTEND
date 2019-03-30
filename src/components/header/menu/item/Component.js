import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, link }) => {
  return (
    <div className="ml30 fw600 cp fz16">
      <Link to={link}>{title}</Link>
    </div>
  );
};

export default MenuItem;
