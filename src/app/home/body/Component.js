import React from "react";
import Trips from "./../../../components/trips/Container";
import Offices from "./../../../components/offices/Container";
import AdditionalButtons from "./../../../components/topButtons/Component";

const Body = () => {
  return (
    <div>
      <AdditionalButtons />
      <Trips />
      <Offices />
    </div>
  );
};

export default Body;
