import React from "react";
import Item from "./item/Component";

const Menu = () => {
  return (
    <div className="pt20 pr30 df">
      <Item title="Nanna" />
      <Item title="Settings" />
    </div>
  );
};

export default Menu;
