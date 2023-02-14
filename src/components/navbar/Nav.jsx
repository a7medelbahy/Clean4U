import Logo from "../../images/logo.png";
import { NavbarData } from "../../data";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";
import HireUs from "./HireUs";

const Nav = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const [expandNav, setExpandNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  });
  const navItems = document.querySelectorAll(".nav-item .nav-link");
  const myNav = document.querySelector(".navbar");
  navItems.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach((element) => {
        element.classList.remove("active");
      });
      setExpandNav(false);
      e.currentTarget.classList.add("active");
      let myId = e.currentTarget.getAttribute("href").slice(1),
        myElement = document.getElementById(myId),
        navHeight = myNav.getBoundingClientRect().height,
        myPosition = myElement.offsetTop - navHeight;
      window.scrollTo({ left: 0, top: myPosition, behavior: "smooth" });
    });
  });

  return (
    <nav
      className={
        fixedNav
          ? "navbar navbar-expand-lg py-2 fixed-nav"
          : "navbar navbar-expand-lg py-2"
      }
    >
      <div className="container">
        <a className="navbar-brand fs-2 fw-bolder" href="#top">
          <img src={Logo} className="me-3 img-fluid" alt="logo" />
          Clean4U
        </a>
        <button
          onClick={() => setExpandNav((prev) => !prev)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {expandNav ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
        <div
          className={
            expandNav
              ? "navbar-collapse collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#top">
                Home
              </a>
            </li>
            {NavbarData.map((navItem) => {
              return <NavItem key={navItem.id} navItem={navItem} />;
            })}
          </ul>
          <HireUs />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
