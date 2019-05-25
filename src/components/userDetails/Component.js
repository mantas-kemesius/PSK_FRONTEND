import React from "react";

const Details = ({ name, lastname, username }) => {
  return (
    <div className="w100p pb10 mt20 df p10 jc-s-evenly">
      <div style={{ width: "20%" }} className="b-s1-grey p30 bs-light">
        <h3>
          {name} {lastname}
        </h3>{" "}
        @{username}
      </div>
      <div
        style={{ marginLeft: "20px", width: "20%" }}
        className="b-s1-grey p30 bs-light"
      >
        <h4>Laukia viso 30 artėjančių kelionių</h4>
      </div>
      <div
        style={{ marginLeft: "20px", width: "20%" }}
        className="b-s1-grey p30 bs-light"
      >
        <h4>30 kelionių negalėsite dalyvauti</h4>
      </div>
    </div>
  );
};

export default Details;
