import React, { useState } from 'react';
import CustomerSignup from '../components/CustomerSignup';
import RetailerSignup from '../components/RetailerSignup';
import RegisterationImage from "../assets/Registeration.jpg";

const Signup = () => {
    const [isSeller, setIsSeller] = useState(true);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-6'>
            {/* Welcome Heading outside of the form */}
            <h1 className='text-4xl font-bold text-white mb-10'>
                Welcome to Shopping Dukan
            </h1>

            {/* Main Card Layout */}
            <div className='flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden'>
                {/* Left Section (Form and Toggle Buttons) */}
                <div className='flex flex-col lg:w-[60%] p-6 space-y-8'>
                    
                    
                    <div className='flex justify-center'>
                        <div className='bg-gray-300 flex gap-4 py-3 px-8 rounded-full'>
                            <button
                                onClick={() => setIsSeller(true)}
                                className={`${
                                    isSeller
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                                } px-6 py-2 rounded-full font-semibold transition-all duration-200`}
                            >
                                Customer
                            </button>
                            <button
                                onClick={() => setIsSeller(false)}
                                className={`${
                                    !isSeller
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                                } px-6 py-2 rounded-full font-semibold transition-all duration-200`}
                            >
                                Retailer
                            </button>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className=''>
                        {isSeller ? <CustomerSignup /> : <RetailerSignup />}
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className='lg:w-[40%] hidden lg:block'>
                    <img
                        src={RegisterationImage}
                        alt='Sign Up'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
