import React from "react";

const activeClassName = "w100p fz16 bg-success cw fwb";
const activeClassNameo = "w100p fz16 bg-default cw fwb";
const notActiveClassName = "w100p fz16 fwb b-s1-grey";

const Columns = ({
  trip,
  trips,
  ready,
  isVisible,
  id,
  isButtonActive,
  isConfirmed,
  handleClick,
  view
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
        <button
          className={activeClassNameo}
          style={{ padding: 4 }}
          onClick={() => view(id)}
        >
          Peržiūrėti
        </button>
        {!isConfirmed ? (
          <button
            className={isButtonActive ? activeClassName : notActiveClassName}
            style={
              !isButtonActive
                ? { color: "#f1f1f1", padding: 4 }
                : { padding: 4 }
            }
            disabled={!isButtonActive}
            onClick={() => handleClick(id)}
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
