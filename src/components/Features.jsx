import React from 'react';
import feature1 from '../images/feature-1.png';
import feature2 from '../images/feature-2.png';
import feature3 from '../images/feature-3.png';
import feature4 from '../images/feature-4.png';
import Feature from './Feature';

const Features = () => {
  return (
    <div className="features bg-black text-white py-12 px-60">
      <div className="container mx-auto space-y-20 px-4">
        <Feature
          title="Enjoy on your TV."
          description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          imgSrc={feature1}
        />
        <Feature
          title="Download your shows to watch offline."
          description="Save your favourites easily and always have something to watch."
          imgSrc={feature2}
          reverse
        />
        <Feature
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          imgSrc={feature3}
        />
        <Feature
          title="Create profiles for kids"
          description="Send children on adventures with their favourite characters in a space made just for them free with your membership."
          imgSrc={feature4}
          reverse
        />
      </div>
    </div>
  );
};

export default Features;
