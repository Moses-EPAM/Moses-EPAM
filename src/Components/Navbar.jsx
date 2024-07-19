import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navitems } from "./constants";

function Navbar() {
  const navigate = useNavigate();
  const [navItem, setNavItem] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry?.isIntersecting) {
            setNavItem(entry.target.getAttribute("id"));
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.4 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setNavItem]);

  console.log("navItem", navItem);
  return (
    <nav className="navbar my-nav navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand text-light d-flex" href="#">
          <p style={{ color: "orange", fontFamily: "unset" }}>M</p>oses
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {Navitems.map(({ label, link, name }, i) => {
                return (
                  <a
                    className={` ${
                      navItem === name ? " text-success" : " text-danger"
                    }`}
                    href={link}
                    onClick={() => navigate(link)}
                  >
                    {label}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
