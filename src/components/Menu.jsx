import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import menuItems from './menuItems';

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-6 md:px-10 bg-gradient-to-r from-gray-200 to-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Pricelist Foto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, cursor: 'pointer' }}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-700">{item.name}</h3>
                <p className="text-gray-500 mb-6">{item.description}</p>
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-lg" /> {/* Ubah bentuk foto agar tidak lancip */}
                <a
                  href={`https://wa.me/628123456789?text=Pesan ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;