import React from "react";
import "@/styles/header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="header">
        <h1 style={{ color: "white", fontSize: "2rem", cursor: "pointer" }}>
          Logo
        </h1>
        <ul className="list">
          <li className="item">Home</li>
          <li className="item">About</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
