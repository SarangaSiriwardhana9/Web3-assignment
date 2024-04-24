/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';
import LoginSuccess from '../components/LoginSuccess.jsx';
import LoginFailAlert from '../components/LoginFailAlert.jsx'; 

export default function Login() {
    const [formData, setFormData] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailAlert, setShowFailAlert] = useState(false); 
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success === false) {
                dispatch(signInFailure(data));
                setShowFailAlert(true); // Set showFailAlert to true when login fails
            } else {
                dispatch(signInSuccess(data));
                setShowSuccess(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
            console.log(data);
        } catch (error) {
            dispatch(signInFailure(error));
            console.error(error);
            alert('Something went wrong !');
        }
    };

    return (
        <div className=' '>
            {showSuccess && <LoginSuccess onClose={() => setShowSuccess(false)} />}
            {showFailAlert && <LoginFailAlert message="Invalid email or password" onClose={() => setShowFailAlert(false)} />} {/* Render the custom alert */}
            <div className="min-h-screen flex items-center justify-center bg-white py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl w-full px-20 py-10 pb-20" style={{ borderWidth: '25px 2px 2px 2px', borderColor: '#2563EB', borderStyle: 'solid' }}>
                    <div className="mb-16">
                        <h2 className="text-center text-3xl mb-2 text-gray-600 font-semibold">Login</h2>
                        <span className="inline-block text-center text-gray-500 ">
                            Lorem ipsum dolor sit amet consectetur. Risus commodo faucibus pellentesque habitan. Tincidunt
                        </span>
                    </div>
                    <form className="mt-8 space-y-2" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div className="gap-y">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email || ''}
                                    onChange={handleChange}
                                    className="appearance-none placeholder:text-zinc-400 relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
                                    placeholder="Email "
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password || ''}
                                    onChange={handleChange}
                                    className="appearance-none placeholder:text-zinc-400  relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="flex items-end justify-end pb-8">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-[#6a7075] hover:text-[#565b5f]">
                                    Forgot Password
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563EB] hover:bg-[#259cebe3] focus:outline-none "
                                style={{ transition: 'background-color 0.5s ease' }}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
