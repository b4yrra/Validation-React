export const RegexInputs = ({ tag, type, placeholder, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black font-semibold text-xs">
        {tag} <span className="text-red-500">*</span>
      </label>
      <input
        className="border border-slate-300 w-104 h-11 rounded-lg placeholder-[#8B8E95] p-3 text-black"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
