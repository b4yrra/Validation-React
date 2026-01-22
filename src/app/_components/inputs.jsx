"use client";

import { useState } from "react";
import { Input, Tags } from "./tags";

export const Inputs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [names, setNames] = useState([]);

  const formHandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formDataNames = () => {
    if (formData.firstName && formData.lastName && formData.userName !== "") {
      setNames([
        ...names,
        formData.firstName,
        formData.lastName,
        formData.userName,
      ]);
    }

    console.log(names);
  };

  return (
    <div className="flex flex-col justify-between items-center h-105">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Tags text={"First Name"} />
          <Input
            onChange={formHandleChange}
            value={formData.firstName}
            name="firstName"
            text="Your first name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Tags text={"Last Name"} />
          <Input
            text={"Your last name"}
            onChange={formHandleChange}
            value={formData.lastName}
            name="lastName"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Tags text={"Username"} />
          <Input
            text={"Your username"}
            onChange={formHandleChange}
            value={formData.userName}
            name="userName"
          />
        </div>
      </div>
      <div>
        <button
          className="bg-black w-104 h-11 rounded-lg cursor-pointer"
          onClick={formDataNames}
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};
