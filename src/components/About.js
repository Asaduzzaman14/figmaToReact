import React from 'react';
import image from '../assetes/User profile.png'
import Shape from '../assetes/Shape.png'


const About = () => {
    return (
        <div>
            <div className='md:grid grid-cols-3 gap-5 xl:gap-10'>

                <div className='p-4 lg:p-[30px] pt-[78px]'>
                    <div className=''>
                        <img className='w-[300px] h-[300px] mx-auto' src={image} alt="" />
                    </div>

                    <div className='ps-5 xl:ps-[80px] grid gap-12 mt-[56px]'>

                        <div className=''>
                            <p className='text-[#8C8CA1] font-medium text-xl lg:text-2xl'>Name</p>
                            <h3 className='text-[#3E3E3E] font-bold text-2xl lg:text-3xl pt-4'>Fabian Levy</h3>
                        </div>

                        <div className=''>
                            <p className='text-[#8C8CA1] font-medium text-2xl'>Age</p>
                            <h3 className='text-[#3E3E3E] font-bold  text-3xl'>23 years old</h3>
                        </div>
                        <div className=''>
                            <p className='text-[#8C8CA1] font-medium text-2xl'>Education</p>
                            <h3 className='text-[#3E3E3E] font-bold  text-3xl'>B Tech</h3>
                        </div>
                        <div className=''>
                            <p className='text-[#8C8CA1] font-medium text-2xl'>Skills</p>
                            <h3 className='text-[#3E3E3E] font-bold  text-3xl'>ReactJs, etc</h3>
                        </div>

                    </div>

                    <div className=' bg-gradient-to-tl from-[#4CA034] to-[#006DAF] p-5 xl:p-10 mt-10 lg:mt-12 '>
                        <img className='pb-3' src={Shape} alt="" />
                        {/* <span before="../assetes/" className='before:content-[attr(before)] text-5xl'></span> */}
                        <h2 className='p-2 lg:p-4 text-white font-bold text-2xl xl:text-[40px]'>Don’t stop when you are tired. Stop when you are done.</h2>
                        <p className='text-center font-semibold text-[#3E3E3E] '> quote by David Goggins.</p>
                        <img className='rotate-180 ms-auto' src={Shape} alt="" />
                    </div>
                </div>

                <div className='col-span-2 p-4 lg:p-[30px] pt-[78px]'>
                    <div className='p-7 bg-gray-200'>
                        <h3 className='title lg:text-3xl'>About me</h3>
                        <p className='desc'>
                            Fabian's lifestyle is quite active. He works out three times a week. His fitness routine is a healthy mix of strength-training and cardio. Apart from fitness, his priority is a healthy and balanced diet. He have some sort of a meal plan, but he is quite fliexible with it.
                            He prefers to do shopping online because it is convenient and less time-consuming, as he can do it whenever it suits him.
                            Goal
                            He is independent, curious and passionate. When he is caught up in something exciting and interesting, he can leave everything else behind.</p>
                        <h3 className='title lg:text-3xl'>Goal</h3>
                        <p className='desc'>He is independent, curious and passionate. When he is caught up in something exciting and interesting, he can leave everything else behind.</p>

                    </div>
                    <div>
                        <h3 className='title lg:text-3xl'>Education</h3>
                        <div className='desc grid gap-4'>
                            <li>Get clear overview of nutritional informatiom for his meals;</li>
                            <li>Set diet goals;</li>
                            <li>Track progress and meet deadlines.</li>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <h3 className='title lg:text-3xl'>Work Experience</h3>
                        <p className='desc'>Build muscle mass and gain weight.</p>
                    </div>
                    <div>
                        <h3 className='title lg:text-3xl'>Projects</h3>

                        <div className='grid gap-4 desc'>

                            <div className='flex'>
                                <li className=' list-item  align-middle items-center text-justify'>                                </li>
                                <div>
                                    <p>It is not easy to make informed decisions as you need to crunch a lot</p>
                                    <p> of numbers: calories intake, macronutrients ratio, nutritional value.</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <li className=' list-item  align-middle items-center text-justify'>                                </li>
                                <div>
                                    <p>It is not easy to make informed decisions as you need to crunch a lot</p>
                                    <p> of numbers: calories intake, macronutrients ratio, nutritional value.</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <li className=' list-item  align-middle items-center text-justify'>                                </li>
                                <div>
                                    <p>It is not easy to make informed decisions as you need to crunch a lot</p>
                                    <p> of numbers: calories intake, macronutrients ratio, nutritional value.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Skills and others */}

                    <div>
                        <h3 className='title lg:text-3xl'>Skills and others</h3>

                        <p className='desc'>He aspires to achieve a good physique through exercise and wants to challenge himself with a marathon scheduled for next year.</p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default About;