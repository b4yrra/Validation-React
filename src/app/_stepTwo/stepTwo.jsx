import { Header } from "../_components/header";
import { Regex } from "./regex";

export const SecondStep = () => {
  return (
    <div className="bg-white w-120 h-164 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header />
      </div>
      <div>
        <Regex />
      </div>
    </div>
  );
};
