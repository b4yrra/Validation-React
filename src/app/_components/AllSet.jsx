import { Header } from "../shared/header";

export const AllSet = () => {
  return (
    <div className="bg-white w-120 h-48 rounded-lg">
      <div className="flex justify-center items-center h-50">
        <Header
          head="You're All Set 🔥"
          text="We have received your submission. Thank you!"
        />
      </div>
    </div>
  );
};
