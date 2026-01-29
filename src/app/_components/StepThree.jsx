import { useState } from "react";
import { Header } from "../shared/header";
import { DatePicture } from "../shared/DatePicture";

export const StepThree = ({ setStep, step }) => {
  return (
    <div className="bg-white w-120 h-180 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header
          head="Join Us! 😎"
          text="Please provide all current information accurately."
        />
      </div>
      <div>
        <DatePicture setStep={setStep} step={step} />
      </div>
    </div>
  );
};
