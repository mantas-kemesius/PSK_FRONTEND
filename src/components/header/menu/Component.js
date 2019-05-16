import React from "react";
import Item from "./item/Component";
import { isAuth } from "./../../../features/user/selectors";

const Menu = () => {
  return (
    <div className="pt20 pr30 df">
      <Item title="Kelionės" link="trip" />
      {/* <Item title="Statistika" link="stats" /> */}
      {!isAuth() && <Item title="Prisijungimas" link="login" />}
      {isAuth() && <Item title="Profilis" link="login" />}
    </div>
  );
};

export default Menu;
