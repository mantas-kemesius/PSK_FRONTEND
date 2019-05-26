import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, link, className }) => {
  return (
    <Link to={link} className="h100p">
      <div
        className={`pt20 h40 ${className}`}
        style={{ paddingRight: 20, paddingLeft: 20 }}
      >
        <div className="fw600 cp fz16">{title}</div>
      </div>
    </Link>
  );
};

export default MenuItem;
