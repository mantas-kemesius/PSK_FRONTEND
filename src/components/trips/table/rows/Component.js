import React from "react";
import Columns from "./../columns/Container";

const Rows = ({ ids, ready }) => {
  if (!ready) {
    return null;
  }

  return (
    <>
      {ids.map(item => (
        <tr key={`tb-row-${item}`}>
          <Columns id={item} />
        </tr>
      ))}
    </>
  );
};

export default Rows;
