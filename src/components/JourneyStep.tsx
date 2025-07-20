import React from 'react';
import { JourneyStep as JourneyStepType } from './journeyData';
import StepDetail from './StepDetail';

interface JourneyStepProps {
  step: JourneyStepType;
  isActive: boolean;
  onClick: () => void;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ step, isActive, onClick }) => {
  const Icon = step.icon;
  
  return (
    <div className="journey-step mb-8 w-full max-w-md mx-auto">
      <div 
        className={`
          relative rounded-lg shadow-md transform transition-all duration-300 cursor-pointer
          ${isActive ? 'scale-105' : 'hover:scale-102'}
        `}
        onClick={onClick}
      >
        <div className={`
          rounded-t-lg ${step.bgColor} p-6 transition-all duration-300
          ${isActive ? step.hoverColor : 'hover:' + step.hoverColor}
        `}>
          <div className="flex items-start">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-white/20 ${step.color} mr-2`}>
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="mt-2 text-white/90">{step.description}</p>
            </div>
          </div>
        </div>
        <StepDetail step={step} isVisible={isActive} />
      </div>
    </div>
  );
};

export default JourneyStep;