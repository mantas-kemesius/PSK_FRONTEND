import React from "react";
import Notifications from "../../../components/userAvailabilitiesNotifications/Container";
import UserDetails from "../../../components/userDetails/Container";
import ProfileFilters from "../../../components/profileFilters/Container";

const Body = () => {
  return (
    <div>
      <UserDetails />
      <ProfileFilters />
      <Notifications />
    </div>
  );
};

export default Body;
