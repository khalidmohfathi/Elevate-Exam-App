"use client";
import React, { useState } from "react";

interface formInputProps {
  type: "password" | "text" | "file" | "email"|"tel";
  palceholder: string;
  value: string;
  name? :string;
  className?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const FormInput = ({ className,name,palceholder, type, value, setValue }: formInputProps) => {
  const [valid, setvalid] = useState(true);
  return (
    <input
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type={type}
      placeholder={palceholder}
      name={name}
      className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary outline-primary block w-full p-2.5`}
    ></input>
  );
};

export default FormInput;
