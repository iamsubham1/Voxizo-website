"use client";

import SectionPageCards from "../ServicePageCards/SectionPageCards";
import "./SectionPageInfo.css";
import { motion as m } from "framer-motion";

const SectionPageInfo: React.FC = () => {
  return (
    <div className="w-full">
      <div
        className={`flex flex-col justify-center items-center sectionPageInfo-container`}
      >
        <div className={`sectionPageInfo-headings`}>
          <m.h1
            initial={{ opacity: 0, x: +150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                staggerChildren: 0.3,
              },
            }}
            transition={{ duration: 1 }}
          >
            <span>Create</span> Websites
          </m.h1>
          <m.h1
            initial={{ opacity: 0, x: +200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            10X faster with us
          </m.h1>
        </div>
        <div className={`sectionPageInfo-paragraphs`}>
          <m.p
            initial={{ opacity: 0, y: +250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Create your beautiful, responsive websites in minutes
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            with modes less websites builder
          </m.p>
        </div>
        <div className={`sectionPageInfo-button`}>
          <m.button
            initial={{ opacity: 0, y: +350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            Start Free Trail
          </m.button>
        </div>
      </div>

      <SectionPageCards />

    </div>

  );
};

export default SectionPageInfo;
