import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { pathname, push } = useRouter();

  useEffect(() => {
    const toggleMenu = () => {
      var element = document.querySelector(".navbar");
      element.classList.toggle("navbar-active");
    };
    const navbarBtn = document.querySelector(".navbar-btn");
    const navbarMiddleBtn = document.querySelectorAll(".menu");
    navbarBtn && navbarBtn.addEventListener("click", toggleMenu);

    navbarMiddleBtn.length && [...navbarMiddleBtn].map((element) => element.addEventListener("click", toggleMenu));

    return () => {
      navbarBtn && navbarBtn.removeEventListener("click", toggleMenu);
      navbarMiddleBtn.length && [...navbarMiddleBtn].map((element) => element.removeEventListener("click", toggleMenu));
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-btn hd-dstb">
        <i className="fas fa-align-left"></i>
      </div>
      <div className="logo-mb hd-dstb" onClick={() => push("/")}>
        <img src="/media/images/nova-logo.png" alt="logo" />
      </div>
      <div className="container">
        <div className="clippath hd-mb" />

        <div className="left">
          <div className="logo" onClick={() => push("/")}>
            <img src="/media/images/nova-logo.png" alt="logo" />
          </div>
        </div>
        <div className="right">
          <Link href="/">
            <a className="menu-wrapper" aria-label="Home">
              <div className={`menu ${pathname === "/" ? "active-menu" : ""}`}>HOME</div>
            </a>
          </Link>

          <Link href="/nfans">
            <a className="menu-wrapper" aria-label="Pricing">
              <div className={`menu ${pathname === "/nfans" ? "active-menu" : ""}`}>NFANS</div>
            </a>
          </Link>

          <Link href="/season">
            <a className="menu-wrapper" aria-label="Pricing">
              <div className={`menu ${pathname === "/season" ? "active-menu" : ""}`}>SEASON</div>
            </a>
          </Link>

          <Link href="/stadium">
            <a className="menu-wrapper" aria-label="Pricing">
              <div className={`menu ${pathname === "/stadium" ? "active-menu" : ""}`}>STADIUM</div>
            </a>
          </Link>

          <Link href="/projects">
            <a className="menu-wrapper" aria-label="Pricing">
              <div className={`menu ${pathname === "/projects" ? "active-menu" : ""}`}>PROJECTS</div>
            </a>
          </Link>
          <Link href="#">
            <a className="menu-wrapper" aria-label="Pricing">
              <div className={`menu grey ${pathname === "/" ? "active-menu" : ""}`}>SHOP</div>
            </a>
          </Link>
          <div className="menu-wrapper" aria-label="Pricing">
            <div className={`menu ${pathname === "/" ? "active-menu" : ""}`}>ABOUT</div>

            <div className="sub-menu">
              <p className="title">ABOUT</p>
              <Link href="/team" passHref>
                <a className="item">
                  <i className="fa-solid fa-arrow-right-long"></i>
                  <p className="menu">TEAM</p>
                </a>
              </Link>
              <Link href="/roadmap" passHref>
                <a className="item">
                  <i className="fa-solid fa-arrow-right-long"></i>
                  <p className="menu">ROADMAP</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
