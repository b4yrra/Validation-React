"use client";

import { useState } from "react";
import { Buttons } from "./Buttons";
import { Input, Tags } from "./tags";

export const Inputs = ({ setStep, step, formData, setFormData }) => {
  const [error, setError] = useState({});

  const formHandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setError({ ...error, [e.target.name]: "" });
  };

  const handleNames = () => {
    const isValid = {};
    if (formData.firstName === "") {
      isValid.firstName = "Нэрээ оруулна уу";
    }
    if (formData.lastName === "") {
      isValid.lastName = "Овгоо оруулна уу";
    }
    if (formData.userName === "") {
      isValid.userName = "Хэрэглэгчийн нэрээ оруулна уу";
    }

    if (Object.keys(isValid).length === 0) {
      setStep(step + 1);
    } else {
      setError(isValid);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-120">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Tags text={"First Name"} />
          <Input
            onChange={formHandleChange}
            value={formData.firstName}
            name="firstName"
            text="Your first name"
            error={error.firstName}
          />
          {error.firstName !== "" && (
            <p className="text-red-500 text-xs">{error.firstName}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Tags text={"Last Name"} />
          <Input
            text={"Your last name"}
            onChange={formHandleChange}
            value={formData.lastName}
            name="lastName"
            error={error.lastName}
          />
          {error.lastName !== "" && (
            <p className="text-red-500 text-xs">{error.lastName}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Tags text={"Username"} />
          <Input
            text={"Your username"}
            onChange={formHandleChange}
            value={formData.userName}
            name="userName"
            error={error.userName}
          />
          {error.userName !== "" && (
            <p className="text-red-500 text-xs">{error.userName}</p>
          )}
        </div>
      </div>
      <div>
        <Buttons onClick={handleNames} />
      </div>
    </div>
  );
};
