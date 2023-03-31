import React from 'react';

const Description = () => {
    return (
        <div className='mt-8 mb-5 px-5 lg:px-10 xl:px-22'>
            <div className=' flex justify-center gap-2 '>
                <button class="border border-black font-semibold hover:bg-slate-50 py-2 px-4 rounded">View Company</button>
                <button class="bg-[#2A8AE4] hover:bg-[#4199eb] text-white py-2 px-4 rounded">Apply This Job</button>
            </div>

            <div className='mt-3'>
                <p> <span className='font-semibold text-xl lg:text-2xl'>Minimum Qualification:</span>  Bachelor</p>
                <p> <span className='font-semibold text-xl lg:text-2xl'>Experience Level:</span>  Mid level</p>
                <p> <span className='font-semibold text-xl lg:text-2xl'>Experience Length:</span>  2 years</p>
                <p> <span className='font-semibold text-xl lg:text-2xl'>Location: </span> San Francisco, USA</p>
                <p> <span className='font-semibold text-xl lg:text-2xl'>Application Deadline:</span>  12/08/2022</p>
                <p> <span className='font-semibold text-xl lg:text-2xl'>Salary Range:</span>  $ 105,000 - 150,000</p>
            </div>

            {/* Job description */}
            <div>
                <h2 className='title lg:text-3xl'>Job description</h2>
                <p className='desc'> We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using
                    Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business.</p>
                <p className='desc'>
                    To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start
                    to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce
                    complete solutions in a short turnaround time.
                </p>
            </div>
            <div>
                <h2 className='title'> Laravel Developer Requirements:</h2>
                <div className='desc'>
                    <li>A degree in programming, computer science, or a related field.</li>
                    <li> Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
                    <li>A solid understanding of application design using Laravel.</li>
                    <li>Knowledge of database design and querying using SQL.</li>
                    <li>Proficiency in HTML and JavaScript. Experience developing in Vue is considered a plus.</li>
                    <li>Practical experience using the MVC architecture.</li>
                    <li>The ability to work on LAMP development environment</li>
                    <li> Problem-solving skills and critical mindset.</li>
                    <li>Great communication skills.</li>
                    <li>The desire and ability to learn.</li>

                    {/* Responsibilities: */}
                    <h2 className='title'>Responsibilities:</h2>
                    <li>Discussing project aims with the client and development team.</li>
                    <li>Designing and building web applications using Laravel.</li>
                    <li>Troubleshooting issues in the implementation and debug builds.</li>
                    <li>Working with front-end and back-end developers on projects.</li>
                    <li>Testing functionality for users and the backend.</li>
                    <li>Ensuring that integrations run smoothly.</li>
                    <li>Scaling projects based on client feedback.</li>
                    <li>Recording and reporting on work done in Laravel.</li>
                    <li>Maintaining web-based applications.</li>
                    <li>Presenting work in meetings with clients and management.</li>
                </div>
            </div>

        </div>
    );
};

export default Description;

