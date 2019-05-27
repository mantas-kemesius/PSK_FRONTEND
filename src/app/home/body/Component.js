import React from "react";
import Trips from "./../../../components/trips/Container";
import Offices from "./../../../components/offices/Container";
import AdditionalButtons from "./../../../components/topButtons/Component";
import TripDetailsModal from "./../../../components/tripDetailsModal/Container";

const Body = () => {
  return (
    <div>
      <AdditionalButtons />
      <Trips />
      <Offices />
      <TripDetailsModal />
    </div>
  );
};

export default Body;
