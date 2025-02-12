import React from "react";
import "../styles/Services.css";
import { FaChartBar } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";
import { motion } from "framer-motion";

const Services = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <>
      <div className="services" id="services">
        <div className="container">
          <motion.div
            whileInView={fade}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            className="heading"
          >
            <p className="heading-sub-text">What I can do</p>
            <p className="heading-text">Services</p>
          </motion.div>
          <motion.div
            className="services-box"
            whileInView={fade}
            initial={{ opacity: 0 }}
          >
            {/* Descriptive & Inferential Statistics */}
            <div className="services-card">
              <FaChartBar className="services-icon" />
              <p className="services-title">
                Descriptive & Inferential Statistics
              </p>
              <p className="services-desc">
                I analyze datasets to summarize key trends, derive insights, and
                make predictions using statistical techniques.
              </p>
            </div>

            {/* Data Cleaning and Preprocessing */}
            <div className="services-card">
              <MdCleaningServices className="services-icon" />
              <p className="services-title">Data Cleaning and Preprocessing</p>
              <p className="services-desc">
                I prepare raw data for analysis by handling missing values,
                removing outliers, and transforming data to enhance quality.
              </p>
            </div>

            {/* Exploratory Data Analysis (EDA) */}
            <div className="services-card">
              <AiOutlineAreaChart className="services-icon" />
              <p className="services-title">Exploratory Data Analysis (EDA)</p>
              <p className="services-desc">
                I explore datasets visually and statistically to identify
                patterns, relationships, and insights for decision-making.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
