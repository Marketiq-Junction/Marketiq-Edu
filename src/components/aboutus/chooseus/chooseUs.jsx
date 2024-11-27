"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 cards for desktop

  // Card data
  const cards = [
    { src: '/career.jpg', title: 'Career-Focused Curriculum', alt: 'Career-Focused Curriculum', category: 'Career-Focused Curriculum' },
    { src: '/placement.jpg', title: '100% Placement Assistance', alt: '100% Placement Assistance', category: '100% Placement Assistance' },
    { src: '/prep.jpg', title: 'Flexible Learning Options', alt: 'Flexible Learning Options', category: 'Flexible Learning Options' },
    { src: '/project.jpg', title: 'Real-World Projects', alt: 'Real-World Projects', category: 'Real-World Projects' },
  ];

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3); // 1 card on screens smaller than 768px, else 3 cards
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtered cards based on selected category
  const filteredCards = selectedCategory === 'All Category'
    ? cards
    : cards.filter((card) => card.category === selectedCategory);

  // Calculate the visible cards based on the current index and filter
  const getVisibleCards = () => {
    if (filteredCards.length <= visibleCards) {
      return filteredCards;
    }
    return filteredCards.slice(currentIndex, currentIndex + visibleCards);
  };

  // Function to go to the previous set of cards
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, filteredCards.length - visibleCards) : prevIndex - 1
    );
  };

  // Function to go to the next set of cards
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= filteredCards.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col bg-[#50c3c6] items-center p-8 mt-4 mb-4 rounded-lg">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row w-full items-start md:items-center md:justify-start mb-6 ml-8">
        <h2 className="text-3xl md:text-6xl font-semibold font-montserrat ml-12 text-center md:text-left">Your Path to <br /> <span className="mt-2 block text-white">Guaranteed</span> <span className="mt-2 block text-white"> Success</span></h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center md:justify-end w-full gap-2 px-2 mb-6 md:-mt-24">
        {['All Category', 'Career-Focused Curriculum', '100% Placement Assistance', 'Flexible Learning Options', 'Real-World Projects'].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
            className={`px-2 py-1 text-sm border font-montserrat font-semibold border-blue-500 text-black rounded-full hover:bg-blue-200 ${
              selectedCategory === category ? 'bg-blue-200' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="flex gap-4 px-4 md:px-8 w-full justify-center md:justify-end">
        {getVisibleCards().map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg w-full md:w-64 h-72 flex flex-col items-center p-4 transition-transform duration-300 ease-in-out hover:bg-blue-200"
          >
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src={card.src}
                alt={card.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold text-center">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons Below Carousel */}
      <div className="flex gap-4 mt-6">
        <button onClick={handlePrev} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-400">
          <ArrowBackIcon fontSize="small" />
        </button>
        <button onClick={handleNext} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600">
          <ArrowForwardIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
