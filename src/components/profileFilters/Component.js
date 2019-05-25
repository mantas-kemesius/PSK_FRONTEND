import React from "react";

const activeClass = "w100p h50 p10 fz16 cw fwb bg-default";
const notActiveClass = "w100p h50 p10 fz16 fwb b-s1-grey";

const ProfileFilters = ({ activeFilter, handleClick }) => {
  return (
    <div
      className="w100p df jc-s-evenly tac"
      style={{ paddingTop: "30px", flexWrap: "wrap" }}
    >
      <div className="w20p">
        <button
          className={activeFilter === "ALL" ? activeClass : notActiveClass}
          onClick={() => handleClick("ALL")}
        >
          Rodyti visus
        </button>
      </div>
      <div className="w20p">
        <button
          className={activeFilter === "PENDING" ? activeClass : notActiveClass}
          onClick={() => handleClick("PENDING")}
        >
          Rodyti nepatvirtintus
        </button>
      </div>
      <div className="w20p">
        <button
          className={activeFilter === "ACTIVE" ? activeClass : notActiveClass}
          onClick={() => handleClick("ACTIVE")}
        >
          Rodyti patvirtintus
        </button>
      </div>
      <div className="w20p">
        <button
          className={
            activeFilter === "NOT_RELAVANT" ? activeClass : notActiveClass
          }
          onClick={() => handleClick("NOT_RELAVANT")}
        >
          Rodyti neaktualius
        </button>
      </div>
    </div>
  );
};

export default ProfileFilters;
