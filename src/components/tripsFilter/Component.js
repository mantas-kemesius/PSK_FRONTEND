import React from "react";

const activeDefaultClass = "w100p h50 p10 fz16 cw fwb bg-default";
const activeSuccessClass = "w100p h50 p10 fz16 cw fwb bg-success";
const activeDangerClass = "w100p h50 p10 fz16 cw fwb bg-danger";
const notActiveClass = "w100p h50 p10 fz16 fwb b-s1-grey";

const TripFilters = ({ activeFilter, handleClick }) => {
  return (
    <div className="w100p df jc-s-evenly tac" style={{ flexWrap: "wrap" }}>
      <div className="w30p">
        <button
          className={
            activeFilter === "ALL" ? activeDefaultClass : notActiveClass
          }
          onClick={() => handleClick("ALL")}
        >
          Visos
        </button>
      </div>
      <div className="w30p">
        <button
          className={
            activeFilter === "CONFIRMED" ? activeSuccessClass : notActiveClass
          }
          onClick={() => handleClick("CONFIRMED")}
        >
          Patvirtintos
        </button>
      </div>
      <div className="w30p">
        <button
          className={
            activeFilter === "IN_PROGRESS" ? activeDangerClass : notActiveClass
          }
          onClick={() => handleClick("IN_PROGRESS")}
        >
          Nepatvirtintos
        </button>
      </div>
    </div>
  );
};

export default TripFilters;
