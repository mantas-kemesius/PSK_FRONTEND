import React from "react";

const Details = ({
  name,
  lastname,
  username,
  total,
  pending,
  going,
  cantGo
}) => {
  return (
    <div
      className="w100p pb10 mt20 df jc-s-evenly"
      style={{ flexWrap: "wrap" }}
    >
      <div style={{ width: "10%" }} className="b-s1-grey p30 tac bs-light">
        <h3>
          {name} {lastname}
        </h3>{" "}
        @{username}
      </div>
      <div style={{ width: "10%" }} className="b-s1-grey p30 bs-light tac">
        <div>
          <h4>Viso kelionių:</h4>
        </div>
        <div style={{ marginTop: 5 }}>
          <h2>{total}</h2>
        </div>
      </div>
      <div style={{ width: "10%" }} className="b-s1-grey p30 bs-light tac">
        <div>
          <h4>Artėjančių:</h4>
        </div>
        <div style={{ marginTop: 5 }}>
          <h2>{going}</h2>
        </div>
      </div>
      <div style={{ width: "10%" }} className="b-s1-grey p30 bs-light tac">
        <div>
          <h4>Nepatvirtintų:</h4>
        </div>
        <div style={{ marginTop: 5 }}>
          <h2>{pending}</h2>
        </div>
      </div>
      <div style={{ width: "10%" }} className="b-s1-grey p30 bs-light tac">
        <div>
          <h4>Užimtu laiku:</h4>
        </div>
        <div style={{ marginTop: 5 }}>
          <h2>{cantGo}</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
