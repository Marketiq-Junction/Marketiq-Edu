import React from 'react';
import Image from 'next/image';

const StudentExperience = () => {
  const experiences = [
    { title: "Individual Mentorship", imgSrc: "/path/to/mentorship.jpg" },
    { title: "Hands-On Projects", imgSrc: "/path/to/projects.jpg" },
    { title: "Workshops & Seminars", imgSrc: "/path/to/workshops.jpg" },
    { title: "Placement Preparation", imgSrc: "/path/to/placement.jpg" },
  ];

  return (
    <div className="flex flex-wrap items-start p-8 m-24">
      <div className="grid grid-cols-2 gap-6 flex-1">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={experience.imgSrc}
              alt={experience.title}
              width={300}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{experience.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 ml-16 mt-36 ">
        <h2 className="text-5xl font-bold">Student <br /> Experience and <br /> Support</h2>
      </div>
    </div>
  );
};

export default StudentExperience;
