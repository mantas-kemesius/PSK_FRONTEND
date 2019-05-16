import React from "react";
import Table from "./../table/Component";

const PastTripsTable = ({ tableBody, tableHead }) => {
  return (
    <div className="df jc-center pt3p">
      <div className="w90p b-s1-grey p30 bs-light">
        <div className="pb20">
          <h1 className="fz22">Praėjusios kelionės</h1>
        </div>
        <div className="w100p">
          <Table tableBody={tableBody} tableHead={tableHead} />
        </div>
      </div>
    </div>
  );
};

export default PastTripsTable;
