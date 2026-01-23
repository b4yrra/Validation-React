"use client";

export const Tags = ({ text }) => {
  return (
    <div>
      <p className="text-black font-semibold text-xs">
        {text} <span className="text-red-500">*</span>
      </p>
    </div>
  );
};

export const Input = ({ text, onChange, value, name }) => {
  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={text}
        value={value}
        onChange={onChange}
        className={`border-2 border-slate-300 w-104 h-11 rounded-lg placeholder-[#8B8E95] p-3 text-black`}
      />
    </div>
  );
};
