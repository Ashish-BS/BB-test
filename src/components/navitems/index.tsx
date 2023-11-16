import React from "react";
import Link from "next/link";

interface NavItemProps {
  path: string;
  label: string;
  currentPath: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, label, currentPath }) => (
  <li className={`nav-item b-nav-item ${currentPath === path ? "active" : ""}`}>
    <Link href={path} legacyBehavior>
      <a className="nav-link b-nav-link " data-bs-dismiss="offcanvas">
        {label}
      </a>
    </Link>
  </li>
);

export default NavItem;
