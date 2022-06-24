import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [menu, setMenus] = React.useState(false);

  return (
    <div className="navbar text-white">
      <nav className="container">
        <Link href="/">
          <header
            className="site-title display-f align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img src="./sirheritage.png" width="50px" alt="SirHeritage" />
            <p>SirHeritage</p>
          </header>
        </Link>
        <div
          className="menu-button"
          onClick={() => {
            setMenus(!menu);
          }}
        >
          Menu
        </div>
        <ul className={`display-f ${menu ? "menus" : ""}`}>
          <li className="ml-1">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-1">
            <Link href="/about">About us</Link>
          </li>
          <li className="ml-1">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="ml-1">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
