import React from "react";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import "@/styles/header.scss";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="header">
        <div
          style={{
            color: "#000",
            fontSize: "2rem",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <div style={{ fontSize: "64px" }} className="mx-1">
            <LensBlurIcon fontSize="inherit" />
          </div>
          <h1 className="flex items-center font-bold">Snapify</h1>
        </div>
        <ul className="list">
          <li className="item">
            <Link href={"/home"}>Home</Link>{" "}
          </li>
          <li className="item">About</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
