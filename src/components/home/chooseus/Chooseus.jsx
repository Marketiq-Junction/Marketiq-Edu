"use client";
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkIcon from '@mui/icons-material/Work';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Chooseus = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Array of card data
  const cards = [
    {
      icon: <PersonIcon style={{ fontSize: '2rem', color: 'white' }} />,
      title: 'Career-Ready Curriculum',
      description:
        'Each course is designed by industry professionals to equip students with job-ready skills from day one.',
    },
    {
      icon: <SchoolIcon style={{ fontSize: '2rem', color: 'white' }} />,
      title: '100% Placement Assistance',
      description:
        'Comprehensive placement support, with a pay-after-placement model that ensures financial accessibility for all.',
    },
    {
      icon: <TrendingUpIcon style={{ fontSize: '2rem', color: 'white' }} />,
      title: 'Flexible Learning Paths',
      description:
        'Choose from 6-month, 1-year, 2-year, or 3-year programs tailored to meet specific career goals.',
    },
    {
      icon: <WorkIcon style={{ fontSize: '2rem', color: 'white' }} />,
      title: 'Industry Projects',
      description:
        'Gain practical experience by working on real-world projects that prepare you for your career in tech.',
    },
  ];

  // Total number of cards to be displayed at a time
  const visibleCards = 3;
  const totalCards = cards.length;

  // Handlers for navigating cards
  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
  };

  // Get the visible cards based on the current index
  const getVisibleCards = () => {
    let visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(cards[(currentCardIndex + i) % totalCards]);
    }
    return visible;
  };

  return (
    <Box className="p-8 bg-white ml-28" style={{ minHeight: '400px' }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left Section with Heading */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" className="font-bold text-black mb-8 text-left -ml-24">
            Why Choose Education.MarketJunction?
          </Typography>
        </Grid>

        {/* Right Section with Cards */}
        <Grid item xs={12} md={8}>
          <Box className="flex overflow-hidden">
            <Box className="flex transition-transform duration-500" style={{ width: '100%' }}>
              {getVisibleCards().map((card, index) => (
                <Card
                  key={index}
                  className="text-white rounded-lg mx-2 flex-shrink-0"
                  style={{
                    backgroundColor: '#4a9bd3', // Initial background color
                    width: `calc(90% / ${visibleCards})`, // Adjusted width
                    minHeight: '300px',
                    transition: 'background-color 0.3s', // Smooth transition
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#50c3c6'; // Hover color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#4a9bd3'; // Revert to initial color
                  }}
                >
                  <CardContent>
                    {card.icon}
                    <Typography variant="h6" className="font-semibold">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className="mt-2">
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
              onClick={handlePrev}
              style={{
                backgroundColor: '#4a9bd3',
                color: '#fff',
                borderRadius: '50%',
                padding: '8px',
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              style={{
                backgroundColor: '#4a9bd3',
                color: '#fff',
                borderRadius: '50%',
                padding: '8px',
              }}
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
