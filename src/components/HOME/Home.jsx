import React, { lazy, Suspense } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { MdTranslate } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const Spline = lazy(() => import("@splinetool/react-spline"));
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    localStorage.setItem("language", lang);
  };

  return (
    <div className="hero">
      {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
  <div className="container">

    {/* Logo */}
 

<a href="#" className="logo">
  <span className="a">{t("logo1")}</span>
  <span className="k">{t("logo2")}</span>
</a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#menu"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse justify-content-between"
      id="menu"
    >

      {/* Center Menu */}
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            {t("home")}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#about">
            {t("about")}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#projects">
            {t("projects")}
          </a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="#skills">
            {t("skills")}
          </a>
        </li>

      </ul>

      {/* Right Actions */}
      <div className="nav-actions">

     <div className="dropdown">
  <button
    className="language-btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
  >
    <MdTranslate size={22} />
    <span>{i18n.language.toUpperCase()}</span>
  </button>

  <ul className="dropdown-menu dropdown-menu-end language-menu">
    <li>
      <button
        className="dropdown-item"
        onClick={() => changeLanguage("en")}
      >
        🇺🇸 English
      </button>
    </li>

    <li>
      <button
        className="dropdown-item"
        onClick={() => changeLanguage("ar")}
      >
        🇪🇬 العربية
      </button>
    </li>

    <li>
      <button
        className="dropdown-item"
        onClick={() => changeLanguage("fr")}
      >
        🇫🇷 Français
      </button>
    </li>
  </ul>
</div>

        {/* ضع زر Dark Mode هنا */}
      </div>

    </div>
  </div>
</nav>

      {/* Left Content */}

      <div className="content">

        <h4 className="greeting">{t("heroHi")}</h4>

        <h1>
          {t("heroTitle1")} <span>{t("heroTitle2")}</span>
        </h1>

        <p>
          {t("heroDesc1")}
          <br />
          {t("heroDesc2")}
        </p>

        <div className="hero-buttons">

  {/* <a href="/cv.pdf" className="btn btn-primary hero-btn">
    {t("downloadCV")}
  </a> */}

  {/* <a href="#contact" className="btn btn-primary hero-btn">
  {t("contactBtn")}
</a> */}

<Link to="/contact" className="footer-btn">
            {t("contactBtn")}
          </Link>
</div>

<div className="social-icons mt-4">
  <a href="https://github.com/" target="_blank" rel="noreferrer">
    <i className="bi bi-github"></i>
  </a>

  <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
    <i className="bi bi-linkedin"></i>
  </a>

  <a href="https://x.com/" target="_blank" rel="noreferrer">
    <i className="bi bi-twitter-x"></i>
  </a>

  <a href="mailto:you@example.com">
    <i className="bi bi-envelope"></i>
  </a>
</div>

      </div>

      {/* Robot */}
      <div className="robot">
  <div className="robot-glow"></div>

  {/* <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
   */}

   <Suspense fallback={<div className="robot-loading">Loading...</div>}>
  <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
</Suspense>

</div>


    </div>
  );
}