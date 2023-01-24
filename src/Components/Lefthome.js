import React, { useEffect, useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BiWallet } from "react-icons/bi";
import { VscReport } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";
import { AiFillSetting } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

function Lefthome() {
  const [currentClicked, setCurrentClicked] = useState("/");

  useEffect(() => {
    setCurrentClicked(window.location.pathname);
  }, [window.location.pathname]);

  const handleClick = (val) => {
    setCurrentClicked(val);
  };

  console.log("currentClicked", currentClicked);
  return (
    <>
      <div className="aara">
        {" "}
        <p>Aara Tech</p>
      </div>
      <div
        className={currentClicked === "/" ? "leftside orangelist" : "leftside"}
        onClick={() => handleClick("/")}
      >
        <Link className="left-links" to="/">
          <BsHouseDoor className="icn" />
          <p>Dashboard</p>
        </Link>
      </div>
      <div
        className={
          currentClicked === "/Client" ? "leftside orangelist" : "leftside"
        }
        onClick={() => handleClick("/Client")}
      >
        {" "}
        <BiUser className="icn" />
        <Link className="left-links" to="/Client">
          <p>Client Area</p> <BsArrowRightShort className="icn" />{" "}
        </Link>
      </div>
      <div className="leftside">
        {" "}
        <BiWallet className="icn" /> <p>Wallet Area</p>{" "}
        <BsArrowRightShort className="icn" />
      </div>
      <div className="leftside">
        {" "}
        <VscReport className="icn" /> <p>Report Area </p>{" "}
        <BsArrowRightShort className="icn" />
      </div>
      <div className="leftside">
        {" "}
        <FiUsers className="icn" /> <p>Admin Area </p>{" "}
        <BsArrowRightShort className="icn" />
      </div>
      <div className="leftside">
        {" "}
        <CiCircleInfo className="icn" />
        <p>Manage Concerns </p>
        <BsArrowRightShort className="icn" />
      </div>
      <div className="leftside">
        {" "}
        <AiFillSetting className="icn" />
        <p>Manage Config </p> <BsArrowRightShort className="icn" />
      </div>
    </>
  );
}

export default Lefthome;
