import NewPassword from '@/app/components/NewPassword/NewPassword';
import AuthLayout from '@/app/Layouts/AuthLayout/AuthLayout';
import React from 'react';

const Page = () => {
    return (
        <AuthLayout>
            <NewPassword/>
        </AuthLayout>
    );
}

export default Page;
