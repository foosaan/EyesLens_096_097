import React from 'react';

import foto1 from '../assets/jennie.jpg';
import foto5 from '../assets/jennie1.jpg';
import foto4 from '../assets/jennie2.jpg';
import foto3 from '../assets/jennie3.jpg';
import foto2 from '../assets/wisudauin3.jpg';


const Portfolio = () => {
  const photos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
  ];

  return (
    <section id="portfolio" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Portfolio ${index + 1}`}
            className={`w-full h-auto rounded-lg shadow-md ${index === 1 ? 'mt-0' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;