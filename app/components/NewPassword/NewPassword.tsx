"use client";
import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import Link from "next/link";
import Button from "../Buttons/Button";
import ResetPassword from "@/app/Services/AuthServices/ResetPassword";
import { useRouter } from "next/navigation";
import SignInWith from "../SinInWith/SignInWith";

const NewPassword = () => {
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");
  const [error, setError] = useState("");
  const userEmail = localStorage.getItem("userEmail");
  const router = useRouter();
  const handlesubmit = async () => {
    const { response } = await ResetPassword(
      JSON.stringify({ email: userEmail, newPassword: NewPassword })
    );
    if (response.message == "Success" || response.message == "success") {
      router.push("/login");
    } else {
      setError(response.message);
    }
    console.log(response);
  };
  if (!userEmail) {
    router.push("/login");
  }
  return (
    <div className="container pt-20  flex flex-col justify-center   h-full ">
      <div className=" absolute top-[80px] left-0 right-[80px]">
        <AuthNavbar />
      </div>
      <div className="container flex flex-col gap-5">
        <h3 className="font-bold text-[25px]">Set Password</h3>
        <FormInput
          palceholder="Enter your new Password"
          value={userNewPassword}
          setValue={setUserNewPassword}
          type="password"
          name="userPassword"
          className={`${error ? "border-red-500" : ""}`}
        />
        <FormInput
          palceholder="Confirm Password"
          value={userRePassword}
          setValue={setUserRePassword}
          type="password"
          name="userrePassword"
          className={`${error ? "outline-red-700" : ""}`}
        />
        <div className="flex justify-end">
          <Link className="text-MainText" href={"/resetpassword"}>
            Recover Password?
          </Link>
        </div>

        <Button label="Sign in" variant="primary" onclick={handlesubmit} />
        <SignInWith/>

      </div>
    </div>
  );
};

export default NewPassword;
