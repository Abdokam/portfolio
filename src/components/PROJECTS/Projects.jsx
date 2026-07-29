import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Projects.css";

import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.jpeg";
import project4 from "../../assets/project4.jpeg";
import project5 from "../../assets/project5.jpeg";

function Card({ item }) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={item.image} alt={item.title} />

      <div className="overlay">
        <h3>{item.title}</h3>

        <p>{item.tech}</p>

        <div className="buttons">
          <a href={item.github} target="_blank" rel="noreferrer">
            {t("github")}
          </a>

          <a href={item.demo} target="_blank" rel="noreferrer">
            {t("liveDemo")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  const row1 = [
    {
      image: project1,
      title: t("project1Title"),
      tech: t("project1Tech"),
      github: "#",
      demo: "#",
    },
    {
      image: project2,
      title: t("project2Title"),
      tech: t("project2Tech"),
      github: "#",
      demo: "#",
    },
    {
      image: project3,
      title: t("project3Title"),
      tech: t("project3Tech"),
      github: "#",
      demo: "#",
    },
    {
      image: project4,
      title: t("project4Title"),
      tech: t("project4Tech"),
      github: "#",
      demo: "#",
    },
    {
      image: project5,
      title: t("project5Title"),
      tech: t("project5Tech"),
      github: "#",
      demo: "#",
    },
  ];

  const row2 = [...row1].reverse();

  return (
    <section className="projects" id="projects">
      <motion.h2
  className="projects-title"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <span>{t("featuredProjects")}</span>
</motion.h2>

      {/* Row One */}
      <div className="slider">
        <div className="track left">
          {[...row1, ...row1].map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>

      {/* Row Two */}
      <div className="slider">
        <div className="track right">
          {[...row2, ...row2].map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}