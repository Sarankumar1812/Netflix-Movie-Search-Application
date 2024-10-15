import React from 'react';

const Feature = ({ title, description, imgSrc, reverse }) => {
  return (
    <div className={`flex items-center justify-between ${reverse ? 'flex-row-reverse' : ''} gap-10`}>
      <div className="text-col w-1/2">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
      <div className="img-col w-1/2">
        <img src={imgSrc} alt={title} className="w-full" />
      </div>
    </div>
  );
};

export default Feature;
