import React from "react";

const Columns = ({ trip, trips, ready }) => {
  if (!ready) {
    return null;
  }
  return (
    <>
      {trip.map((item, key) => (
        <td key={`tb-column-${item}-${key}`}>{item}</td>
      ))}
      <td>
        <div className="df jc-sb">
          <button className="w45p bg-default bg-h-default h30 cw br5 bs-light">
            Edit
          </button>
          <button className="w45p bg-danger bg-h-danger h30 cw br5 bs-light">
            Delete
          </button>
        </div>
      </td>
    </>
  );
};

export default Columns;
