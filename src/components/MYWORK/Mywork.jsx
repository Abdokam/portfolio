import "../MYWORK/Mywork.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

function MyWork() {
  const { t } = useTranslation();

  const skills = [
    {
      name: t("skillHtml"),
      percent: 95,
      icon: <FaHtml5 />,
      color: "#E34F26",
    },
    {
      name: t("skillCss"),
      percent: 90,
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: t("skillReact"),
      percent: 90,
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: t("skillNode"),
      percent: 95,
      icon: <FaNodeJs />,
      color: "#3C873A",
    },
  ];

  return (
    <section className="mywork" id="skills">

      <motion.h2
  className="mywork-title"
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <span className="blue">{t("my")}</span>{" "}
  <span>{t("skillsTitle")}</span>
</motion.h2>
{/*  */}
      <div className="mywork-container">
        {skills.map((skill, index) => (
          <motion.div
            className="mywork-item"
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="mywork-header">
              <div className="skill-info">
                <span
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>

              <span>{skill.percent}%</span>
            </div>

            <div className="mywork-progress">
              <motion.div
                className="mywork-progress-fill"
                style={{
                  background: skill.color,
                }}
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.percent}%`,
                }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default MyWork;