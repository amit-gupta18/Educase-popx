import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row p-4 lg:items-center lg:justify-center">
            <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0 lg:justify-end">
                <img
                    src="/popx.png"
                    alt="PopX Logo"
                    className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full mx-auto lg:mx-0"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-16">
                <div className="mb-4 flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Welcome to PopX</h1>
                    <p className="text-base sm:text-lg">
                        Lorem ipsum dolor sit amet <br className="hidden sm:block" /> consectetur adipisicing elit.
                    </p>
                </div>
                <div className="mt-4 flex flex-col gap-2 w-full max-w-xs sm:max-w-sm">
                    <Link to="/register">
                        <button className="bg-[#6c25ff] font-semibold cursor-pointer text-white py-3 sm:py-4 px-4 rounded-md w-full">
                            Create Account
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-[#ceb9fa] font-semibold cursor-pointer text-gray-900 py-3 sm:py-4 px-4 rounded-md w-full">
                            Already Registered? Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing