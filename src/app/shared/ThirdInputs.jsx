"use client";

export const ThirdInput = ({ label, type, onChange, name, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black font-semibold text-xs">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        onChange={onChange}
        className={`border  w-104 h-11 rounded-lg placeholder-[#8B8E95] p-3 text-black  ${error ? "border-red-500" : "border-slate-300"} cursor-pointer`}
        name={name}
      />
    </div>
  );
};

export const PictureInput = ({ type, onChange, name }) => {
  return (
    <div className="relative flex justify-center items-center w-104 h-60">
      <div className="absolute flex flex-col items-center gap-2">
        <img src="image.png" className="w-3 h-3" />
        <div className="text-black text-[14px] font-medium">
          Browse or Drop Image
        </div>
      </div>
      <input
        type={type}
        onChange={onChange}
        name={name}
        placeholder="Browse or Drop Image"
        className="border h-full w-full rounded-lg placeholder-[#8B8E95] p-3 text-transparent border-slate-300 cursor-pointer bg-[#7F7F800D]"
      />
    </div>
  );
};
