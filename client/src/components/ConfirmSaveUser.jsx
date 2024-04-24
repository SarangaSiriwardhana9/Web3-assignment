/* eslint-disable react/prop-types */
import { SlQuestion } from "react-icons/sl";

export default function ConfirmSaveUser({ onConfirm, onCancel }) {
    return (
        <div className="fixed top-0 left-0 w-full px-10 h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white  w-[420px]  rounded-md shadow-md">
                <div className="h-16 rounded-t-md bg-[#003FE4] flex items-center justify-start px-4">
                    <div className="text-white flex flex-row">
                        <SlQuestion className="text-2xl mt-1" />
                        <span className="text-lg  ml-3">Confirm </span>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-md  font-medium mb-4">Are you sure want to proseed?</p>
                    <div className="flex justify-end gap-x-4">
                        <button className="bg-white text-blue-800 border border-blue-700 rounded-sm py-1 px-8" onClick={onCancel}>No</button>
                        <button className="bg-[#003FE4] border border-blue-700 text-white rounded-sm  py-1 px-8 " onClick={onConfirm}>Yes</button>

                    </div>
                </div>
            </div>
        </div>
    );
}
