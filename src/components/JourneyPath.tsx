import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

const steps = [
  { id: 1, title: 'Profile Assessment', color: 'bg-emerald-500' },
  { id: 2, title: 'University/Program Shortlist', color: 'bg-teal-700' },
  { id: 3, title: 'Application & Offers', color: 'bg-red-400' },
  { id: 4, title: 'Scholarships & Visa Assistance', color: 'bg-emerald-500' },
  { id: 5, title: 'Loans & Accommodation', color: 'bg-teal-700' },
  { id: 6, title: 'Pre-Departure Services', color: 'bg-red-400' },
  { id: 7, title: 'Alumni Network', color: 'bg-emerald-500' }
];

const JourneyPath: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Your Student Journey</h2>
        
        {/* Desktop Path */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0">
            <svg width="100%" height="200" className="overflow-visible">
              <path
                d="M0,100 C150,200 250,0 400,100 C550,200 650,0 800,100 C950,200 1050,0 1200,100"
                className="stroke-[30] stroke-gray-200"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M0,100 C150,200 250,0 400,100 C550,200 650,0 800,100 C950,200 1050,0 1200,100"
                className={`stroke-[30] stroke-gray-600 transition-all duration-1000`}
                fill="none"
                strokeLinecap="round"
                strokeDasharray="1500"
                strokeDashoffset={1500 - (1500 * (activeStep / 7))}
              />
            </svg>
          </div>

          <div className="relative flex justify-between items-center px-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute transition-all duration-300 ${
                  index % 2 === 0 ? 'top-0' : 'bottom-0'
                }`}
                style={{ left: `${(index / (steps.length - 1)) * 85 + 7}%` }}
              >
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative transform -translate-x-1/2 ${
                    step.id === activeStep ? 'scale-110' : ''
                  }`}
                >
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${step.id <= activeStep ? step.color : 'bg-gray-300'}
                    ${step.id === activeStep ? 'ring-4 ring-offset-2 ring-emerald-200' : ''}
                  `}>
                    <span className="text-white font-bold">{step.id}</span>
                  </div>
                  <div className={`
                    absolute ${index % 2 === 0 ? 'top-full mt-2' : 'bottom-full mb-2'}
                    left-1/2 transform -translate-x-1/2 whitespace-nowrap
                    ${step.id === activeStep ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    transition-all duration-200
                  `}>
                    <div className={`${step.color} text-white px-3 py-1 rounded text-sm font-medium`}>
                      {step.title}
                    </div>
                  </div>
                </button>
              </div>
            ))}

            <div className="absolute right-0 transform translate-y-[-50%] top-1/2">
              <div className="bg-gray-800 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Path */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200"></div>
          {steps.map((step) => (
            <div key={step.id} className="relative pl-12 mb-8">
              <div 
                className={`
                  absolute left-4 w-6 h-6 rounded-full 
                  transform -translate-x-1/2
                  ${step.id <= activeStep ? step.color : 'bg-gray-300'}
                  transition-all duration-300
                `}
                style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                  {step.id}
                </span>
              </div>
              <button
                onClick={() => setActiveStep(step.id)}
                className={`
                  w-full text-left p-4 rounded-lg transition-all duration-300
                  ${step.id === activeStep ? step.color + ' text-white' : 'bg-white hover:bg-gray-50'}
                `}
              >
                <h3 className="font-medium">{step.title}</h3>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyPath;