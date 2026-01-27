export const RegexInputs = ({
  tag,
  type,
  placeholder,
  onChange,
  name,
  errorInfo,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black font-semibold text-xs">
        {tag} <span className="text-red-500">*</span>
      </label>
      <input
        className={`border  w-104 h-11 rounded-lg placeholder-[#8B8E95] p-3 text-black ${errorInfo === undefined ? "border-slate-300" : "border-red-500"}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
