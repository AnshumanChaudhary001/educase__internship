import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => (
  <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="w-full max-w-sm h-[90vh] bg-gray-50 shadow-sm border rounded flex flex-col justify-end p-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/signup"
              className="w-full bg-purple-700 text-white py-3 rounded-md font-medium text-center hover:bg-purple-750 transition"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="w-full bg-purple-200 text-purple-900 py-3 rounded-md font-medium text-center hover:bg-purple-300 transition"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
export default WelcomePage
