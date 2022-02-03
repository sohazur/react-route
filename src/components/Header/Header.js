import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink
        style={(isActive) => ({
          color: isActive ? "green" : "blue",
          fontWeight: "bold",
        })}
        to="/about"
      >
        About
      </NavLink>
      <NavLink to="/friends">Friends</NavLink>
    </div>
  );
};

export default Header;
