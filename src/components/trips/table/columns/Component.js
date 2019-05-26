import React from "react";

const activeClassName = "w100p fz16 bg-success cw fwb";
const notActiveClassName = "w100p fz16 fwb b-s1-grey";

const Columns = ({
  trip,
  trips,
  ready,
  isVisible,
  id,
  isButtonActive,
  isConfirmed
}) => {
  if (!ready) {
    return null;
  }
  return (
    <>
      {trip.map((item, key) => {
        return <td key={`tb-column-${item}-${key}`}>{item}</td>;
      })}
      <td key="veiksmai">
        {!isConfirmed ? (
          <button
            className={isButtonActive ? activeClassName : notActiveClassName}
            style={
              !isButtonActive
                ? { color: "#f1f1f1", padding: 4 }
                : { padding: 4 }
            }
            disabled={!isButtonActive}
            onClick={() => {
              console.log(id);
            }}
          >
            Patvirtinti
          </button>
        ) : (
          <div className="fz20 fwb">-</div>
        )}
      </td>
    </>
  );
};

export default Columns;
