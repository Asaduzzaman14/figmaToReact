import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='py-2 px-4 lg:px-10'>
                <div className='flex justify-between items-center p-2'>
                    <h2 className='text-[#2A8AE4] font-bold text-xl lg:text-3xl'>JobsPortal</h2>
                    <div className='flex items-center'>
                        <div className='hidden md:block'>
                            <Link className='text-sm lg:text-lg pr-2 lg:pr-10 font-semibold text-[#338573]' to={'page1'}>About</Link>
                            <Link className='text-sm lg:text-lg pr-2 lg:pr-10 font-semibold text-[#338573] mx-2' to={'page2'}>CompanyProfile</Link>
                            <Link className='text-sm lg:text-lg pr-2 lg:pr-10 font-semibold text-[#338573]' to={'page3'}>Job</Link>
                        </div>

                        <p className='text-sm lg:text-lg pr-2 lg:pr-10 font-semibold text-[#338573]'>Login</p>

                        {/* navbar button */}
                        <Button />
                    </div>
                </div>
            </div>


        </>
    );
};

export default Navbar;