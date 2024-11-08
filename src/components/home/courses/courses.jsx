"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Updated course data with only 2 courses
  const courseData = [
    {
      id: 1,
      title: '2-Month Course',
      image: '/2month.avif',
      extraInfo: 'This is a 2-month intensive course designed to quickly enhance your skills. With hands-on projects and expert guidance, you’ll develop the foundational knowledge necessary to jumpstart your career.'
    },
    {
      id: 2,
      title: '4-Month Course',
      image: '/4month.avif',
      extraInfo: 'This 4-month course offers in-depth knowledge and hands-on experience in key areas. It includes comprehensive assignments, one-on-one mentorship, and practical applications to deepen your learning.'
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCourse(selectedCourse === id ? null : id); // Toggle the selected course
  };

  return (
    <div className="py-10 text-center">
      {/* Category Label as a Button-like Element */}
      <div className="inline-block bg-[#50c3c6] text-white font-bold font-montserrat py-2 px-4 rounded-full mb-4 uppercase text-sm">
        Course Category
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold font-montserrat mb-8">Explore Our Courses</h2>

      {/* Course Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 px-4 mb-16 md:px-0">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white hover:bg-blue-50 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 cursor-pointer max-w-[90%] sm:max-w-[500px] mx-auto"
            onClick={() => handleCardClick(course.id)}
          >
            <div className="relative w-full h-48 sm:h-72 rounded-t-lg overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold font-montserrat">{course.title}</h3>
            </div>

            {/* Extra Info Section */}
            {selectedCourse === course.id && (
              <div className="bg-blue-50 p-4 rounded-b-lg transition-all duration-300 ease-in-out text-left text-sm sm:text-base">
                <p className="text-gray-700">{course.extraInfo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
