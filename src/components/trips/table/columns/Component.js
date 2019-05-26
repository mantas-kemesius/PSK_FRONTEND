import React from "react";

const Columns = ({ trip, trips, ready, isVisible, id }) => {
  if (!ready) {
    return null;
  }
  return (
    <>
      {trip.map((item, key) => {
        return <td key={`tb-column-${item}-${key}`}>{item}</td>;
      })}
      <td key="veiksmai">
        <button
          className="w100p fz16 bg-success cw fwb"
          style={{ padding: 4 }}
          onClick={() => {
            console.log(id);
          }}
        >
          Patvirtinti
        </button>
      </td>
    </>
  );
};

export default Columns;
