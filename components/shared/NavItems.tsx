import React from "react";
import { navLinks } from "@/constans";
import Link from "next/link";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <Link scroll href={href} className="nav-li_a">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;
