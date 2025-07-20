import React, { useState, useEffect, useRef } from 'react';
import { journeySteps } from './journeyData';
import { GraduationCap } from 'lucide-react';

const JourneyPathDesktop: React.FC<{
  activeStep: number;
  setActiveStep: (step: number) => void;
}> = ({ activeStep, setActiveStep }) => {
  const pathRef = useRef<SVGSVGElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current.querySelector('path');
      if (path) {
        setPathLength(path.getTotalLength());
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - windowHeight;
      const progress = Math.min(Math.max(scrollY / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:block relative my-16">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          ref={pathRef}
          width="100%" 
          height="200" 
          viewBox="0 0 1200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <path 
            d="M0,100 C150,200 250,0 400,100 C550,200 650,0 800,100 C950,200 1050,0 1200,100" 
            stroke="#E5E7EB" 
            strokeWidth="30" 
            fill="none" 
            strokeLinecap="round"
          />
          <path 
            d="M0,100 C150,200 250,0 400,100 C550,200 650,0 800,100 C950,200 1050,0 1200,100" 
            stroke="#4B5563" 
            strokeWidth="30" 
            fill="none" 
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - (pathLength * scrollProgress)}
            className="transition-all duration-300 ease-out"
          />
        </svg>
      </div>

      <div className="relative flex justify-between items-center px-8 py-24">
        {journeySteps.map((step) => {
          const isActive = step.id === activeStep;
          const progress = (step.id - 1) / (journeySteps.length - 1);
          const position = step.id % 2 === 0 ? 'top' : 'bottom';
          
          return (
            <div 
              key={step.id}
              className={`absolute transform transition-all duration-300 ease-in-out ${
                position === 'top' ? 'top-4' : 'bottom-4'
              }`}
              style={{ 
                left: `${progress * 85 + 7}%`,
                transform: `translateX(-50%) scale(${isActive ? 1.1 : 1})` 
              }}
            >
              <button
                onClick={() => setActiveStep(step.id)}
                className={`
                  group relative p-2 rounded-full transition-all duration-300
                  ${isActive ? `${step.bgColor} shadow-lg` : 'bg-white border-2 border-gray-300 hover:border-gray-400'}
                `}
                aria-label={`Step ${step.id}: ${step.title}`}
              >
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <span className={`text-xl font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>
                    {step.id}
                  </span>
                </div>
                
                <div className={`absolute ${
                  position === 'top' ? 'top-full mt-2' : 'bottom-full mb-2'
                } left-1/2 transform -translate-x-1/2 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                } transition-all duration-200 whitespace-nowrap`}>
                  <div className={`${isActive ? step.bgColor : 'bg-gray-700'} text-white px-3 py-1 rounded-lg text-sm font-medium`}>
                    {step.title}
                  </div>
                </div>
              </button>
            </div>
          );
        })}
        
        {/* Graduation cap at the end */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="bg-gray-800 p-3 rounded-full">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyPathDesktop;