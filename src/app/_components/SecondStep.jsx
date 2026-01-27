import { Header } from "../shared/header";
import { Regex } from "../shared/regex";

export const SecondStep = () => {
  return (
    <div className="bg-white w-120 h-180 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header />
      </div>
      <div>
        <Regex />
      </div>
    </div>
  );
};
