import ForgetPasswordForm from "@/app/components/ForgetPasswordForm/ForgetPasswordForm";
import AuthLayout from "@/app/Layouts/AuthLayout/AuthLayout";
import React from "react";

const Page = () => {
  return (
    <div>
      <AuthLayout>
        <ForgetPasswordForm />
      </AuthLayout>
    </div>
  );
};

export default Page;
