import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container">
      <div classname="sidebar">
        <ul>
          <li>
            <Link to="/wiki">위키</Link>
          </li>
          <li>
            <Link to="/user">사용자</Link>
          </li>
          <li>
            <Link to="/manager">관리자</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
