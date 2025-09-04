import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => (
  <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="w-full max-w-sm h-[90vh] bg-gray-50 border rounded p-6 flex flex-col justify-start">
        <h1 className="text-2xl font-bold text-gray-900">Signin to your <br /> PopX account</h1>
        <p className="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
        </p>

        <form className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-white py-3 rounded-md font-medium cursor-not-allowed"
            disabled
          >
            Login
          </button>
        </form>
      </div>
    </div>
)
export default LoginPage
