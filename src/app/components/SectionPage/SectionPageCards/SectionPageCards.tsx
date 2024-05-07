import Card from "./Card";
import "./SectionPageCards.css";
import googleImg from "../../../assets/cardsImages/google-color-svgrepo-com.svg";
import fbImg from "../../../assets/cardsImages/facebook-1-svgrepo-com.svg";
import tiktokImg from "../../../assets/cardsImages/tiktok-svgrepo-com.svg";
import shopify from "../../../assets/cardsImages/shopify-svgrepo-com.svg";
import webDesign from "../../../assets/cardsImages/web-design-svgrepo-com.svg";
import webDev from "../../../assets/cardsImages/html-website-svgrepo-com.svg";
import logoDesign from "../../../assets/cardsImages/graphic-design-svgrepo-com.svg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SectionPageCards: React.FC = () => {
  return (
    <div className={`sectionPageCards-container`}>
      <motion.div
        className="cards-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="twoCard-container">
          <motion.div variants={item}>
            <Card image={shopify} altText="shopify" />
          </motion.div>
          <motion.div variants={item}>
            <Card image={logoDesign} altText="Logo Design" />
          </motion.div>
        </div>
        <div className="threeCard-container">
          <motion.div variants={item}>
            <Card image={googleImg} altText="Google" />
          </motion.div>
          <motion.div variants={item}>
            <Card image={fbImg} altText="Facebook" />
          </motion.div>
          <motion.div variants={item}>
            <Card image={tiktokImg} altText="TikTok" />
          </motion.div>
        </div>
        <div className="twoCard-container">
          <motion.div variants={item}>
            <Card image={webDesign} altText="Web Design" />
          </motion.div>
          <motion.div variants={item}>
            <Card image={webDev} altText="Web Development" />
          </motion.div>
        </div>
      </motion.div>
      <div className="sectionPageCards-info">
        <div className="sectionPageCards-headings">
          <motion.h1 initial={{ opacity: 0, x: +300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>Integrated with your favorite </motion.h1>
          <motion.h1 initial={{ opacity: 0, x: +350 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}> tools for power-up conversion.</motion.h1>
        </div>
        <div className="sectionPageCards-paragraphs">
          <motion.p initial={{ opacity: 0, x: +400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          </motion.p>
          <motion.p initial={{ opacity: 0, x: +450 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            sodales leo id commodo ornare. Vestibulum lobortis ligula vehicula.
          </motion.p>
        </div>
        <div className="sectionPageCards-button">
          <motion.button initial={{ opacity: 0, x: +500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>Learn more</motion.button>
        </div>
      </div>
    </div>
  );
};

export default SectionPageCards;
