import React from "react";
import Item from "./item/Component";

const Menu = ({ logout, isAuth, isVisible }) => {
  return (
    <div className="pr30 df">
      {isAuth && isVisible && (
        <Item
          title="Pridėti biurą"
          link="office"
          className="bh-s1-grey grey-hover"
        />
      )}
      {isAuth && isVisible && (
        <Item title="Pridėti kelionę" link="trip" className="grey-hover" />
      )}
      {!isAuth && (
        <Item
          title="Prisijungimas"
          link="login"
          className="bl-s1-grey br-s1-grey grey-hover"
        />
      )}
      {isAuth && (
        <Item
          title="Profilis"
          link="/profile"
          className={
            "grey-hover " + isVisible
              ? "bl-s1-grey br-s1-grey"
              : "bl-s1-grey br-s1-grey"
          }
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
