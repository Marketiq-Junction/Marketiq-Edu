import React from 'react';
import Image from 'next/image';

const StudentExperience = () => {
  const experiences = [
    { title: "Individual Mentorship", imgSrc: "/mentorship.avif" },
    { title: "Hands-On Projects", imgSrc: "/project.jpg" },
    { title: "Workshops & Seminars", imgSrc: "/workshop.avif" },
    { title: "Placement Preparation", imgSrc: "/prep.jpg" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-start p-4 md:p-8 md:m-24">
      {/* Text Section - Positioned first on mobile, second on desktop */}
      <div className="w-full md:w-auto text-center md:text-left order-1 md:order-2 mt-6 md:mt-36 md:ml-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Student <br className="hidden md:block" /> Experience and <br className="hidden md:block" /> Support
        </h2>
      </div>

      {/* Cards Section - Positioned second on mobile, first on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1 w-full md:w-auto order-2 md:order-1 mt-6 md:mt-0">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-blue-50 shadow-md rounded-lg overflow-hidden w-full md:w-64 lg:w-72"
          >
            <Image
              src={experience.imgSrc}
              alt={experience.title}
              width={300}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-md md:text-lg font-semibold text-center md:text-left">
                {experience.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentExperience;
