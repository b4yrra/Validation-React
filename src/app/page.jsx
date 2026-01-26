"use client";

import { FirstStep } from "./_components/stepOne";
import { SecondStep } from "./_stepTwo/stepTwo";

export default function Home() {
  return (
    <div className="flex gap-10 justify-center mt-48">
      <FirstStep />
      <SecondStep />
    </div>
  );
}
