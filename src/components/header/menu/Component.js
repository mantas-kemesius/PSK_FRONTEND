import React from "react";
import Item from "./item/Component";

const Menu = () => {
  return (
    <div className="pt20 pr30 df">
      <Item title="Kelionės" link="trip" />
      <Item title="Statistika" link="stats" />
    </div>
  );
};

export default Menu;
