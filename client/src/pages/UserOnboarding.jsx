/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'

export default function UserOnboarding() {
    return (
        <div className='bg-slate-100'>
            <Header />
            <div className=' '>
                {/* form component */}
                <div className='   mt-6 h-screen bg-white mb-4  rounded-md shadow-2xl m-4 mx-2 md:mx-8'>
                    {/* Title component */}
                    <div className='flex flex-col mt-8 ml-4 md:ml-16 '>
                        <h1 className='text-3xl mt-6 font-medium text-gray-800'>User Onboarding</h1>
                        <span className='text-gray-400 text-lg mt-2'>Lorem ipsum dolor sit amet consectetur. </span>
                    </div>

                    {/* form component */}
                    <div className='  '>
                        <div className='  mt-8 mx-4 md:mx-16  border border-slate-300 py-3'>
                            {/* Basic details */}
                            <div className='flex flex-col  ml-2 md:ml-4 '>
                                <h1 className='text-lg mt-2 font-medium text-gray-500'>Basic Details</h1>

                                {/* input fields for first name, last name, and date of birth */}
                                <div className='flex flex-col md:flex-row md:mr-4 mt-4 md:gap-x-10'>

                                    <input type="text" placeholder="First Name" className="border border-gray-300 rounded-md p-2 mr-2   focus:outline-blue-300 text-slate-700  w-80" />
                                    <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-md p-2 mr-2 mt-2 md:mt-0 focus:outline-blue-300 text-slate-700 w-80" />
                                    <input type="date" placeholder="Date of Birth" className="border border-gray-300 rounded-md p-2 mt-2 md:mt-0 focus:outline-blue-300 text-slate-700 w-80" />
                                </div>
                                {/* Input field for gender */}
                                <div className='flex flex-row mr-2 mt-6 gap-x-2 md:mr-4'>
                                    {/* Selection box for gender */}
                                    <select className="border border-gray-300 rounded-md  py-2.5 px-1 pr-24 focus:outline-blue-300 text-slate-700 w-80" >
                                        <option value="" disabled selected className='text-slate-600  '>Select Gender</option>
                                        <option value="male" className='text-slate-700'>Male</option>
                                        <option value="female" className='text-slate-700'>Female</option>
                                    </select>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className='flex flex-col my-6 ml-2 md:ml-4 '>
                                <h1 className='text-lg mt-2 font-medium text-gray-500'>Contact Details</h1>

                                {/* input fields for email and phone number */}
                                <div className='flex flex-col md:flex-row md:mr-4 mt-4 md:gap-x-10'>

                                    <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 mr-2 focus:outline-blue-300 text-slate-700 w-80" />
                                    <input type="text" placeholder="Phone Number" className="border border-gray-300 rounded-md p-2 mt-2 md:mt-0 focus:outline-blue-300 text-slate-700 w-80" />
                                </div>
                            </div>
                        </div>
                        {/* Button component */}
                        <div className='flex flex-row mb-10 items-end justify-end pb-10 pr-16 gap-6'>
                            <div className=' justify-center mt-4'>
                                <button className='bg-white  text-blue-800 border border-blue-700 rounded-md py-2.5 px-10'>Clear</button>
                            </div>
                            <div className=' justify-center mt-4'>
                                <button className='bg-[#003FE4] text-white rounded-md py-2.5 px-10'>Save</button>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
