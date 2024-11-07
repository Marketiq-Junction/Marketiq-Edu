"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  // Card data
  const cards = [
    { src: '/path-to-image1.jpg', title: 'Career-Focused Curriculum', alt: 'Career-Focused Curriculum', category: 'Career-Focused Curriculum' },
    { src: '/path-to-image2.jpg', title: '100% Placement Assistance', alt: '100% Placement Assistance', category: '100% Placement Assistance' },
    { src: '/path-to-image3.jpg', title: 'Flexible Learning Options', alt: 'Flexible Learning Options', category: 'Flexible Learning Options' },
    { src: '/path-to-image4.jpg', title: 'Real-World Projects', alt: 'Real-World Projects', category: 'Real-World Projects' },
  ];

  // Filtered cards based on selected category
  const filteredCards = selectedCategory === 'All Category'
    ? cards
    : cards.filter((card) => card.category === selectedCategory);

  // Maximum number of cards to display at a time
  const visibleCards = 3;

  // Calculate the visible cards based on the current index and filter
  const getVisibleCards = () => {
    if (filteredCards.length <= visibleCards) {
      return filteredCards; // Show all matching cards if fewer than or equal to visibleCards
    }

    // Show exactly `visibleCards` number of cards, cycling within the filtered set
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
        <h2 className="text-5xl font-semibold font-montserrat ml-12 text-center md:text-left">Why Choose Us?</h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-end w-full gap-2 px-2 mb-6">
        {['All Category', 'Career-Focused Curriculum', '100% Placement Assistance', 'Flexible Learning Options', 'Real-World Projects'].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0); // Reset carousel to the beginning for new filter
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
      <div className="flex gap-4 px-8 w-full justify-end">
        {getVisibleCards().map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg w-64 h-72 flex flex-col items-center p-4 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src={card.src} // replace with the path to your image
                alt={card.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons Below Carousel */}
      <div className="flex gap-6 mt-6 ml-36">
        <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-400">
          <ArrowBackIcon />
        </button>
        <button onClick={handleNext} className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600">
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
