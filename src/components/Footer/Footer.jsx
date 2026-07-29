import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaArrowUp } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import TextHoverEffect from "../TextHoverEffect/TextHoverEffect";

function Footer() {
  const { t } = useTranslation();
  

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CTA */}

        <div className="footer-cta">
<h2 className="footer-title">
  {t("footerTitle")}
</h2>

          <p>{t("footerDesc")}</p>

          <Link to="/contact" className="footer-btn">
            {t("contactBtn")}
          </Link>

        </div>

        <div className="footer-divider"></div>

        {/* Main Grid */}

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-col">

            <h6 className="footer-logo">
              <span>El-Khatib</span>
            </h6>

            <p>
              {t("footerBrandDesc")}
            </p>

          </div>

          {/* Navigation */}

          <div className="footer-col">

            <h3>{t("navigation")}</h3>

            <ul>
              <li>{t("home")}</li>
              <li>{t("about")}</li>
              <li>{t("skills")}</li>
              <li>{t("projects")}</li>
            </ul>

          </div>

          {/* Services */}

          <div className="footer-col">

            <h3>{t("services")}</h3>

            <ul>
              <li>{t("service1")}</li>
              <li>{t("service2")}</li>
              <li>{t("service3")}</li>
              <li>{t("service4")}</li>
            </ul>

          </div>

          {/* Contact */}

          <div className="footer-col">

            <h3>{t("contact")}</h3>

            <ul className="contact-list">

              <li>
                <HiOutlineMail />
                abdulrahmanmkamel49@gmail.com
              </li>

              <li>
                <HiOutlinePhone />
                +20 1122171572
              </li>

              <li>
                <HiOutlineLocationMarker />
                Cairo, Egypt
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Bottom */}

        <div className="footer-bottom">

          <div className="footer-social">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/abdulrahman-m-kamel-12a592337"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a href="https://www.facebook.com/share/1CAdgspFLw/?mibextid=wwXIfr">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/eng.abdokamel?igsh=MWVjZjNiczRhaG1pZA%3D%3D&utm_source=qr">
              <FaInstagram />
            </a>

          </div>

          <div className="footer-copy">
            © 2026 Abdulrahman Kamel • {t("builtWith")}
            <FaHeart className="heart-icon" />
          </div>

        </div>

        {/* Background */}

        <div className="footer-bg">
          <TextHoverEffect text="El-Khatib" />
        </div>

      </div>

      {/* Back To Top */}

      <button
        className="back-to-top"
        title={t("backToTop")}
        aria-label={t("backToTop")}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;