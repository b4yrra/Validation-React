"use client";

import { useState } from "react";
import { BackButton, Buttons2 } from "./Buttons";
import { PictureInput, ThirdInput } from "./ThirdInputs";

export const DatePicture = ({
  setStep,
  step,
  file,
  setFile,
  preview,
  setPreview,
  date,
  setDate,
}) => {
  const [error, setError] = useState("");

  const handlFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    if (file && file.type.startsWith("image/")) {
      setFile(file);
      setPreview(url);
    }
  };

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setDate(date);
    setError(date);
  };

  const picDeleteButton = () => {
    setFile(null);
  };

  const handleError = () => {
    const today = new Date();
    const validAge = new Date();
    validAge.setFullYear(today.getFullYear() - 18);

    let errorValue = false;

    if (!file) {
      setError((prev) => ({
        ...prev,
        file: "Профайл зурагаа оруулна уу",
      }));
      errorValue = true;
    }

    if (!date || isNaN(date.getTime())) {
      setError((prev) => ({ ...prev, date: "Төрсөн өдрөө оруулна уу" }));
      errorValue = true;
    } else if (date > validAge) {
      setError((prev) => ({
        ...prev,
        date: "Та 18 ба түүнээс дээш настай байх ёстой.",
      }));
      errorValue = true;
    } else {
      setError((prev) => ({ ...prev, date: "" }));
    }

    if (!errorValue) {
      setStep(step + 1);
    }
  };

  const backButton = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex flex-col justify-between items-center h-120">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <ThirdInput
            type="date"
            label="Date of birth"
            name="date"
            onChange={handleDateChange}
            error={error.date}
          />
          {error.date && <p className="text-red-500 text-xs">{error.date}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-black font-semibold text-xs">
            Profile Image <span className="text-red-500">*</span>
          </div>

          {file === null ? (
            <div className="flex flex-col gap-2">
              <PictureInput
                type="file"
                onChange={handlFileChange}
                name="picture"
              />
              {error.file && (
                <p className="text-red-500 text-xs">{error.file}</p>
              )}
            </div>
          ) : (
            <div className="flex w-104 h-60 overflow-hidden rounded-lg bg-top justify-center items-center relative">
              <img className="" src={preview} />
              <button
                onClick={picDeleteButton}
                className="bg-black absolute cursor-pointer px-2 rounded-full top-5 right-5 justify-center items-center"
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <BackButton onClick={backButton} />
        <Buttons2 onClick={handleError} text="Continue 3/3" />
      </div>
    </div>
  );
};
