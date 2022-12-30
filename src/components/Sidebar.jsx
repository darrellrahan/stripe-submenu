import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";

const Sidebar = () => {
  const { isShowSidebar, closeSidebar } = useGlobalContext();

  if (!isShowSidebar) return;

  return (
    <div className="sidebar-overlay">
      <div className="sidebar-ct">
        <div className="sidebar-top">
          <button onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-body">
          {sublinks.map((e, i) => {
            const { page, links } = e;
            return (
              <div key={i} className="sidebar-single-ct">
                <h3 className="page-title">{page}</h3>
                <ul className="sidebar-grid link-ct">
                  {links.map((e, i) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
