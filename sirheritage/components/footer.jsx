import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container pt-4 pb-4 text-white">
      <div className="row">
        <div className="col-6-sm col-3-md col-3-lg col-3-xl">
          <div className="footer-content">
            <div>
              <h1>SirHeritage</h1>
              <p className="mt-1">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <div className="col-6-sm col-3-md col-3-lg col-3-xl">
          <div className="footer-about ml-2">
            <h2 className="mb-2">About Us</h2>
            <p>
              SirHeritage is a fashion institute that deals with both English
              and Native wears.
            </p>
          </div>
        </div>
        <div className="col-6-sm col-3-md col-3-lg col-3-xl">
          <div className="ml-1">
            <h2 className="mb-2">Contact Us</h2>
            <ul>
              <li className="mb-1">
                No 10, Asadam Road, opposite Ile-Anu street, Ilorin, Kwara
                State.
              </li>
              <li className="mb-1 display-f align-items-center">
                <img src="./mail.png" width="30px" alt="Sirheritage" />
                <span className="ml-1">SirHeritage@gmail.com</span>
              </li>
              <li className="mb-1 display-f align-items-center">
                <img src="./whatsapp.png" width="30px" alt="Sirheritage" />
                <span className="ml-1">+2348168867603</span>
              </li>
              <li className="mb-1 display-f align-items-center">
                <img src="./phone.png" width="30px" alt="Sirheritage" />
                <span className="ml-1">
                  +2348168867603
                  <br />
                  +2349034920595
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6-sm col-3-md col-3-lg col-3-xl">
          <div className="ml-1">
            <h2>Useful Links</h2>
            <ul className="ml-1 mt-2" style={{ listStyle: "disc" }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="display-f mt-1 Opening-time">
          <p className="">Opening Times:</p>
          <div className="ml-1">
            <p className="mb-1">Mondays - Fridays: 9:00am - 7:00pm</p>
            <p className="mb-1">Saturday: 9:00am - 6:00pm</p>
            <p className="mb-1">Sunday: 10:00am - 3:00pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
