import { Header } from "../shared/header";
import { Regex } from "../shared/regex";

export const SecondStep = ({ setStep, step, userInfo, setUserInfo }) => {
  return (
    <div className="bg-white w-120 h-180 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header
          head="Join Us! 😎"
          text="Please provide all current information accurately."
        />
      </div>
      <div>
        <Regex
          setStep={setStep}
          step={step}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </div>
    </div>
  );
};
