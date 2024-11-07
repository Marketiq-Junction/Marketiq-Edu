"use client";
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Image from 'next/image';

const Offer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "6-Month Certification",
      description: "For those seeking a quick skill boost.",
      extraInfo: "With a decade of experience in the ever-evolving landscape of digital marketing, James brings practical insights and hands-on strategies to her courses.",
      image: "/"
    },
    {
      id: 2,
      title: "1-Year Diploma",
      description: "For students aiming to develop a strong foundation.",
      extraInfo: "Comprehensive course covering essential topics to build a robust skill set.",
      image: "/path/to/image2.jpg"
    },
    {
      id: 3,
      title: "2-Year Advanced Diploma",
      description: "For those who want to deepen their expertise.",
      extraInfo: "Advanced topics and in-depth knowledge for career advancement.",
      image: "/path/to/image3.jpg"
    },
    {
      id: 4,
      title: "3-Month Bootcamp",
      description: "Quick learning for professionals.",
      extraInfo: "Intensive bootcamp for fast-paced learning and immediate application.",
      image: "/path/to/image4.jpg"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold font-syne text-center mb-4">What We Offer</h2>
      <p className="text-center text-xl mb-8 font-syne text-black">
        At Education.MarketJunction, we offer flexible and career-oriented <br /> programs designed to cater to students with various career goals <br />and time commitments. Our offerings include:
      </p>

      <div className="flex items-center">
        <IconButton onClick={handlePrev}>
          <ArrowBack />
        </IconButton>

        <div className="flex gap-4 overflow-hidden">
          {cards.slice(activeIndex, activeIndex + 3).map((card) => (
            <div
              key={card.id}
              className={`relative min-w-[280px] rounded-lg shadow-lg transform transition-all duration-300 bg-white flex ${selectedCard === card.id ? 'w-[600px]' : 'w-[300px]'}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="relative w-full h-40 md:h-full flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-lg"
                />
              </div>
              <div className="p-4 flex flex-col justify-center w-full">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.description}</p>
              </div>
              {selectedCard === card.id && (
                <div className="p-4 bg-blue-50 flex flex-col justify-center w-full rounded-r-lg">
                  <p className="text-gray-700">{card.extraInfo}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <IconButton onClick={handleNext}>
          <ArrowForward />
        </IconButton>
      </div>

      <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-full">
        View More
      </button>
    </div>
  );
};

export default Offer;
