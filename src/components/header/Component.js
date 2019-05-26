import React from "react";
import Logo from "./logo/Component";
import Menu from "./menu/Container";

const Header = () => (
  <div style={{ paddingBottom: "60px" }}>
    <div
      className="df jc-sb h60 bb-s1-light-grey w100p"
      style={{ position: "fixed", backgroundColor: "#fff" }}
    >
      <Logo />
      <Menu />
    </div>
  </div>
);

export default Header;
