import React from "react";
import Notifications from "../../../components/userAvailabilitiesNotifications/Container";
import UserDetails from "../../../components/userDetails/Container";

const Body = () => {
  return (
    <div>
      <UserDetails />
      <Notifications />
    </div>
  );
};

export default Body;
