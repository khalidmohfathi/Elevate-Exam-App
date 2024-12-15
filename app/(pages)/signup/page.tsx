import SingUpForm from '@/app/components/SingUpForm/SingUpForm';
import AuthLayout from '@/app/Layouts/AuthLayout/AuthLayout';
import React from 'react';

const Page = () => {
    return (
        <div>
              <AuthLayout>
                <SingUpForm/>
            </AuthLayout>
        </div>
    );
}

export default Page;
