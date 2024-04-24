/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
export default function LoginSuccess({ onClose }) {
    return (
      <div className=''>
        <div className="fixed top-0 left-0 right-0 z-50 flex  justify-center items-start h-screen bg-gray-800 bg-opacity-50">
            <div className="bg-green-50 p-3.5 rounded-sm shadow-lg  max-w-md w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                <IoIosCheckmarkCircleOutline className='text-green-500 text-2xl' />
                    <h2 className="text-md  text-gray-800">Login Successfully</h2>
                  </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-600 focus:outline-none">
                        <IoCloseOutline  className='text-2xl'/>
                    </button>
                </div>
                
            </div>
        </div>
        </div>
    );
}
