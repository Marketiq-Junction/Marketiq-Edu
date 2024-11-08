"use client";
import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ChooseUs = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const cards = [
    {
      id: 1,
      icon: <PersonIcon style={{ fontSize: "4rem", color: "white" }} />,
      title: "Career-Ready Curriculum",
      description: "Courses designed to equip students with job-ready skills from day one.",
    },
    {
      id: 2,
      icon: <SchoolIcon style={{ fontSize: "4rem", color: "white" }} />,
      title: "100% Placement Assistance",
      description: "Comprehensive placement support with flexible financial options.",
    },
    {
      id: 3,
      icon: <TrendingUpIcon style={{ fontSize: "4rem", color: "white" }} />,
      title: "Flexible Learning Paths",
      description: "Courses tailored to meet specific career goals in various durations.",
    },
    {
      id: 4,
      icon: <WorkIcon style={{ fontSize: "4rem", color: "white" }} />,
      title: "Industry Projects",
      description: "Real-world projects prepare you for a tech career.",
    },
  ];

  const extendedCards = [...cards, ...cards];

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const currentCards = extendedCards.slice(
    currentStartIndex,
    currentStartIndex + visibleCards
  );

  return (
    <div className="p-6 md:p-10 bg-white md:ml-28 min-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section with Heading */}
        <div className="col-span-1 text-center md:text-left">
          <h2 className="text-2xl md:-ml-20 md:text-4xl font-bold font-montserrat text-black mb-4 md:mb-8">
            Why Choose Education.MarketJunction?
          </h2>
        </div>

        {/* Right Section with Cards */}
        <div className="col-span-2 flex overflow-hidden">
          <div className="flex transition-transform duration-500 w-full">
            {currentCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="text-white rounded-lg bg-[#4a9bd3] -ml-2 sm:mx-4 md:mx-2 flex-shrink-0 flex flex-col items-center justify-center w-full md:w-[calc(90%/3)] min-h-[300px] p-6 transform transition hover:scale-105 hover:bg-[#50c3c6]"
              >
                <div>{card.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
                <p className="text-center mt-4">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 gap-8">
        <button
          onClick={handlePrevious}
          className="bg-[#4a9bd3] text-white rounded-full p-3 hover:bg-[#50c3c6] transition-colors duration-300"
          aria-label="Previous"
        >
          <ArrowBackIosIcon className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#4a9bd3] text-white rounded-full p-3 hover:bg-[#50c3c6] transition-colors duration-300"
          aria-label="Next"
        >
          <ArrowForwardIosIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
