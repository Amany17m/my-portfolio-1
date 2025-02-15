import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { FaPython, FaGithub } from "react-icons/fa";
import { SiNumpy, SiPandas, SiJupyter, SiMysql } from "react-icons/si";

// Custom Seaborn Logo Component
const SeabornLogo = () => (
  <img
    src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg"
    alt="Seaborn Logo"
    className="skill-logo"
  />
);

// Custom Matplotlib Logo Component
const MatplotlibLogo = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
    alt="Matplotlib Logo"
    className="skill-logo"
  />
);

// Skills Data
export const SkillsData = [
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "SQL",
    icon: <SiMysql />, // MySQL icon represents SQL
  },
  {
    name: "Pandas",
    icon: <SiPandas />,
  },
  {
    name: "NumPy",
    icon: <SiNumpy />,
  },
  {
    name: "Matplotlib",
    icon: <MatplotlibLogo />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Jupyter Notebooks",
    icon: <SiJupyter />,
  },
  {
    name: "Seaborn",
    icon: <SeabornLogo />,
  },
];

const Skills = () => {
  const skillEffect = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className="skills" id="skills">
      <div className="container">
        <motion.div
          whileInView={skillEffect}
          initial={{ y: "-80px", opacity: 0 }}
          className="heading"
        >
          <p className="heading-sub-text">What I work with</p>
          <p className="heading-text">My Tools</p>
        </motion.div>
        <motion.div
          whileInView={skillEffect}
          className="skills-box"
          initial={{ y: "-80px", opacity: 0 }}
        >
          {SkillsData.map((el, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{el.icon}</div>
              <small className="skill-desc">{el.name}</small>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
