"use client";

import { useState } from "react";
import { BackButton, Buttons2 } from "./Buttons";
import { PictureInput, ThirdInput } from "./ThirdInputs";

export const DatePicture = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const handlFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    if (file && file.type.startsWith("image/")) {
      setFile(file);
      setPreview(url);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-120">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <ThirdInput type="date" label="Date of birth" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-black font-semibold text-xs">
            Profile Image <span className="text-red-500">*</span>
          </div>

          {file === null ? (
            <div className="flex flex-col gap-2">
              <PictureInput type="file" onChange={handlFileChange} />
            </div>
          ) : (
            <div className="flex w-104 h-60 overflow-hidden rounded-lg bg-top justify-center items-center">
              <img className="" src={preview} />
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <BackButton />
        <Buttons2 />
      </div>
    </div>
  );
};
