import React, { useEffect, useState } from 'react'

const Signup = () => {
    const [formdata, setFormdata] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: ''
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormdata(prev => ({
            ...prev,
            [name]: type === 'radio' ? value : value
        }));
    };
    const handleSubmit = (e) => {
        if (e) e.preventDefault(); // Prevent default form submission if event is passed
        setFormdata({
            fullName: '',
            phone: '',
            email: '',
            password: '',
            company: '',
            agency: ''
        }); // Reset form data
        
    }

    return (
        <div className="px-4 py-4 text-black">
            <form onSubmit={handleSubmit}>
                <div className='min-h-[80vh]  flex flex-col justify-between   mt-2 '>
                    <div className='mt-2 font-sans font-normal text-gray-500 text-lg'>
                        <div className='font-sans font-semibold text-3xl text-black'>
                            Create your <br /> PopX account
                        </div>
                        {/* Input fields for email and password */}

                        <div className='font-sans font-semibold text-indigo-700 relative bg-white top-2 left-2 w-fit '>Full Name <span className='text-red-500'>*</span></div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="border rounded-lg  border-gray-300 p-2 w-full mb-2 focus:outline-none focus:border-indigo-600"
                            value={formdata.fullName}
                            onChange={handleChange}
                            required
                        />
                        <div className='font-sans font-semibold text-indigo-700 relative bg-white top-2 left-2 w-fit'>Phone Number <span className='text-red-500'>*</span></div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="border rounded-lg  border-gray-300 p-2 w-full mb-2 focus:outline-none focus:border-indigo-600"
                            value={formdata.phone}
                            onChange={handleChange}
                            required
                        />
                        <div className='font-sans font-semibold text-indigo-700 relative bg-white top-2 left-2 w-fit'>Email Address <span className='text-red-500'>*</span></div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border rounded-lg  border-gray-300 p-2 w-full mb-2 focus:outline-none focus:border-indigo-600"
                            value={formdata.email}
                            onChange={handleChange}
                            required
                        />
                        <div className='font-sans font-semibold text-indigo-700 relative bg-white top-2 left-2 w-fit'>Password <span className='text-red-500'>*</span></div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="border rounded-lg border-gray-300 p-2 w-full focus:outline-none focus:border-indigo-600"
                            autoComplete="current-password"
                            value={formdata.password}
                            onChange={handleChange}
                            required
                        />
                        <div className='font-sans font-semibold text-indigo-700 relative bg-white top-2 left-2 w-fit'>Company Name</div>
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            className="border rounded-lg  border-gray-300 p-2 w-full mb-2 focus:outline-none focus:border-indigo-600"
                            value={formdata.company}
                            onChange={handleChange}
                        />
                        <div>Are you an Agency  <span className='text-red-500'>*</span></div>
                        <div className='flex items-center mt-2'>
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                checked={formdata.agency === "yes"}
                                onChange={handleChange}
                                className="mr-2"
                                required
                            />
                            <label className='font-sans font-semibold text-indigo-700'>Yes</label>
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                checked={formdata.agency === "no"}
                                onChange={handleChange}
                                className="ml-4 mr-2"
                                required
                            />
                            <label className='font-sans font-semibold text-indigo-700'> No</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit"  className="bg-[#7649d5] cursor-pointer not-open:mt-4 text-white py-2 px-4 w-full rounded-lg hover:bg-[#5e38b0] transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup