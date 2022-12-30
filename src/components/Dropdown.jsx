import React from "react";

const Dropdown = (prop) => {
  const { submenu, page } = prop;

  return (
    <div className="dropdown">
      <h3 className="page-title">{page}</h3>
      <ul className="link-ct">
        {submenu.map((e, i) => {
          const { label, icon } = e;
          return (
            <li key={i}>
              <a href="#" className="link">
                {icon}
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
