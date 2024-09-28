import React from 'react';

interface Timeline {
    id: number,
    label: string,
    value: string,
}
interface StepperProps {
  steps: Timeline[]; 
  currentStep: number;
}

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


// import React from 'react';

// interface Timeline {
//   id: number;
//   label: string;
//   value: string;
// }

// interface StepperProps {
//   steps: Timeline[];
//   currentStep: number;
// }

// const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between w-full">
//       {steps.map((step, index) => (
//         <div
//           className="relative flex md:flex-1 md:items-center flex-col md:flex-row mb-4 md:mb-0"
//           key={index}
//         >
//           {/* Step circle */}
//           <div className="flex items-center justify-center mb-2 md:mb-0">
//             <div
//               className={`h-10 w-10 flex items-center justify-center rounded-full border-2 transition-all ${
//                 index < currentStep
//                   ? 'bg-green-600 text-white z-20 border-green-600'
//                   : 'bg-grey border-grey'
//               }`}
//             >
//               {index < currentStep ? '✔' : ''}
//             </div>
//           </div>

//           {/* Step label */}
//           <div className="text-center md:text-left mt-2 md:mt-0 md:ml-2 text-sm">
//             <h4>{step.label}</h4>
//             <p>{step.value}</p>
//           </div>

//           {/* Connector line */}
//           {index !== steps.length - 1 && (
//             <div
//               className={`absolute md:top-5 md:transform w-full h-0.5 md:w-full md:h-0.5 transition-all ${
//                 index < currentStep ? 'bg-green-600' : 'bg-grey'
//               } ${index === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'} ${
//                 index === steps.length - 1
//                   ? 'hidden' // Hide the line after the last step
//                   : ''
//               } md:left-auto md:bottom-auto ${
//                 index === steps.length - 1
//                   ? ''
//                   : 'top-5 md:left-auto md:-translate-x-1/2'
//               }`}
//             />
//           )}

//           {/* Vertical connector for mobile */}
//           {index !== steps.length - 1 && (
//             <div
//               className={`absolute md:hidden left-1/2 top-10 w-0.5 h-full transition-all ${
//                 index < currentStep ? 'bg-green-600' : 'bg-grey'
//               }`}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stepper;

