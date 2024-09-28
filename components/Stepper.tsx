
import React from 'react';
import { StepperProps } from '@/types';

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between w-full">
      {steps.map((step, index) => (
        <div className="flex-1 relative" key={index}>
          {/* Step circle */}
          <div className="flex items-center justify-center">
            <div
              className={`w-[35px] h-[35px] flex items-center justify-center rounded-full border-2 transition-all ${
                index < currentStep
                  ? 'bg-green-600 text-white z-20 border-green-600 z-11'
                  : 'bg-grey border-grey z-10'
              }`}
            >
              {index < currentStep ?  "✔" : ""}
            </div>
          </div>

          {/* Step label */}
          <div className="text-center mt-2">
            <h4 className='text-xs lg:text-xs text-black font-semibold text-wrap'>{step.label}</h4>
            <p className='text-xs font-semibold text-neutral'>{step.value}</p>
          </div>

          {/* Connector line */}
            <div
              className={`absolute top-[17.5px] transform   w-full h-0.5 transition-all ${
                index < currentStep ? 'bg-green-600 z-10' : 'bg-grey'
              }
            ${index === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`
            }
            />
        </div>
      ))}
    </div>
  );
};

export default Stepper;
