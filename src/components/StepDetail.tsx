import React from 'react';
import { JourneyStep } from './journeyData';

interface StepDetailProps {
  step: JourneyStep;
  isVisible: boolean;
}

const StepDetail: React.FC<StepDetailProps> = ({ step, isVisible }) => {
  return (
    <div 
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className={`rounded-b-lg ${step.bgColor} p-6 text-white`}>
        <h3 className="text-xl font-semibold mb-4">What to expect:</h3>
        <div className="space-y-4">
          {step.details.map((detail, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="font-medium text-lg">{detail.title}</h4>
              <p className="text-white/90 mt-1">{detail.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button 
            className={`bg-white ${step.color === 'text-white' ? 'text-gray-800' : step.color} font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition-colors`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepDetail;