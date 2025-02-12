import { FaPython, FaGithub } from "react-icons/fa";
import { SiNumpy, SiPandas, SiJupyter, SiSeaborn, SiMysql } from "react-icons/si";

// Custom Matplotlib Logo Component
const MatplotlibLogo = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
    alt="Matplotlib Logo"
    style={{ width: "2.5rem", height: "2.5rem" }}
  />
);

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
    icon: <SiSeaborn />,
  },
];
