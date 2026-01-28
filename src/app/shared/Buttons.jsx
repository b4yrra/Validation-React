export const Buttons = ({ onClick, text }) => {
  return (
    <div>
      <button
        className="bg-black w-104 h-11 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        Continue 1/3
      </button>
    </div>
  );
};

export const Buttons2 = ({ onClick, text }) => {
  return (
    <div>
      <button
        className="bg-black h-11 rounded-lg cursor-pointer w-70"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export const BackButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="border border-slate-300 rounded-lg h-11 w-32 text-black cursor-pointer"
      >
        Back
      </button>
    </div>
  );
};
