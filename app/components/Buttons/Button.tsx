import React from "react";
import style from "./Button.module.scss";
interface ButtonProps {
  variant: "primary" | "secondary";
  label: string;
  onclick?: () => void;
}
const Button = ({ onclick, variant, label }: ButtonProps) => {
  return (
    <button onClick={onclick} className={` ${style[variant]} rounded-xl shadow-lg`}>
      {label}
    </button>
  );
};

export default Button;
