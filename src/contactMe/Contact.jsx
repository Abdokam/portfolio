import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Contact.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="contact-card">

        <h1>{t("contactTitle")}</h1>

        <p>
          {t("contactDescription")}
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <HiOutlineMail />
            <span>abdulrahmanmkamel49@gmail.com</span>
          </div>

          <div className="contact-item">
            <HiOutlinePhone />
            <span>+20 1122171572</span>
          </div>

          <div className="contact-item">
            <HiOutlineLocationMarker />
            <span>{t("contactLocation")}</span>
          </div>

        </div>

        <div className="contact-social">

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/abdulrahman-m-kamel-12a592337"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.facebook.com/share/1CAdgspFLw/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/eng.abdokamel?igsh=MWVjZjNiczRhaG1pZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

        <Link to="/" className="back-btn">
          ← {t("backHome")}
        </Link>

      </div>
    </div>
  );
}

export default Contact;