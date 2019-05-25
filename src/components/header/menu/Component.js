import React from "react";
import Item from "./item/Component";

const Menu = ({ logout, isAuth }) => {
  return (
    <div className="pt20 pr30 df">
      {isAuth && <Item title="Pridėti biurą" link="office" />}
      {isAuth && <Item title="Pridėti kelionę" link="trip" />}
      {/* <Item title="Statistika" link="stats" /> */}
      {!isAuth && <Item title="Prisijungimas" link="login" />}
      {isAuth && <Item title="Profilis" link="/profile" />}
      {isAuth && (
        <div onClick={logout}>
          <div className="ml30 fw600 cp fz16">Atsijungti</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
