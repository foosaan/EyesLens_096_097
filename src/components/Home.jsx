import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import herobg from '../assets/jennie.jpg';
import herobg2 from '../assets/jennie1.jpg';
import herobg3 from '../assets/jennie2.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [herobg, herobg2, herobg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center bg-gray-500"> 
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt="Hero Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div> 
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto p-10 rounded-xl shadow-2xl backdrop-blur-sm" 
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-white text-center"
        >
          EyesLens
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-10 leading-relaxed text-center text-white"
        >
          Abadikan setiap moment anda
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center"
        >
          <Link to="about" smooth={true} duration={500} className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            Selengkapnya
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;