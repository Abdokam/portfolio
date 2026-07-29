import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiBootstrap } from "react-icons/si";
import { HiOutlineDownload } from "react-icons/hi";

import "./About.css";

export default function About() {
  const { t } = useTranslation();

  const skills = [
    { icon: <FaReact />, text: t("skillReact") },
    { icon: <SiJavascript />, text: t("skillJs") },
    { icon: <FaNodeJs />, text: t("skillNode") },
    { icon: <FaPhp />, text: t("skillPhp") },
    { icon: <FaDatabase />, text: t("skillMysql") },
    { icon: <SiBootstrap />, text: t("skillBootstrap") },
    { icon: <FaGithub />, text: t("skillGithub") },
  ];

  return (
    <section className="about" id="about">
      <div className="container about-container">

        {/* Left */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="image-circle">
            <img src="/src/assets/abdokamel.jpeg" alt="Abdo Kamel" />
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
         
<h2 className="about-title">
  {t("about")} <span>{t("")}</span>
</h2>
<h3>{t("fullName")}</h3>

<p>{t("aboutDescription")}</p>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="skill-chip" key={index}>
                {skill.icon}
                <span>{skill.text}</span>
              </div>
            ))}
          </div>

          <div className="about-buttons">
          
            <Link to="/contact" className="primary-btn">
                        {t("contactBtn")}
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}