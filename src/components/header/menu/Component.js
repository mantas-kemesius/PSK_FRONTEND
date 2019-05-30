import React from "react";
import Item from "./item/Component";

const Menu = ({ logout, isAuth }) => {
  return (
    <div className="pr30 df">
      {isAuth && (
        <Item
          title="Pridėti biurą"
          link="office"
          className="bh-s1-grey grey-hover"
        />
      )}
      {isAuth && (
        <Item
          title="Pridėti kelionę"
          link="trip"
          className="br-s1-grey grey-hover"
        />
      )}
      {!isAuth && (
        <Item title="Prisijungimas" link="login" className="grey-hover" />
      )}
      {isAuth && (
        <Item
          title="Profilis"
          link="/profile"
          className="br-s1-grey grey-hover"
        />
      )}
      {isAuth && (
        <div onClick={logout}>
          <div className="ml30 pt20 fw600 cp fz16">Atsijungti</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
