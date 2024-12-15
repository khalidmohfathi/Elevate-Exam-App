"use client";
import React, { useEffect, useState } from "react";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import Button from "../Buttons/Button";
import GenerateOTPService from "@/app/Services/AuthServices/GenerateOTPService";
import CheckOTP from "@/app/Services/AuthServices/CheckOTP";
import { useRouter } from "next/navigation";
import SignInWith from "../SinInWith/SignInWith";

const VerifyOTP = () => {
  const [userOTP, setUserOTP] = useState("");
  const [error, setError] = useState("");
    const router = useRouter()
  const handelSubmit = async () => {
    console.log("alkfneoknewoi");
    
    const { response } = await CheckOTP(JSON.stringify({ resetCode: userOTP }));
    console.log(response);
    
    if (response.status == "Success") {
        console.log("sakkodqw");
        
        router.push("/newpassword");
    } else {
      setError(response.message);
    }
  };
  return (
    <div className="container pt-20  flex flex-col justify-center   h-full ">
      <div className=" absolute top-[80px] left-0 right-[80px]">
        <AuthNavbar />
      </div>
      <div className="container flex flex-col gap-5">
        <h3 className="font-bold text-[25px]">Verify Code</h3>
        <FormInput
          palceholder="Enter your OTP"
          value={userOTP}
          setValue={setUserOTP}
          type="text"
        />

        <div className="flex justify-end">
          Didn't receive a code?{" "}
          <Link className="text-MainText" href={"/resetpassword"}>
            Resend
          </Link>
        </div>
        {error && (
          <div className="bg-red-300 text-red-600 border-red-800 p-3 rounded-lg  border">
            {error}
          </div>
        )}
        <Button label="Verify" variant="primary" onclick={handelSubmit} />
        <SignInWith/>

      </div>
    </div>
  );
};

export default VerifyOTP;
