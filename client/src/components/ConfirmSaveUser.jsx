import React from 'react';

export default function ConfirmSaveUser({ onConfirm, onCancel }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-md shadow-md">
                <p className="text-lg font-semibold mb-4">Are you sure you want to save?</p>
                <div className="flex justify-end">
                    <button className="bg-[#003FE4] text-white rounded-md py-2.5 px-10 mr-4" onClick={onConfirm}>Yes</button>
                    <button className="bg-gray-300 text-gray-800 rounded-md py-2.5 px-10" onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
}
