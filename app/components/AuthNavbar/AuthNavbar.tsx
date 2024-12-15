import Link from 'next/link';
import React from 'react';

const AuthNavbar = () => {
    return (
        <nav className='flex gap-3 justify-end text-primary items-center'>
            <Link className='font-bold p-1' href={"/login"}>Signin</Link>
            <Link className='border-solid  border py-0.5 px-4 rounded-xl ' href={"/signup"}>Register</Link>
        </nav>
    );
}

export default AuthNavbar;
