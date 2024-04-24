import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function UserList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
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
      .catch(error => console.error(error))
      .finally(() => setLoading(false)); 
  }, []); 

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  };

  return (
    <div className=' bg-gray-100'>
      <Header />
      <div className=''>
        {/* Table Component */}
        <div className='mt-6 mb-6 bg-white h-screen  rounded-md shadow-2xl m-4 mx-2 md:mx-8 overflow-x-auto'>
          {/* Title component */}
          <div className='flex flex-col mt-2 ml-4 md:ml-16 '>
            <h1 className='text-3xl mt-6 font-medium text-gray-800'>User List</h1>
            <span className='text-gray-500 text-md mt-2'>Lorem ipsum dolor sit amet consectetur. </span>
          </div>

          {/* Show loading component if loading is true */}
          {loading ? (
            <div className="flex justify-center items-center h-20">
              <p>Loading...</p>
            </div>
          ) : (
            // Table
            <div className='px-2 mt-8 md:px-16'>
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-[#F1F5FF] ">
                  <tr className=''>
                    <th className="px-2 py-4 text-left text-sm font-medium text-gray-700  tracking-wider">First Name</th>
                    <th className="px-2 py-4 text-left text-sm font-medium text-gray-700  tracking-wider">Last Name</th>
                    <th className="px-2 py-4 text-left text-sm font-medium text-gray-700  tracking-wider">Date of Birth</th>
                    <th className="px-2 py-4 text-left text-sm font-medium text-gray-700  tracking-wider">Gender</th>
                    <th className="px-2 py-4 text-left text-sm font-medium text-gray-700  tracking-wider">Contact Number</th>
                    <th className="px-2 py-4 text-left text-sm font-medium text-gray-700  tracking-wider">Email</th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user._id}>
                      <td className="px-2 py-4 font-medium text-gray-500 text-sm whitespace-nowrap">{user.basic_info.first_name}</td>
                      <td className="px-2 py-4 font-medium text-gray-500 text-sm whitespace-nowrap">{user.basic_info.last_name}</td>
                      <td className="px-2 py-4 font-medium text-gray-500 text-sm whitespace-nowrap">{formatDate(user.basic_info.dob)}</td>
                      <td className="px-2 py-4 font-medium text-gray-500 text-sm whitespace-nowrap">{user.basic_info.gender}</td>
                      <td className="px-2 py-4  font-medium text-gray-500 text-sm whitespace-nowrap">{user.contact_info.mobile_number}</td>
                      <td className="px-2 py-4 font-medium text-gray-500 text-sm whitespace-nowrap">{user.contact_info.email}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
