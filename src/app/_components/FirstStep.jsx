const { Header } = require("../shared/header");
const { Inputs } = require("../shared/inputs");

export const FirstStep = ({ setStep, step }) => {
  return (
    <div className="bg-white w-120 h-180 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header
          head="Join Us! 😎"
          text="Please provide all current information accurately."
        />
      </div>
      <div>
        <Inputs setStep={setStep} step={step} />
      </div>
    </div>
  );
};
