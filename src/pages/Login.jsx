import React from 'react'
import { useState } from 'react';
const Login = () => {
    const [disablelogin , setdisablelogin] = useState(true);
  return (
    <div className=" px-4 py-2  text-black">
        <div className='font-sans font-semibold text-3xl text-black'>
            Signin to your <br /> PopX account
        </div>
        <div className='mt-2 font-sans font-normal text-gray-500 text-lg'>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </div>
        {/* Input fields for email and password */}
        <div className='mt-4'>
            <div className='font-sans font-semibold text-indigo-700 relative bg-white top-2 left-2 w-fit '>Email Address</div>
            <input type="email" placeholder="Email" className="border rounded-lg  border-gray-300 p-2 w-full mb-2" />
            <div className='font-sans font-semibold text-indigo-700 relative bg-white top-2 left-2 w-fit'>Password</div>
            <input type="password" placeholder="Password" className="border rounded-lg border-gray-300 p-2 w-full" />
        </div>
        {/* Login button */}
        <div className='mt-4'>
            <button className={`bg-[#7649d5] w-full text-white py-2 px-4 rounded ${disablelogin ? "opacity-50 bg-gray-500 cursor-not-allowed" : ""}`} disabled={disablelogin}> {/* Here the Disable login button is used to handle empty submits .*/}
                Login
            </button>
        </div>
    </div>
  )
}

export default Login