import React from "react";
import sublinks from "../data";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav">
        {sublinks.map((e, i) => (
          <NavItem key={i} items={e} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
