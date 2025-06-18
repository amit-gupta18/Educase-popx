import React from 'react'
import { useState , useEffect} from 'react';
const Login = () => {
    const [disablelogin, setdisablelogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


        const handleLogin = () => {
            if (username.trim() === "" || password.trim() === "") {
                setdisablelogin(true);
            } else {
                setdisablelogin(false);
                console.log("Logging in with", username, password);
            }
        }
    useEffect(() => {
        handleLogin();
    }, [username, password]);

    return (
        <div className="px-4 py-4 text-black">
            <div className='font-sans font-semibold text-3xl text-black'>
                Sign in to your <br /> PopX account
            </div>
            <div className='mt-2 font-sans font-normal text-gray-500 text-lg'>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </div>
            <form
                className="mt-4"
                onSubmit={e => {
                    e.preventDefault();
                    if (disablelogin) {
                        alert("Please fill in all fields.");
                        return;
                    }
                    console.log("Logging in with", username, password);
                }}
            >
                <label className='font-sans relative top-3 left-2 bg-white w-fit  font-semibold text-indigo-700 block mb-1' htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="border rounded-lg border-gray-300 p-2 w-full mb-3 focus:outline-none focus:border-indigo-600"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <label className='font-sans font-semibold relative top-3 left-2 bg-white w-fit text-indigo-700 block mb-1' htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="border rounded-lg border-gray-300 p-2 w-full mb-3 focus:outline-none focus:border-indigo-600"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                />
                <button
                    type="submit"
                    className={`bg-[#7649d5] w-full text-white py-2 px-4 rounded transition-opacity duration-200 ${disablelogin ? "opacity-50 bg-gray-500 cursor-not-allowed" : "bg-[#7649d5] hover:bg-[#5a3bb0]"}`}
                    disabled={disablelogin}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login