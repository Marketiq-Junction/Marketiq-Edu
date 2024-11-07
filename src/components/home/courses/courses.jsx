import React from 'react';
import Image from 'next/image';

const Courses = () => {
  // Sample course data
  const courseData = [
    {
      title: '6-Month Course',
      image: '/logoo.png',
    },
    {
      title: '1-Year Course',
      image: '/path/to/your/image2.jpg',
    },
    {
      title: '2-Year Course',
      image: '/path/to/your/image3.jpg',
    },
    {
      title: '3-Year Course',
      image: '/path/to/your/image4.jpg',
    },
  ];

  return (
    <div className="py-10 text-center">
      {/* Category Label as a Button-like Element */}
      <div className="inline-block bg-[#50c3c6] text-white font-bold py-2 px-4 rounded-full mb-4 uppercase text-sm">
        Course Category
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">Explore Our Courses</h2>

      {/* Course Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 md:px-0">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2"
          >
            <div className="relative w-full h-36 rounded-t-lg overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
