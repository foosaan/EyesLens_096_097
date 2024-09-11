import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-6 md:px-10 flex items-center justify-between">
      <nav className="hidden md:flex items-center gap-6">
        <Link to="home" smooth={true} duration={500} className="hover:underline cursor-pointer">Beranda</Link>
        <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">Tentang</Link>
        <Link to="menu" smooth={true} duration={500} className="hover:underline cursor-pointer">Pricelist Foto</Link>
      
      </nav>
    </footer>
  );
};

export default Footer;