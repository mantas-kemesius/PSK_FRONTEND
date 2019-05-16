import React from "react";
import Logo from "./logo/Component";
import Menu from "./menu/Container";

const Header = () => (
  <div className="df jc-sb h60 bb-s1-light-grey w100p">
    <Logo />
    <Menu />
  </div>
);

export default Header;
