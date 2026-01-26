"use client";

import { useState } from "react";
import { RegexInputs } from "./regexInputs";

export const Regex = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
    passowrd: "",
    confirmPassword: "",
  });

  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <RegexInputs tag="Email" placeholder="Your email" />
      <RegexInputs tag="Phone number" placeholder="Your phone number" />
      <RegexInputs tag="Password" placeholder="Your password" />
      <RegexInputs tag="Confirm password" placeholder="Confirm password" />
    </div>
  );
};
