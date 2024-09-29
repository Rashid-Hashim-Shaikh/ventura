"use client";

import React from "react";
import { StepperProps } from "@/types";

const VerticalStepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col gap-5 sm:hidden items-start justify-between w-full">
      {steps.map((step, index) => (
        <div
          className="flex gap-2 items-start justify-center sm:flex-1 relative"
          key={index}
        >
          {/* Step circle */}
          <div className="flex items-center justify-center">
            <div
              className={`w-[35px] h-[35px] flex items-center justify-center rounded-full border-2 transition-all ${
                index < currentStep
                  ? "bg-green-600 text-white z-20 border-green-600 z-11"
                  : "bg-grey border-grey z-10"
              }`}
            >
              {index < currentStep ? "✔" : ""}
            </div>
          </div>

          {/* Step label */}
          <div className="text-left sm:mt-2">
            <h4 className="text-xs lg:text-xs text-black font-semibold text-wrap">
              {step.label}
            </h4>
            <p className="text-xs font-semibold text-neutral">{step.value}</p>
          </div>

          {/* Connector line */}
          <div
            className={`absolute sm:top-[17.5px] transform inset-[17.5px] w-0.5 h-full sm:w-full sm:h-0.5 transition-all ${
              index < currentStep ? "bg-green-600 z-10" : "bg-grey"
            }
            ${
              index === steps.length - 1
                ? "-translate-y-1/2"
                : "translate-y-1/2"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default VerticalStepper;
