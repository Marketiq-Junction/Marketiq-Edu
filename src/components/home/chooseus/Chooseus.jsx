"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Chooseus = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Array of card data
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

  // Double cards to allow smooth, continuous scrolling
  const extendedCards = [...cards, ...cards];

  // Update visibleCards based on screen size
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle "Next" button click
  const handleNext = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Display only the cards based on the current start index and visibleCards
  const currentCards = extendedCards.slice(
    currentStartIndex,
    currentStartIndex + visibleCards
  );

  return (
    <Box className="p-4 md:p-8 bg-white md:ml-28 min-h-[400px]">
      <Grid container spacing={2} alignItems="center">
        {/* Left Section with Heading */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            className="font-bold text-2xl font-montserrat md:text-4xl text-black mb-4 md:mb-8 text-center md:text-left ml-0 md:-ml-24"
          >
            Why Choose Education.MarketJunction?
          </Typography>
        </Grid>

        {/* Right Section with Cards */}
        <Grid item xs={12} md={8}>
          <Box className="flex overflow-hidden">
            <Box className="flex transition-transform duration-500" style={{ width: "100%" }}>
              {currentCards.map((card, index) => (
                <Card
                  key={`${card.id}-${index}`}
                  className="text-white rounded-lg -ml-2 sm:mx-4 md:mx-2 flex-shrink-0 flex flex-col items-center justify-center w-full md:w-[calc(90%/3)] min-h-[300px] p-6 transition-colors hover:bg-[#50c3c6]"
                  style={{
                    backgroundColor: "#4a9bd3",
                    cursor: "pointer",
                  }}
                >
                  <CardContent>
                    {card.icon}
                    <Typography variant="h6" className="font-semibold font-syne mt-4">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className="mt-8  font-syne text-center">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Navigation Buttons */}
          <Box className="flex justify-center mt-4 gap-8">
            <IconButton
              onClick={handlePrevious}
              className="bg-[#4a9bd3] text-white rounded-full p-2 hover:bg-[#50c3c6]"
              aria-label="Previous"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              className="bg-[#4a9bd3] text-white rounded-full p-2 hover:bg-[#50c3c6]"
              aria-label="Next"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chooseus;
