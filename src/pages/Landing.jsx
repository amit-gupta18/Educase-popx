import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
return (
            <div className='p-4 min-h-screen flex flex-col justify-between'>
                    <div>
                            <img src="/popx.png" alt="PopX Logo" className='w-60 h-60 rounded-full  mx-auto'/>
                    </div>
                    <div className="flex flex-col ">
                            <h1 className="text-4xl font-bold">Welcome to PopX</h1>
                            <p className="mt-4 ">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                            <div className="mt-8 mb-8 flex flex-col gap-2 w-full">
                                    <Link to="/register">
                                            <button className='bg-[#6c25ff] font-semibold text-white py-4 px-4 rounded-md w-full'>Create Account</button>
                                    </Link>
                                    <Link to="/login">
                                            <button className="bg-[#ceb9fa] font-semibold text-gray-900 py-4 px-4 rounded-md w-full">Already Registered? Login</button>
                                    </Link>
                            </div>
                    </div>
            </div>  
)
}

export default Landing