import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "./../../features/user/selectors";

const AdditionalButtons = () => {
  if (!isAuth()) {
    return null;
  }
  return (
    <div className="df jc-center pt3p">
      <div className="w90p b-s1-grey p30 bs-light df">
        <div className="h100p fz20 mr20 fwb pt10">Papildomos funkcijos: </div>
        <div className="mr20">
          <Link to="/stats">
            <button className="w100p h50 p10 fz16 fwb b-s1-grey">
              Statistika
            </button>
          </Link>
        </div>
        <div className="mr20">
          <Link to="/register">
            <button className="w100p h50 p10 fz16 fwb b-s1-grey">
              Pridėti vartotoją
            </button>
          </Link>
        </div>
        <div>
          <Link to="/changePassword">
            <button className="w100p h50 p10 fz16 fwb b-s1-grey">
              Keisti slaptažodį
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdditionalButtons;
