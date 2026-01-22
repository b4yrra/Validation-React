"use client";

import { Header } from "./_components/header";
import { Inputs } from "./_components/inputs";

export default function Home() {
  return (
    <div className="flex justify-center mt-48">
      <div className="bg-white w-120 h-164 rounded-lg">
        <div className="flex justify-center items-center h-50">
          <Header />
        </div>
        <div>
          <Inputs />
        </div>
      </div>
    </div>
  );
}
