import React from "react";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Header = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <header>
      <div className="start header-collapse">
        <a href="#" className="logo">
          Lo<span>go</span>
        </a>
        <button className="sidebar-btn primary-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <div className="center">
        <Navbar />
      </div>
      <div className="end">
        <button className="primary-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
