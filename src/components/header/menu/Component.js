import React from "react";
import Item from "./item/Component";

const Menu = () => {
  return (
    <div className="pt20 pr30 df">
      <Item title="Nanna" link="nanna" />
      <Item title="Settings" link="settings" />
    </div>
  );
};

export default Menu;
