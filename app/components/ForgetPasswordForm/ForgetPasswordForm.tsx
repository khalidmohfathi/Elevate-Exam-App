"use client"
import React, { useEffect, useState } from "react";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import Button from "../Buttons/Button";
import GenerateOTPService from "@/app/Services/AuthServices/GenerateOTPService";
import { useRouter } from "next/navigation";
import { log } from "console";
import SignInWith from "../SinInWith/SignInWith";

const ForgetPasswordForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handelSubmit = async () => {
    if(userEmail.length == 0){
      setError("ckmewmewkvmewp,p,lew,;l,ewlpew,");
    }else{
      setError("");
      localStorage.setItem("userEmail" , userEmail)
      const {response} = await GenerateOTPService(JSON.stringify({email:userEmail}))
      if(response.message == "success"){
        setError("")
        console.log("Doneeeeeeeee");
        router.push("/verify")
      }else{
        setError(response.message)
      }
    }
  }
  return (
    <div className="container pt-20  flex flex-col justify-center   h-full ">
      <div className=" absolute top-[80px] left-0 right-[80px]">
        <AuthNavbar />
      </div>
      <div className="container flex flex-col gap-5">
        <h3 className="font-bold text-[25px]">Forget Your Password?</h3>
        <FormInput
          palceholder="Enter your Email"
          value={userEmail}
          setValue={setUserEmail}
          type="email"
          className={`${error.length?" border-red-500 ":""}`}
        />
        <div className="flex justify-end">
          <Link className="text-MainText" href={"/resetpassword"}>
            Recover Password?
          </Link>
        </div>
        <Button
          label="Sign in"
          variant="primary"
          onclick={handelSubmit}
        />
        <SignInWith/>

      </div>
    </div>
  );
};

export default ForgetPasswordForm;
