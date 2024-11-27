"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Offer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "2-day Bootcamp",
      description: "An intensive course designed to quickly enhance your skills in Digital Marketing in 2 days.",
      extraInfo: "Our 2-day Digital Marketing Bootcamp is an intensive program designed for individuals seeking a quick and practical introduction to digital marketing. With 8 hours of daily learning, this bootcamp combines theoretical understanding with hands-on experience. ",
      image: "/2month.avif"
    },
    {
      id: 2,
      title: "45-day Fast Track Program",
      description: "An in-depth course providing comprehensive knowledge and experience in digital marketing in  45 days.",
      extraInfo: "Our 45-day Digital Marketing Fast Track Program is designed for individuals seeking to quickly acquire essential digital marketing skills. With 3 days per week and 3 hours per session, this program combines theoretical understanding with hands-on experience to prepare you for the digital marketing landscape",
      image: "/4month.avif"
    },
    {
      id: 3,
      title: "4-Month Digital Marketing Program",
      description: "An in-depth course providing comprehensive knowledge and experience in Digital Marketing in 4 month.",
      extraInfo: "Our 4-month Digital Marketing Program is designed to provide comprehensive training in the most in-demand skills across the digital marketing spectrum. With hands-on projects and industry-relevant tools, this program equips you to excel in today's competitive digital landscape.",
      image: "/4month.avif"
    }
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-6 mt-8 md:mt-16">
      <h2 className="text-3xl md:text-4xl font-bold font-syne text-center mb-4">What We Offer</h2>
      <p className="text-center text-lg md:text-xl mb-8 font-syne text-black">
        At Education.MarketJunction, we offer flexible and career-oriented <br className="hidden md:block" /> programs designed to cater to students with various career goals <br className="hidden md:block" />and time commitments.
      </p>

      <div className="flex flex-col md:flex-row gap-20 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-lg shadow-lg transform transition-all duration-300 bg-white hover:bg-blue-50 flex flex-col ${
              selectedCard === card.id ? 'md:w-[400px] w-full' : 'md:w-[400px] w-full'
            }`}
            onClick={() => handleCardClick(card.id)}
            style={{ cursor: 'pointer' }}
          >
            {/* Image Section */}
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Title and Description Section */}
            <div className="p-4">
              <h3 className="text-lg md:text-2xl font-semibold font-syne text-gray-900">{card.title}</h3>
              <p className="text-md md:text-lg text-gray-700 font-syne">{card.description}</p>
            </div>

            {/* Extra Info Section */}
            {selectedCard === card.id && (
              <div className="absolute inset-0 md:inset-auto md:top-0 md:right-0 md:w-[400px] bg-blue-50 p-4 h-full md:w-48 font-syne flex items-center rounded-lg md:rounded-r-lg transition-all">
                <p className="text-gray-700 text-lg md:text-lg">{card.extraInfo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
