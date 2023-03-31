import React from 'react';
import Button from './Button';
import Title from './Title';

const Navbar = () => {
    return (
        <>
            <div className='p-2 px-10'>
                <div className='flex justify-between items-center p-2'>
                    <h2 className='text-[#2A8AE4] font-bold text-3xl'>JobsPortal</h2>
                    <div className='flex items-center'>
                        <p className='text-xl pr-10 font-semibold text-[#338573]'>Login</p>
                        <Button />
                    </div>
                </div>
            </div>
            <Title />

        </>
    );
};

export default Navbar;