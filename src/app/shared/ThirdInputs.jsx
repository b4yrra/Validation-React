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
    <div>
      <input
        type={type}
        onChange={onChange}
        name={name}
        placeholder="Browse or Drop Image"
        className="border  w-104 h-60 rounded-lg placeholder-[#8B8E95] p-3 text-black border-slate-300 cursor-pointer bg-[#7F7F800D]"
      />
    </div>
  );
};
