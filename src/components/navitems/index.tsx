import React from "react";
import Link from "next/link";

interface NavItemProps {
  path: string;
  label: string;
  currentPath: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, label, currentPath }) => {
  //regex for to clean url without slug to apply active class on link > navBar
  const cleanPath = currentPath.replace(/\/\[.*\]$/, "");

  return (
    <li className={`nav-item b-nav-item ${cleanPath === path ? "active" : ""}`}>
      <Link href={path} legacyBehavior>
        <a className="nav-link b-nav-link " data-bs-dismiss="offcanvas">
          {label}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
