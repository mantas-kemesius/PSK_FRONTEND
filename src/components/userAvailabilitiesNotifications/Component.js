import React from "react";

const Notifications = ({ arr, handleClick }) => {
  return (
    <div
      className="w100p df pb20 mt20 p10"
      style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
    >
      {arr &&
        arr.map(item => {
          const text = item.isApproved ? "Patvirtinta" : "Nepatvirtinta";
          const style = item.isApproved ? "bg-success cw" : "bg-danger cw";
          return (
            <div
              className={`cp b-s1-grey p30 bs-light ${style}`}
              key={`${item.tripDetailsId}`}
              style={{ width: "26%", marginTop: 20 }}
            >
              <div>
                <div className="w100p pb20">
                  <strong>Išvyka į:</strong>{" "}
                  {item.trip.destinationOffice.country},{" "}
                  {item.trip.destinationOffice.city},{" "}
                  {item.trip.destinationOffice.streetAddress}
                </div>
                <div className="w100p pb20">
                  <strong>Išvykimo data:</strong> {item.trip.departureDate}
                </div>
                <div className="w100p pb20">
                  <strong>Grįžimo data:</strong> {item.trip.returnDate}
                </div>
                <div className="w100p fwb fz20">{text}</div>
              </div>
              <div className="pt20">
                <button
                  className="w100p h50 p10 fz18 bg-success bg-h-success cw fwb"
                  onClick={() => handleClick(item.tripDetailsId)}
                >
                  Patvirtinti užklausą
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Notifications;
