const { Header } = require("./header");
const { Inputs } = require("./inputs");

export const FirstStep = () => {
  return (
    <div className="bg-white w-120 h-164 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header />
      </div>
      <div>
        <Inputs />
      </div>
    </div>
  );
};
