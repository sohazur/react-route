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
      <NavLink
        to="/friends"
        style={(isActive) => ({
          color: isActive ? "green" : "blue",
          fontWeight: "bold",
        })}
      >
        Friends
      </NavLink>
      <NavLink
        to="/about/culture"
        style={(isActive) => ({
          color: isActive ? "green" : "blue",
          fontWeight: "bold",
        })}
      >
        Culture
      </NavLink>
    </div>
  );
};

export default Header;
