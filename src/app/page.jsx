"use client";

import { useState } from "react";
import { Form } from "./_cards/Form";
import { StepThree } from "./_components/StepThree";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [date, setDate] = useState(null);

  return (
    <div className="flex gap-10 justify-center mt-30">
      <Form
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
    </div>
  );
}
