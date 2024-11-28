"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 cards for desktop
  const [selectedCard, setSelectedCard] = useState(null);

  // Card data
  const cards = [
    {
      id: 1,
      src: "/career.jpg",
      title: "Real-World Projects for Practical Learning",
      alt: "Career-Focused Curriculum",
      category: "Career-Focused Curriculum",
      extraInfo:
        "Our courses go beyond theory, offering hands-on experience with real-world projects that mirror industry challenges. Gain the skills and confidence to solve practical problems, just like a professional.",
    },
    {
      id: 2,
      src: "/placement.jpg",
      title: "Expert Mentorship Tailored to You",
      alt: "100% Placement Assistance",
      category: "Expert Mentorship Tailored to You",
      extraInfo:
        "Learn with the guidance of industry experts who provide personalized mentorship. Our one-on-one support ensures you stay on track, overcome obstacles, and achieve your learning goals.",
    },
    {
      id: 3,
      src: "/prep.jpg",
      title: "Comprehensive Placement Support",
      alt: "Flexible Learning Options",
      category: "Comprehensive Placement Support",
      extraInfo:
        "We dont just teach technical skills — we prepare you for the job market with dedicated placement support. From resume building to mock interviews and soft skills training, we equip you to land your dream job.",
    },
    {
      id: 4,
      src: "/project.jpg",
      title: "Flexible Learning Options",
      alt: "Real-World Projects",
      category: "Flexible Learning Options",
      extraInfo:
        "Grow your connections through exclusive events, workshops, and networking opportunities with industry leaders. Develop relationships that can open doors to exciting career prospects.",
    },
    { id:5, src: '/career.jpg', title: 'Continuous Learning with Industry-Relevant Courses', alt: 'Real-World Projects', category: 'Real-World Projects', extraInfo:'Stay ahead of the curve with courses designed to meet the demands of a rapidly evolving job market. Our curriculum is updated regularly to reflect the latest industry trends and technologies.' },
      { id:6, src: '/placement.jpg', title: 'Flexible Learning for Your Convenience', alt: 'Real-World Projects', category: 'Real-World Projects', extraInfo:'Whether you prefer online, hybrid, or in-person learning, we offer flexible options to suit your schedule. Learn at your own pace while balancing your personal and professional life.' },
      { id:7, src: '/prep.jpg', title: 'Affordable, Quality Education', alt: 'Real-World Projects', category: 'Affordable, Quality Education' , extraInfo:'We believe quality education should be accessible. Our courses offer exceptional value, providing a high-quality learning experience at an affordable price.'}
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3); // 1 card on screens smaller than 768px, else 3 cards
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filtered cards based on selected category
  const filteredCards =
    selectedCategory === "All Category"
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
        <h2 className="text-3xl md:text-6xl font-semibold font-syne text-center md:text-left -ml-8 md:-ml-0">
          Your Path to <span className="text-white">Guaranteed</span> <br /> Success
        </h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center md:justify-end w-full gap-2 px-2 mb-6 md:-mt-2">
        {[
          "All Category",
          "Expert Mentorship Tailored to You",
          "Comprehensive Placement Support",
          "Flexible Learning Options",
        ].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
            className={`px-2 py-2 text-sm border-2 font-syne font-semibold border-blue-600  text-black rounded-full hover:bg-blue-200 ${
              selectedCategory === category ? "bg-blue-100" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="flex gap-4 px-4 md:px-12 w-full justify-center md:justify-end items-start">
        {getVisibleCards().map((card) => (
          <div
            key={card.id}
            className={`bg-white rounded-xl shadow-lg w-full md:w-80 flex flex-col items-center p-4 transition-transform duration-300 ease-in-out hover:bg-blue-200 ${
              selectedCard === card.id ? "md:w-[400px]" : ""
            }`}
            onClick={() => handleCardClick(card.id)}
            style={{ cursor: "pointer", minHeight:"200px" }}
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
            <p className="text-lg font-semibold font-syne text-center">{card.title}</p>
            {selectedCard === card.id && (
              <div className="mt-4 bg-blue-50 text-center font-syne p-4 rounded-lg text-gray-700">
                <p className="text-lg text-black">{card.extraInfo}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons Below Carousel */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-400"
        >
          <ArrowBackIcon fontSize="small" />
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600"
        >
          <ArrowForwardIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
