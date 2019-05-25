import React from "react";

const cutDate = date => {
  const index = date.indexOf("T");
  return date.substr(0, index);
};

const Notifications = ({ arr, handleClick }) => {
  return (
    <div
      className="w100p df pb20 mt20"
      style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
    >
      {arr &&
        arr.map(item => {
          const text = item.isApproved
            ? "Patvirtinta"
            : item.cantGo
            ? "Kelionė vyksta užimtom dienom"
            : "Nepatvirtinta";
          const style = item.isApproved
            ? "bg-success cw"
            : item.cantGo
            ? "bg-danger cw"
            : "";
          return (
            <div
              className={`b-s1-grey p30 bs-light ${style}`}
              key={`${item.tripDetailsId}`}
              style={{ width: "25%", marginTop: 20 }}
            >
              <div>
                <div className="w100p fwb fz20 tac">{text}</div>
                <div className="w100p pt20 pb20">
                  <strong>Išvyka į:</strong>{" "}
                  {item.trip.destinationOffice.country},{" "}
                  {item.trip.destinationOffice.city},{" "}
                  {item.trip.destinationOffice.streetAddress}
                </div>
                <div className="w100p pb20">
                  <strong>Išvykimo data:</strong>{" "}
                  {cutDate(item.trip.departureDate)}
                </div>
                <div className="w100p pb20">
                  <strong>Grįžimo data:</strong> {cutDate(item.trip.returnDate)}
                </div>
                <div className="w100p pb20">
                  <strong>Transporto priemonė:</strong> {item.transport}
                </div>
                <div className="w100p pb20">
                  <strong>Apgyvendinimas:</strong> {item.live}
                </div>
              </div>
              {!item.cantGo && !item.isApproved && (
                <div className="pt20">
                  <button
                    className="w100p h50 p10 fz18 bg-success bg-h-success cw fwb"
                    onClick={() =>
                      handleClick({
                        tripDetailsId: item.tripDetailsId,
                        startDate: item.trip.departureDate,
                        endDate: item.trip.departureDate
                      })
                    }
                  >
                    Patvirtinti užklausą
                  </button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Notifications;
