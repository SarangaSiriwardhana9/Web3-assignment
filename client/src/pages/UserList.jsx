import  { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from your backend API
    fetch('/api/users/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUsers(data.users);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error(error));
  }, []); // Run this effect only once on component mount

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  };

  return (
    <div className='bg-slate-100'>
      <Header />
      <div className=''>
        {/* Table Component */}
        <div className='mt-6 bg-white h-screen mb-4 rounded-md shadow-2xl m-4 mx-2 md:mx-8'>
          {/* Title component */}
          <div className='flex flex-col mt-8 ml-4 md:ml-16 '>
            <h1 className='text-3xl mt-6 font-medium text-gray-800'>User List</h1>
            <span className='text-gray-400 text-lg mt-2'>Lorem ipsum dolor sit amet consectetur. </span>
          </div>

          {/* Table */}
          <div className='px-16'>
          <table className=" mt-10   w-full divide-y divide-gray-200">
            <thead className="bg-[#F1F5FF] ">
              <tr className=''>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.basic_info.first_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.basic_info.last_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{formatDate(user.basic_info.dob)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.basic_info.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.contact_info.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.contact_info.mobile_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}
