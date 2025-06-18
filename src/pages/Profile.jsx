import React from 'react'
import { FaCamera } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-lg font-medium text-gray-900">Account Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="p-4 bg-gray-200  border-dashed border-b-2  border-gray-400">
        <div className="flex items-start space-x-3">
          <div className="relative">
            <img
              src='./popx.png'
              alt="Profile picture"
              className="w-18 h-18 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
              <FaCamera className='h-4 w-4' color={"white"}/>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-medium text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-50">{/* Additional settings content would go here */}</div>
    </div>
  )
}

export default Profile