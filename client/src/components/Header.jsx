import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import logo from '/Web3.png'

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    return (
        /* responsive header that includes logo, home page, about page, and sign-in button */
        <header className='text-gray-600 body-font bg-[#2563EB] h-16 flex justify-between items-center px-4'>
            <div className="flex items-center ml-4 sm:ml-16">
                <Link to="/" >
                    <img src={logo} alt="Logo" className="h-8 w-26 mr-2" />
                </Link>
            </div>
            <div className=" flex items-center">
                <div className="  sm:flex  ">
                    <Link to="/user-onboarding" className="text-white sm:text-sm md:text-lg font-thin mr-4">User Onboarding</Link>
                    <Link to="/user-list" className="text-white sm:text-sm md:text-lg font-thin mr-4">Users List</Link>
                </div>
                <div className="px-10 hidden md:block"> 
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        <input type="text" className="bg-gray-200 rounded-sm py-2 px-12 pl-10" placeholder="Search" />
                    </div>
                </div>

            </div>
        </header>
    );
}
