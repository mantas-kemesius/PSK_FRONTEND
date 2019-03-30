import React from "react";
import FutureTripsTable from "./../../../components/futureTrips/Container";
import PastTripsTable from "./../../../components/pastTrips/Container";

const Body = () => {
  return (
    <>
      <FutureTripsTable />
      <PastTripsTable />
    </>
  );
};

export default Body;
