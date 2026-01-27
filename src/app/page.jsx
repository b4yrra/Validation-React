"use client";

import { FirstStep } from "./_components/FirstStep";
import { SecondStep } from "./_components/SecondStep";
import { StepThree } from "./_components/StepThree";

export default function Home() {
  return (
    <div className="flex gap-10 justify-center mt-30">
      {/* <FirstStep /> */}
      <SecondStep />
      <StepThree />
    </div>
  );
}
