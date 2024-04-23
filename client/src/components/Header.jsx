import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import logo from '/Web3.png'

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    /* responsive header that includes logo, home page, about page, and sign-in button */
    <header className='text-gray-600 body-font bg-[#2563EB] h-20 flex justify-between items-center px-4'>
      <div className="flex items-center ml-16">
      <Link to="/" >
        <img src={logo} alt="Logo" className="h-8 w-24 mr-2" />
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/user-onboarding" className="text-white mr-4">User Onboarding</Link>
        <Link to="/user-list" className="text-white mr-4">User List</Link>
        <div className="relative">
          <input type="text" className="bg-gray-200 rounded-full py-1 px-4" placeholder="Search..." />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
