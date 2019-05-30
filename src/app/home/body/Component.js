import React from "react";
import Trips from "./../../../components/trips/Container";
import Offices from "./../../../components/offices/Container";
import AdditionalButtons from "./../../../components/topButtons/Component";
import TripDetailsModal from "./../../../components/tripDetailsModal/Container";
import { isAuth } from "./../../../features/user/selectors";
const Body = () => {
  return (
    <div>
      {!isAuth() && (
        <div className="bg">
          <div className="mt20 ml20 posa">
            <img
              width="120"
              src="https://media.licdn.com/dms/image/C560BAQH32zNds7mloQ/company-logo_200_200/0?e=2159024400&v=beta&t=H9s6cXo2d5cgIsBpnwD49yAXkbjmTDxqJev2C4n1BjI"
            />
          </div>
          <div className="df aic jc-center">
            <div
              className="fwb w50p tac mt20p"
              style={{ color: "#fff", fontSize: "43px" }}
            >
              Devbridge kelionių įrankis padedantis sekti ir koordinuoti
              darbuotojų logistiką tarp ofisų.
            </div>
          </div>
        </div>
      )}
      <AdditionalButtons />
      <Trips />
      <Offices />
      <TripDetailsModal />
    </div>
  );
};

export default Body;
