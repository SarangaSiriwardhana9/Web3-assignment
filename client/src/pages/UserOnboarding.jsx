/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Header from '../components/Header';
import ConfirmSaveUser from '../components/ConfirmSaveUser';

export default function UserOnboarding() {
    const initialFormData = {
        basic_info: {
            first_name: '',
            last_name: '',
            dob: '',
            gender: ''
        },
        contact_info: {
            email: '',
            mobile_number: ''
        }
    };

    const [formData, setFormData] = useState(initialFormData);
    const [showConfirm, setShowConfirm] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            basic_info: {
                ...prevFormData.basic_info,
                [name]: value
            }
        }));
    };

    const handleClear = () => {
        setFormData(initialFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const handleConfirmSave = async () => {
        try {
            const res = await fetch("/api/users/add-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success) {
                alert("User added successfully");
                setFormData(initialFormData);
            } else {
                alert("email already exists")
            }
        } catch (error) {
            console.error(error);
            alert("Failed to add user");
        }
        setShowConfirm(false);
    };

    const handleCancelSave = () => {
        setShowConfirm(false);
    };

    return (
        <div className='bg-slate-100'>
            <Header />
            <div className=''>
                {/* form component */}
                <div className='mt-6 bg-white h-screen mb-4 rounded-md shadow-2xl m-4 mx-2 md:mx-8'>
                    {/* Title component */}
                    <div className='flex flex-col mt-8 ml-4 md:ml-16 '>
                        <h1 className='text-3xl mt-6 font-medium text-gray-800'>User Onboarding</h1>
                        <span className='text-gray-400 text-lg mt-2'>Lorem ipsum dolor sit amet consectetur. </span>
                    </div>

                    {/* form component */}
                    <div className='ml-16'>
                    <form onSubmit={handleSubmit} className='p-8 px-1'>
                        {/* Basic Details */}
                        <div className='mb-6'>
                            <h2 className='text-lg font-semibold mb-4'>Basic Details</h2>
                            <div className='flex flex-col md:flex-row md:mr-4 mt-4 md:gap-x-10'>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    value={formData.basic_info.first_name}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700 w-full md:w-96"
                                />
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    value={formData.basic_info.last_name}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700 w-full md:w-96 mt-4 md:mt-0"
                                />
                                <input
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    value={formData.basic_info.dob}
                                    onChange={handleChange}
                                    placeholder="Date of Birth"
                                    className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700 w-full md:w-96 mt-4 md:mt-0"
                                />
                             
                            </div>
                            <div className='flex md:w-[380px] flex-col md:flex-row md:mr-4 mt-4 md:gap-x-10'>
                            <select
                                    id="gender"
                                    name="gender"
                                    value={formData.basic_info.gender}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md px-1 py-2.5  focus:outline-blue-300 text-slate-700 w-full md:w-96 mt-4 md:mt-0"
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </select>
                                
                                </div> 
                        </div>
                        {/* Contact Details */}
                        <div className='mb-6'>
                            <h2 className='text-lg font-semibold mb-4'>Contact Details</h2>
                            <div className='flex flex-col md:flex-row md:mr-4 mt-4 md:gap-x-10'>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.contact_info.email}
                                    onChange={(e) => setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        contact_info: {
                                            ...prevFormData.contact_info,
                                            email: e.target.value
                                        }
                                    }))}
                                    placeholder="Email"
                                    className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700 w-full md:w-96"
                                />
                                <input
                                    type="text"
                                    id="mobile_number"
                                    name="mobile_number"
                                    value={formData.contact_info.mobile_number}
                                    onChange={(e) => setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        contact_info: {
                                            ...prevFormData.contact_info,
                                            mobile_number: e.target.value
                                        }
                                    }))}
                                    placeholder="Phone Number"
                                    className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700 w-full md:w-96 mt-4 md:mt-0"
                                />
                            </div>
                        </div>
    
                        {/* Button component */}
                        <div className='flex flex-col md:flex-row md:justify-end md:pb-10 pr-4 md:pr-16 gap-2'>
                            <div className=''>
                                <button type='button' onClick={handleClear} className='bg-white text-blue-800 border border-blue-700 rounded-md h-12  px-12 md:mr-4'>Clear</button>
                            </div>
                            <div className=''>
                                <button type='submit' className='bg-[#003FE4] text-white rounded-md h-12 px-12'>Save</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            {showConfirm && <ConfirmSaveUser onConfirm={handleConfirmSave} onCancel={handleCancelSave} />}
        </div>
    );
}