import { useState } from "react";
import { Header } from "../shared/header";
import { DatePicture } from "../shared/DatePicture";

export const StepThree = () => {
  return (
    <div className="bg-white w-120 h-180 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header />
      </div>
      <div>
        <DatePicture />
      </div>
    </div>
  );
};
