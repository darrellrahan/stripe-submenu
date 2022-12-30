import React, { useState } from "react";
import Dropdown from "./Dropdown";

const NavItem = (prop) => {
  const { items } = prop;
  const { page, links } = items;

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const openDropdown = () => setIsShowDropdown(true);
  const closeDropdown = () => setIsShowDropdown(false);

  return (
    <li onMouseOver={openDropdown} onMouseOut={closeDropdown}>
      <span className="nav-item">{page}</span>
      <div className="gap" />
      {isShowDropdown && <Dropdown page={page} submenu={links} />}
    </li>
  );
};

export default NavItem;
