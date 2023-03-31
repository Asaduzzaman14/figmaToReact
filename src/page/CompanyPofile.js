import React from 'react';
import logo from '../assetes/BMW_logo_(gray).svg.png'

const CompanyPofile = () => {
    return (
        <div className='px-16'>
            <div>
                <img src={logo} className='text-4xl mt-10 mb-6 w-[300px] h-[300px]  mx-auto' alt='company-Logo'></img>
                <h2 className='font-bold text-2xl text-center pb-14'>COMPANY NAME</h2>
                <div className='font-sans text-[#666666] leading-10'>
                    <p>Company Description:</p>
                    <p> For over 200 years, JPMorgan Chase & Co has provided innovative financial solutions for consumers, small businesses, corporations, governments and institutions around the world.</p>

                    <p> Today, we're a leading global financial services firm with operations servicing clients in more than 100 countries.</p>
                    <p>Whether we are serving customers, helping small businesses, or putting our skills to work with partners, we strive to identify issues and propose solutions that will propel the future and strengthen both our clients and our communities.</p>
                    <p>© 2017 JPMorgan Chase & Co.  JPMorgan Chase is an equal opportunity and affirmative action employer Disability/Veteran.</p>
                </div>
            </div>
            <div className=' mb-10'>
                <h2 className='text-xl lg:text-lg xl:text-2xl uppercase text-center font-bold mt-[150px]'>Company Details</h2>
                <div className='flex justify-center'>
                    <ul className='grid gap-5 mt-5 lg:mt-8 text-[#666666]'>
                        <li className='flex justify-between'>
                            <span>Website: </span>
                            <span className=''>www.abc.com </span>
                        </li>
                        <li className='flex justify-between'>

                            <span>Industry: </span>
                            <span>Lindsay Labahn </span>
                        </li>
                        <li className='flex justify-between gap-4'>

                            <span>Company Size: </span>
                            <span>Lindsay Labahn </span>
                        </li>
                        <li className='flex justify-between'>

                            <span>Headquarter: </span>
                            <span>Lindsay Labahn </span>
                        </li>
                        <li className='flex justify-between'>

                            <span>Specialties: </span>
                            <span>Lindsay Labahn </span>
                        </li>
                        <li className='flex justify-between'>
                            <span>Openings: </span>
                            <span>Lindsay Labahn </span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompanyPofile;