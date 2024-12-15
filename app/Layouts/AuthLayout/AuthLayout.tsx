import FormImage from '@/app/components/FormImage/FormImage';
import React from 'react';

interface AuthLayoutProps{
    children:React.ReactNode
}
const AuthLayout = ({children}:AuthLayoutProps) => {
    return (
        <div className="grid grid-cols-12 h-dvh">
        <div className="order-2 md:order-1 col-span-12 md:col-span-6 bg-secondary md:rounded-r-[100px]  shadow-lg">
          <div className="container py-20">
            <h2 className="font-bold text-[50px]">Welcome To</h2>
            <h1 className="font-bold text-[60px] text-MainText mb-8">Elevate</h1>
            <p className='mb-3'>
              Quidem autem voluptatibus qui quaerat <br /> aspernatur architecto
              natus
            </p>
            <FormImage />
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-12 md:col-span-6 h-dvh relative">
            {children}
        </div>
        
      </div>
       
    );
}

export default AuthLayout;
