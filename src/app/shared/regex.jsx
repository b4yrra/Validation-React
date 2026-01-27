"use client";

import { useState } from "react";
import { RegexInputs } from "./regexInputs";
import { BackButton, Buttons2 } from "./Buttons";

export const Regex = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errorInfo, setErrorInfo] = useState({});

  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validatePhone = /^\+?\d{8}$/;

  const infoHandleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

    setErrorInfo({ ...errorInfo, [e.target.name]: "" });
  };

  const handleInfo = () => {
    const isValidInfo = {};
    const phoneLength = userInfo.phone;
    const passwordLength = userInfo.password;

    if (userInfo.email === "") {
      isValidInfo.email = "Мэйл хаягаа оруулна уу";
    } else if (!validateEmail.test(userInfo.email)) {
      isValidInfo.email = "Зөв мэйл хаяг оруулна уу";
    }

    if (userInfo.phone === "") {
      isValidInfo.phone = "Утасны дугаараа оруулна уу";
    } else if (phoneLength.length < 8) {
      isValidInfo.phone = "8 оронтой дугаар оруулна уу";
    } else if (!validatePhone.test(userInfo.phone)) {
      isValidInfo.phone = "Зөв утасны дугаар оруулна уу";
    }

    if (userInfo.password === "") {
      isValidInfo.password = "Нууц үгээ оруулна уу";
    } else if (passwordLength.length < 6) {
      isValidInfo.password = "6 оронтой тоо оруулна уу";
    }

    if (userInfo.confirmPassword === "") {
      isValidInfo.confirmPassword = "Нууц үгээ давтаж оруулна уу";
    } else if (userInfo.confirmPassword !== userInfo.password) {
      isValidInfo.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна";
    }

    setErrorInfo(isValidInfo);
  };

  return (
    <div className="flex flex-col justify-between items-center h-120">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <RegexInputs
            tag="Email"
            type="email"
            placeholder="Your email"
            name="email"
            onChange={infoHandleChange}
            errorInfo={errorInfo.email}
          />
          {errorInfo.email !== "" && (
            <p className="text-red-500 text-xs">{errorInfo.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <RegexInputs
            tag="Phone Number"
            placeholder="Your phone number"
            name="phone"
            onChange={infoHandleChange}
            errorInfo={errorInfo.phone}
          />
          {errorInfo.phone !== "" && (
            <p className="text-red-500 text-xs">{errorInfo.phone}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <RegexInputs
            tag="Password"
            placeholder="Your password"
            name="password"
            type="password"
            onChange={infoHandleChange}
            errorInfo={errorInfo.password}
          />
          {errorInfo.password !== "" && (
            <p className="text-red-500 text-xs">{errorInfo.password}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <RegexInputs
            tag="Confirm password"
            placeholder="Confirm password"
            name="confirmPassword"
            type="password"
            onChange={infoHandleChange}
            errorInfo={errorInfo.confirmPassword}
          />
          {errorInfo.confirmPassword !== "" && (
            <p className="text-red-500 text-xs">{errorInfo.confirmPassword}</p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <BackButton />
        <Buttons2 onClick={handleInfo} />
      </div>
    </div>
  );
};
