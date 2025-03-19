import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "cart", text: "cart" },
  { id: 3, url: "checkout", text: "checkout" },
  { id: 4, url: "allhouses", text: "houses" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li
            className="block py-2 px-3 text-textblack rounded-sm hover:text-greencol font-semibold "
            key={id}
          >
            <NavLink to={url}> {text}</NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
