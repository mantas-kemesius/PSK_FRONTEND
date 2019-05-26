import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="fw600 fz24 mt15 ml30 cp">PFP</div>
    </Link>
  );
};

export default Logo;
