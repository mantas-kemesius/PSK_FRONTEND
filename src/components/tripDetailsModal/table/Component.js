import React from "react";
import Rows from "./rows/Container";

const TripsTable = ({ tableHead }) => {
  return (
    <table className="table w100p">
      <thead>
        <tr>
          {tableHead.map((item, key) => (
            <th scope="col" key={key}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </table>
  );
};

export default TripsTable;
