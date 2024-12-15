"use client";
import React, { useEffect, useState } from "react";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import Button from "../Buttons/Button";
import SignUp from "@/app/Services/AuthServices/SignUp";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import SignInWith from "../SinInWith/SignInWith";

const SingUpForm = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const navigate = useRouter();
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone:false,
    password: false,
    confirmPassword:false,
  });

  const validate = () => {
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      phone:false,
      password: false,
      confirmPassword:false,
    };

    if (!userFirstName || userFirstName.length < 3) {
      newErrors.firstName = true;
    }
    if (!userLastName || userLastName.length < 3) {
      newErrors.lastName = true;
    }
    if (!userEmail || !/\S+@\S+\.\S+/.test(userEmail)) {
      newErrors.email = true;
    }
    if(!userPhone  || !/^01[1250][0-9]{8}$/.test(userPhone)) {
      newErrors.phone = true
    }
    if (!userPassword || userPassword.length < 6) {
      newErrors.password =true;
    }
    if (userPassword !== userConfirmPassword) {
      newErrors.confirmPassword = true;
    }
    setErrors(newErrors);
    console.log(newErrors);
    return !Object.values(newErrors).some((error) => error !== false);
  };

  const handleSubmit = () => {
    
    if (validate()) {
      console.log({
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
      });

      signup();
    }
  };
  const signup = async ()=>{
    console.log("skmcwqek");
    
    const formData ={
      username:userEmail.split("@")[0],
      firstName:userFirstName,
      lastName:userLastName,
      email: userEmail,
      password:userPassword,
      rePassword:userConfirmPassword,
      phone:userPhone
  }
    const data = await SignUp(JSON.stringify(formData))
    if(data.response.message=="success"){
      navigate.push("/login")
    }
  }
  return (
    <div className="container pt-20 flex flex-col justify-center h-full">
      <div className="absolute top-[80px] left-0 right-[80px]">
        <AuthNavbar />
      </div>
      <div className="container flex flex-col gap-5">
        <h3 className="font-bold text-[25px]">Sign Up</h3>
        <div>
          <FormInput
            palceholder="Enter your First Name"
            value={userFirstName}
            setValue={setUserFirstName}
            type="text"
            className={`border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
        
        </div>
        <div>
          <FormInput
            palceholder="Enter your Last Name"
            value={userLastName}
            setValue={setUserLastName}
            type="text"
            className={`border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
          
        </div>
        <div>
          <FormInput
            palceholder="Enter your Email"
            value={userEmail}
            setValue={setUserEmail}
            type="email"
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          
        </div>
        <div>
          <FormInput
            palceholder="Enter your Phone"
            value={userPhone}
            setValue={setUserPhone}
            type="tel"
            className={`border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
         
        </div>
        <div>
          <FormInput
            palceholder="Enter your Password"
            value={userPassword}
            setValue={setUserPassword}
            type="password"
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          
        </div>
        <div>
          <FormInput
            palceholder="Confirm your Password"
            value={userConfirmPassword}
            setValue={setUserConfirmPassword}
            type="password"
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
         
        </div>
    
        <div className="flex justify-end">
          <Link className="text-MainText" href={"/resetpassword"}>
            Recover Password?
          </Link>
        </div>
        <Button label="Sign up" variant="primary" onclick={()=>{
         handleSubmit()
          
        }} />
        <SignInWith/>

      </div>
    </div>
  );
};

export default SingUpForm;
