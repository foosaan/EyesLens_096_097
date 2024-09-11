import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import chef from '../assets/photo_6264877746396183617_y.jpg';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-100 to-gray-200 py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-last md:order-first"
        >
          <img
            src={chef}
            alt="Vendor Foto Eyeslens"
            className="rounded-lg object-cover w-full h-[400px] shadow-lg"
          />
          <p className="mt-6 text-center text-gray-700 bg-gray-200 py-3 px-4 rounded-lg">
            Tim Eyeslens dipimpin oleh fotografer profesional yang berpengalaman dalam menangkap momen-momen indah dan berharga.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Tentang Eyeslens</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Eyeslens adalah vendor foto yang berdedikasi untuk menangkap momen-momen indah dalam hidup Anda. Dengan pengalaman lebih dari 10 tahun dalam bidang fotografi, kami berkomitmen untuk memberikan hasil yang terbaik dan paling memuaskan.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Kami menawarkan berbagai paket foto yang sesuai dengan kebutuhan Anda, mulai dari foto pre-wedding, wedding, hingga foto komersial. Setiap foto yang kami ambil dipastikan akan menjadi kenangan yang berharga bagi Anda.
          </p>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="inline-block bg-gray-700 text-white py-3 px-6 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
          >
            Lihat Portofolio Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;