import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, link }) => {
  return (
    <Link to={link}>
      <div className="ml30 fw600 cp fz16">{title}</div>
    </Link>
  );
};

export default MenuItem;
