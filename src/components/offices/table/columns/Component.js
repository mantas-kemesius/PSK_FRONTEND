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
          <button className="w30p bg-success bg-h-success fz15 h30 cw br5 bs-light">
            View
          </button>
          <button className="w30p bg-default bg-h-default fz15 h30 cw br5 bs-light">
            Edit
          </button>
          <button className="w30p bg-danger bg-h-danger fz15 h30 cw br5 bs-light">
            Delete
          </button>
        </div>
      </td>
    </>
  );
};

export default Columns;
