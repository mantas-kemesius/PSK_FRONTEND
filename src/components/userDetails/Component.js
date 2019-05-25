import React from "react";

const Details = ({ name, lastname, username }) => {
  return (
    <div
      className="w100p pb10 mt20 df jc-s-evenly"
      style={{ flexWrap: "wrap" }}
    >
      <div style={{ width: "15%" }} className="b-s1-grey p30 bs-light">
        <h3>
          {name} {lastname}
        </h3>{" "}
        @{username}
      </div>
      <div style={{ width: "15%" }} className="b-s1-grey p30 bs-light tac">
        <h4>Egzistuoja viso 30 kelionių</h4>
      </div>
      <div style={{ width: "15%" }} className="b-s1-grey p30 bs-light tac">
        <h4>Laukia viso 30 artėjančių kelionių</h4>
      </div>
      <div style={{ width: "15%" }} className="b-s1-grey p30 bs-light tac">
        <h4>30 kelionių negalėsite dalyvauti</h4>
      </div>
    </div>
  );
};

export default Details;
