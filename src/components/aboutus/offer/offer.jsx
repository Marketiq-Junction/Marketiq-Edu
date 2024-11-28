"use client";
import React, { useState } from 'react';
import { FaBriefcase, FaRocket, FaCertificate } from 'react-icons/fa';

const Offer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: '2-day Bootcamp',
      icon: <FaRocket size={50} className="text-blue-500 mx-auto" />,
      details: [
        <h2><b>- Duration: </b>2 Days,<br />
        <b>- Hours</b>: 8 hours per day <br />
        <b>- Placement Support:</b> No placement support <br />
        <b>- Hands-on Experience:</b> Apply concepts through real-time exercises and examples
         <br /><b>- Certifications:</b> Receive a Digital Marketing Bootcamp Certificate</h2>
      ]
    },
    {
      id: 2,
      title: "45-day  Fast Track Program",
      icon: <FaBriefcase size={50} className="text-blue-500 mx-auto" />,
      details: [
        <h1><b>•Duration:</b> 45 Days
        <br /><b>•Hours:</b> 2 days per week , 5 hours per session  <br />
        <b>•Placement Support:</b> Career guidance and mock interviews included
        <br /><b>•100% Placement Support:</b> Resume building, mock interviews, and recruiter connections
        <br /> <b>•Project-Based Learning:</b> Gain practical experience by working on real-world campaigns <br />
        <b>•Certifications: </b>
        <br />- Digital Marketing Basics Certificate
        <br />- Social Media Marketing Specialist Certificate
        <br />- Content Writing Specialist Certificate</h1>
      ]
    },
    {
      id: 3,
      title: "4-Month Digital Marketing Program",
      icon: <FaCertificate size={50} className="text-blue-500 mx-auto" />,
      details: [
        <h1><b>•Duration:</b> 4 months <br />
        • <b>Hours:</b> 2 days per week, 5 hours per day <br />
        <b>•Placement Support:</b> 100% assistance with career workshops and mock interviews <br />
        <b>•100% Placement Support:</b> Career coaching, mock interviews, and recruiter connections. <br />
        <b>•Live Projects:</b> Gain practical experience by working on real-world campaigns. <br />
        <b>•Certifications:</b> <br />
        - Digital Marketing Specialist Certificate <br />
        - Advanced SEO Specialist Certificate <br />
        - Social Media Marketing Expert Certificate <br />
        - Full Stack Digital Marketer Certificate</h1>
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
                <ul className=" list-inside text-gray-700 text-sm md:text-md">
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
