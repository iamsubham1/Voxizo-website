import React from "react";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="w-[70%] mt-[4%] text-center heroSection-container ">
      <div className="heroSection-headings">
        <h1 className="text-7xl">
          Marketing done{" "}
          <div className=" rounded-full easy inline-block px-2 py-1 text-4xl easy-logo">
            easy
          </div>
          <br /> As always
        </h1>
      </div>
      <div className="heroSection-paragraphs">
        <p className="mt-4 secondary-font text-[1rem] mb-7">
          From brand awareness through customer acquisition and everything in
          <br />
          between, we"ll craft a strategic digital groth game-plan for you.
        </p>
      </div>
      <div className="heroSection-button">
        <button className="hero-btn rounded-full px-4 py-1 mx-auto ">
          Get in Touch
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
