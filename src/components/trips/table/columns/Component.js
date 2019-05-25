import React from "react";

const Columns = ({ trip, trips, ready, isVisible }) => {
  if (!isVisible) {
    return null;
  }
  if (!ready) {
    return null;
  }
  return (
    <>
      {trip.map((item, key) => (
        <td key={`tb-column-${item}-${key}`}>{item}</td>
      ))}
    </>
  );
};

export default Columns;
