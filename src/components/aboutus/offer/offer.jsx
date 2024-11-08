"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Offer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "2-Month Course",
      description: "An intensive course designed to quickly enhance your skills.",
      extraInfo: "A fast-track program designed to introduce the fundamentals of web development, providing you with essential skills to get started in the industry. Perfect for those seeking rapid learning and immediate job entry, this program includes project-based learning and full placement support.",
      image: "/2month.avif"
    },
    {
      id: 2,
      title: "4-Month Course",
      description: "An in-depth course providing comprehensive knowledge and experience.",
      extraInfo: "A comprehensive program that builds on foundational skills and covers intermediate-level web development concepts, ensuring you’re fully prepared to meet industry demands. This course combines extensive hands-on training with complete placement assistance for long-term career success.",
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

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-lg shadow-lg transform transition-all duration-300 bg-white hover:bg-blue-50 flex flex-col ${
              selectedCard === card.id ? 'md:w-[500px] w-full' : 'md:w-[300px] w-full'
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
              <h3 className="text-lg md:text-xl font-semibold font-syne text-gray-900">{card.title}</h3>
              <p className="text-md md:text-lg text-gray-700 font-syne">{card.description}</p>
            </div>

            {/* Extra Info Section */}
            {selectedCard === card.id && (
              <div className="absolute inset-0 md:inset-auto md:top-0 md:right-0 bg-blue-50 p-4 h-full md:w-48 font-syne flex items-center rounded-lg md:rounded-r-lg transition-all">
                <p className="text-gray-700 text-lg md:text-sm">{card.extraInfo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
