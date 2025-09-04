import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-white ">
    <div className="w-full max-w-sm p-6  bg-gray-50 border rounded shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 leading-snug">
        Create your <br /> PopX account
      </h1>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-800">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="mt-1 w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="mt-1 w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Marry Doe"
            className="mt-1 w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Marry Doe"
            className="mt-1 w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800">
            Company name
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="mt-1 w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                className="text-purple-600 focus:ring-purple-600"
                defaultChecked
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                className="text-purple-600 focus:ring-purple-600"
              />
              No
            </label>
          </div>
        </div>
        <Link
          to="/account"
          className="block w-full bg-purple-600 text-white py-3 rounded font-semibold text-center hover:bg-purple-700 transition"
        >
          Create Account
        </Link>
      </form>
    </div>
  </div>
);

export default SignupPage;
