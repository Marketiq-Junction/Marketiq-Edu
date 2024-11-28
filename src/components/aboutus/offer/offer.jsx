"use client";
import React, { useState } from 'react';
import { FaBriefcase, FaRocket, FaCertificate } from 'react-icons/fa';

const Offer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "2-day Bootcamp",
      icon: <FaRocket size={50} className="text-blue-500 mx-auto" />,
      details: [
        "Duration: 2 Days",
        "Hours: 8 hours per day",
        "Placement Support: No placement support",
        "Hands-on Experience: Apply concepts through real-time exercises and examples",
        "Certifications: Receive a Digital Marketing Bootcamp Certificate"
      ]
    },
    {
      id: 2,
      title: "45-day Fast Track Program",
      icon: <FaBriefcase size={50} className="text-blue-500 mx-auto" />,
      details: [
        "Duration: 45 Days",
        "Hours: 3 days per week, 3 hours per session",
        "Placement Support: Career guidance and mock interviews included",
        "100% Placement Support: Resume building, mock interviews, and recruiter connections",
        "Project-Based Learning: Gain practical experience by working on real-world campaigns",
        "Certifications:",
        "- Digital Marketing Basics Certificate",
        "- Social Media Marketing Specialist Certificate",
        "- Content Writing Specialist Certificate"
      ]
    },
    {
      id: 3,
      title: "4-Month Digital Marketing Program",
      icon: <FaCertificate size={50} className="text-blue-500 mx-auto" />,
      details: [
        "Duration: 4 months",
        "Hours: 3 days per week, 3 hours per day",
        "Placement Support: 100% assistance with career workshops and mock interviews",
        "100% Placement Support: Career coaching, mock interviews, and recruiter connections.",
        "Live Projects: Gain practical experience by working on real-world campaigns.",
        "Certifications:",
        "- Digital Marketing Specialist Certificate",
        "- Advanced SEO Specialist Certificate",
        "- Social Media Marketing Expert Certificate",
        "- Full Stack Digital Marketer Certificate"
      ]
    }
  ];

    const handleCardClick = (id) => {
      setSelectedCard(id === selectedCard ? null : id);
    };

  return (
    <div className="flex flex-col items-center p-4 md:p-6 mt-8 md:mt-16">
      <h2 className="text-3xl md:text-4xl font-bold font-syne text-center mb-4">
        Learn, Achieve, and Get Certified with Confidence
      </h2>
      <p className="text-center text-lg md:text-xl mb-12 font-syne text-black">
        Match Your Goals With The Right Program For a Customized Learning Experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-lg shadow-lg transform transition-all duration-300 bg-blue-100 hover:scale-105 hover:shadow-xl flex flex-col overflow-hidden h-auto min-h-[350px]`} 
            onClick={() => handleCardClick(card.id)}
            style={{ cursor: "pointer" }}
          >
            {/* Icon Section */}
            <div className="p-6 flex justify-center animate-pulse mt-12">
              {card.icon}
            </div>

            {/* Title Section */}
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg md:text-2xl font-semibold font-syne text-gray-900 text-center">
                {card.title}
              </h3>
              {selectedCard !== card.id && (
                <p className="text-sm md:text-md text-gray-700 font-syne text-center mt-2">
                  Click to view details
                </p>
              )}
            </div>

            {/* Extra Info Section */}
            {selectedCard === card.id && (
              <div className="absolute inset-0 bg-blue-50 p-6 font-syne flex flex-col justify-center transition-all rounded-lg z-10 h-full overflow-y-auto">
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-md">
                  {card.details.map((detail, index) => (
                    <li key={index} className="mb-2">{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
