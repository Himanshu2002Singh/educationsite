import React from 'react';
import { journeySteps } from './journeyData';
import JourneyStep from './JourneyStep';

interface JourneyPathMobileProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const JourneyPathMobile: React.FC<JourneyPathMobileProps> = ({ 
  activeStep, 
  setActiveStep 
}) => {
  return (
    <div className="lg:hidden relative">
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 z-0"></div>
      
      <div className="relative z-10 space-y-12 py-8">
        {journeySteps.map((step) => (
          <div key={step.id} className="relative pl-16">
            <div 
              className={`absolute left-6 top-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-6 w-6 z-20 ${
                step.id <= activeStep ? step.bgColor : 'bg-gray-300'
              }`}
            ></div>
            
            {/* Connect line to previous step */}
            {step.id > 1 && (
              <div 
                className={`absolute left-8 top-0 w-1 h-12 -mt-12 z-10 ${
                  step.id <= activeStep ? 'bg-gray-600' : 'bg-gray-200'
                }`}
              ></div>
            )}
            
            <JourneyStep 
              step={step} 
              isActive={step.id === activeStep} 
              onClick={() => setActiveStep(step.id)} 
            />
          </div>
        ))}
        
        {/* Graduation indicator at the end */}
        <div className="relative pl-16">
          <div className="absolute left-8 top-0 w-1 h-12 bg-gray-600 z-10"></div>
          <div className="absolute left-8 top-12 transform -translate-x-1/2 rounded-full h-10 w-10 bg-gray-800 flex items-center justify-center z-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div className="pl-16 mb-8">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800">Graduate Success!</h3>
              <p className="mt-2 text-gray-600">
                Congratulations on completing your student journey! You're now ready to embark on your professional career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyPathMobile;