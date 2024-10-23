import React from "react";
import { NavLinkData } from "../constants";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-center gap-x-4 py-4">
      {NavLinkData.map((item, index) => (
        <NavLink
          className={({ isActive }) => isActive && "bg-black  text-white"}
          key={index}
          to={item.path}
        >
          {item.title}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
