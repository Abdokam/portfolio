import React from "react";
import "./Skills.css";
import { useTranslation } from "react-i18next";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiVite,
} from "react-icons/si";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    { icon: <FaHtml5 />, name: t("skillHtml"), color: "#E34F26" },
    { icon: <FaCss3Alt />, name: t("skillCss"), color: "#1572B6" },
    { icon: <FaJs />, name: t("skillJs"), color: "#F7DF1E" },
    { icon: <FaReact />, name: t("skillReact"), color: "#61DBFB" },
    { icon: <SiBootstrap />, name: t("skillBootstrap"), color: "#7952B3" },
    { icon: <SiTailwindcss />, name: t("skillTailwind"), color: "#38BDF8" },
    { icon: <FaNodeJs />, name: t("skillNode"), color: "#3C873A" },
    { icon: <SiPhp />, name: t("skillPhp"), color: "#777BB4" },
    { icon: <SiMysql />, name: t("skillMysql"), color: "#00758F" },
    { icon: <FaGithub />, name: t("skillGithub"), color: "#fff" },
    { icon: <SiVite />, name: t("skillVite"), color: "#A259FF" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="slider">
        <div className="slide-track">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div className="skill" key={index}>
              <span
                className="icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>

              <span className="name">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}