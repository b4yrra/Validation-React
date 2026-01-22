"use client";

export const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <img src="logo.png" alt="" className="w-14" />
      <h1 className="text-black text-2xl font-semibold">Join Us! 😎</h1>
      <p className="text-lg text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
