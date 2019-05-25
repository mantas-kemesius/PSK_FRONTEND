import React from "react";
import Table from "./table/Container";

const FutureTripsTable = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="df jc-center pt3p">
      <div className="w90p b-s1-grey p30 bs-light">
        <div className="pb20">
          <div className="df jc-sb">
            <div className="w100p">
              <h1 className="fz22">Biurai</h1>
            </div>
          </div>
        </div>
        <div className="w100p">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default FutureTripsTable;
