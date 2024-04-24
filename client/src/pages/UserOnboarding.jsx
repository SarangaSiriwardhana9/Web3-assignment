/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Header from '../components/Header';
import ConfirmSaveUser from '../components/ConfirmSaveUser';
import { useSnackbar } from 'notistack';

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
    const { enqueueSnackbar } = useSnackbar();

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
                // Show success alert
                enqueueSnackbar('User added successfully! 😍', {
                    variant: 'success',
                    autoHideDuration: 1000,
                    style: {
                        backgroundColor: 'white',
                        color: '#003FE4',
                        fontSize: '16px',
                    }
                });
                setFormData(initialFormData);
            } else {
                enqueueSnackbar('user allready existes ☹️', {
                    variant: 'error', autoHideDuration: 1000, style: {
                        backgroundColor: 'white',
                        color: '#aa4d4d',
                        fontSize: '16px',

                    }
                });

            }
        } catch (error) {
            console.error(error);
            enqueueSnackbar('Failed to add user ☹️', {
                variant: 'error', autoHideDuration: 1000, style: {
                    backgroundColor: 'white',
                    color: '#aa4d4d',
                    fontSize: '16px',
                }
            });
        }
        setShowConfirm(false);
    };

    const handleCancelSave = () => {
        setShowConfirm(false);
    };

    return (
        <div className='bg-gray-100'>
            <Header />
            <div className=''>
                {/* form component */}
                <div className='mt-6 bg-white h-screen mb-6 rounded-md shadow-2xl m-4 mx-2 md:mx-8'>
                    {/* Title component */}
                    <div className='flex flex-col mt-8 ml-4 md:ml-14 '>
                        <h1 className='text-3xl mt-6 font-medium text-gray-800'>User Onboarding</h1>
                        <span className='text-gray-500 text-md mt-2'>Lorem ipsum dolor sit amet consectetur. </span>
                    </div>

                    {/* form component */}
                    <div className='mx-12 '>
                        <form onSubmit={handleSubmit} className='p-8 px-2 '>
                            <div className='border'>
                                {/* Basic Details */}
                                <div className='mb-6 px-6'>
                                    <h2 className='text-lg font-semibold text-gray-600 mb-4'>Basic Details</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        <input
                                            type="text"
                                            id="first_name"
                                            name="first_name"
                                            value={formData.basic_info.first_name}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700"
                                        />
                                        <input
                                        required
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            value={formData.basic_info.last_name}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700"
                                        />
                                        <input
                                        required
                                            type="date"
                                            id="dob"
                                            name="dob"
                                            value={formData.basic_info.dob}
                                            onChange={handleChange}
                                            placeholder="Date of Birth"
                                            className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700"
                                        />
                                        <select
                                        required
                                            id="gender"
                                            name="gender"
                                            value={formData.basic_info.gender}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700"
                                        >
                                            <option className='text-slate-400' value="" disabled> Gender</option>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className='mb-6 px-6'>
                                    <h2 className='text-lg font-semibold text-gray-600 mb-4'>Contact Details</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                        <input
                                        required
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
                                            placeholder="Mobile Number"
                                            className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700"
                                        />
                                        <input
                                        required
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
                                            className="border border-gray-300 rounded-md p-2 focus:outline-blue-300 text-slate-700"
                                        />

                                    </div>
                                </div>

                            </div>
                            {/* Button component */}
                            <div className='flex flex-col mb-2 mt-10 md:flex-row md:justify-end md:pb-10 pr-4  gap-2'>
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