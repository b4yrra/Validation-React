"use client";

import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { FirstStep } from "../_components/FirstStep";
import { SecondStep } from "../_components/SecondStep";
import { StepThree } from "../_components/StepThree";
import { AllSet } from "../_components/AllSet";

export const Form = ({
  formData,
  setFormData,
  userInfo,
  setUserInfo,
  file,
  setFile,
  preview,
  setPreview,
  date,
  setDate,
}) => {
  const [step, setStep] = useState(0);
  const steps = [FirstStep, SecondStep, StepThree, AllSet];

  const CurrentStep = steps[step];

  return (
    <FormWrapper step={step}>
      <CurrentStep
        setStep={setStep}
        step={step}
        formData={formData}
        setFormData={setFormData}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        file={file}
        setFile={setFile}
        preview={preview}
        setPreview={setPreview}
        date={date}
        setDate={setDate}
      />
    </FormWrapper>
  );
};
