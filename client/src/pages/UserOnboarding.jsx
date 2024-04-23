import React, { useState } from 'react';
import Header from '../components/Header';

export default function UserOnboarding() {
  const [formData, setFormData] = useState({
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
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(formData);

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
          <form onSubmit={handleSubmit} className='p-8'>
            {/* Basic Details */}
            <div className='mb-6'>
              <h2 className='text-lg font-semibold mb-4'>Basic Details</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.basic_info.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.basic_info.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.basic_info.dob}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  className="border border-gray-300 rounded-md p-2"
                />
                <select
                  id="gender"
                  name="gender"
                  value={formData.basic_info.gender}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
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
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
                  className="border border-gray-300 rounded-md p-2"
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
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
