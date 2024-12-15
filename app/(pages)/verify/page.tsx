import VerifyOTP from '@/app/components/VerifyOTP/VerifyOTP';
import AuthLayout from '@/app/Layouts/AuthLayout/AuthLayout';
import React from 'react';

const Page = () => {
    return (
        <AuthLayout>
            <VerifyOTP/>
        </AuthLayout>
    );
}

export default Page;
