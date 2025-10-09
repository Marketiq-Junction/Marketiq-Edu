"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

// Brands data array
const brandsData = [
  { id: 1, image: "/2.jpg", name: "Brand 1" },
  { id: 2, image: "/3.png", name: "Brand 2" },
  { id: 3, image: "/5.jpg", name: "Brand 3" },
  { id: 4, image: "/18.jpg", name: "Brand 4" },
  { id: 5, image: "/47.jpg", name: "Brand 5" },
  { id: 6, image: "/60.jpg", name: "Brand 6" },
  { id: 7, image: "/bkccrown.png", name: "Brand 7" },
  { id: 8, image: "/constrochem.png", name: "Brand 8" },
  { id: 9, image: "/dl.png", name: "Brand 9" },
  { id: 10, image: "/faina.png", name: "Brand 10" },
  { id: 11, image: "/falcon.png", name: "Brand 11" },
  { id: 12, image: "/fresco.png", name: "Brand 12" },
  { id: 13, image: "/icco.png", name: "Brand 14" },
  { id: 14, image: "/lmt.png", name: "Brand 18" },
  { id: 15, image: "/overseas.png", name: "Brand 19" },
  { id: 16, image: "/rm.png", name: "Brand 20" },
  { id: 17, image: "/tiss.png", name: "Brand 21" },
  { id: 18, image: "/tt.png", name: "Brand 22" },
  { id: 19, image: "/urbanicon.png", name: "Brand 23" },
];

const Brands = () => {
  const [shuffledBrands, setShuffledBrands] = useState([
    ...brandsData,
    ...brandsData,
  ]);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setShuffledBrands((prev) => {
        const firstHalf = prev.slice(0, brandsData.length);
        const shuffled = firstHalf.sort(() => Math.random() - 0.5);
        return [...shuffled, ...shuffled];
      });
    }, 20000);
    return () => clearInterval(shuffleInterval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 py-20 px-4 md:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Handshake className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Trusted By Industry Leaders
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Partners
            </span>{" "}
            and
            <br />
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Collaborations
            </span>
          </h2>

          <p className="text-lg text-white/90">
            Building strong partnerships with top companies worldwide
          </p>
        </motion.div>

        {/* Scrolling Brands Section */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cyan-400 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-teal-400 to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {shuffledBrands.map((brand, index) => (
              <SingleBrand key={`${brand.id}-${index}`} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "50+", label: "Partner Companies" },
            { number: "500+", label: "Placements" },
            { number: "95%", label: "Success Rate" },
            { number: "100+", label: "Projects" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40 p-6 text-center shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-semibold text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { image, name } = brand;
  const isPng = image.toLowerCase().endsWith(".png");

  return (
    <motion.div
      className="relative w-40 h-40 flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-white/40 shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={image}
          alt={`${name} Logo`}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};