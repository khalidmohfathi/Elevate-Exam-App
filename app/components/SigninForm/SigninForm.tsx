"use client";
import React, { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import Link from "next/link";
import Button from "../Buttons/Button";
import { signIn } from "next-auth/react";
import SignInWith from "../SinInWith/SignInWith";
const SigninForm = () => {
  const [userEmail, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  useEffect(() => {
    console.log(userEmail);
  }, [userEmail]);
  return (
    <div className="container pt-20  flex flex-col justify-center   h-full ">
      <div className=" absolute top-[80px] left-0 right-[80px]">
        <AuthNavbar />
      </div>
      <div className="container flex flex-col gap-5">
        <h3 className="font-bold text-[25px]">Sign in</h3>
        <FormInput
          palceholder="Enter your Email"
          value={userEmail}
          setValue={setUserName}
          type="email"
          name="userEmail"
        />
        <FormInput
          palceholder="Enter your Password"
          value={userPassword}
          setValue={setUserPassword}
          type="password"
          name="userPassword"
        />
        <div className="flex justify-end">
          <Link className="text-MainText" href={"/resetpassword"}>
            Recover Password?
          </Link>
        </div>
        <Button
          label="Sign in"
          variant="primary"
          onclick={() => {
            signIn("credentials", {
              userEmail: userEmail,
              userPassword: userPassword,
              callbackUrl: "/",
            });
          }}
        />
        <SignInWith/>

      </div>
    </div>
  );
};

export default SigninForm;
