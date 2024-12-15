import { options } from '@/app/api/auth/[...nextauth]/route';
import SigninForm from '@/app/components/SigninForm/SigninForm';
import AuthLayout from '@/app/Layouts/AuthLayout/AuthLayout';
import { getServerSession } from 'next-auth';
import React from 'react';

const Page = async () => {
    const session = await getServerSession(options)
    console.log("SESSION" , session);
    
    return (
        <>
            <AuthLayout>
                <SigninForm/>
            </AuthLayout>
        </>
    );
}

export default Page;
