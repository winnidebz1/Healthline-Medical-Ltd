
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Zap, CircleDollarSign } from 'lucide-react';
import { CAMPAIGNS } from '../constants';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === CAMPAIGNS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === CAMPAIGNS.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? CAMPAIGNS.length - 1 : prev - 1));

  return (
    <div className="relative overflow-hidden bg-white h-[500px] md:h-[600px] group">
      <div className="relative h-full">
        {CAMPAIGNS.map((campaign, idx) => (
          <div
            key={campaign.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <img
              src={campaign.image}
              alt={campaign.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">

                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {campaign.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                    {campaign.description}
                  </p>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                    <button
                      onClick={onBookClick}
                      className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                    >
                      {campaign.cta}
                    </button>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        <ShieldCheck size={16} className="text-green-500" />
                        <span>Accurate</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        <CircleDollarSign size={16} className="text-green-500" />
                        <span>Affordable</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        <Zap size={16} className="text-green-500" />
                        <span>Fast</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/50 backdrop-blur-md text-gray-800 hover:bg-white transition-all duration-300 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/50 backdrop-blur-md text-gray-800 hover:bg-white transition-all duration-300 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {CAMPAIGNS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === current ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
