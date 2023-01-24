import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { BiMessageError } from "react-icons/bi";
import maskboy from "../Images/maskboy.jpeg";
import Lefthome from "./Lefthome";

function Navbar({ isNavOpen, setIsNavOpen }) {
  return (
    <div className="main-nav">
      <div className={!isNavOpen ? "lefthome active" : "lefthome"}>
        <div className="arrownav">
          {!isNavOpen ? (
            <AiOutlineArrowRight
              className="arrowOr"
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          ) : (
            <AiOutlineArrowLeft
              className="arrowOr"
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          )}
        </div>
        <Lefthome />
      </div>
      <div className={isNavOpen ? "navbar active" : "navbar"}>
        <div className="left-nav">
          <div className="dashleft">
            {" "}
            <p>Dashboard</p>
          </div>
        </div>
        <div className="right-nav">
          <BsBell className="nav-icon" />
          <BiMessageError className="nav-icon" />
          <img className="boy" src={maskboy} alt="" />
          <div className="navright-last">
            <p className="dashright">Dashboard</p>
            <p className="super">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
