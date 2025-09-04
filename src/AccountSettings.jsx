import React from "react";

const AccountSettings = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md h-[90vh] border border-gray-600  shadow-sm flex flex-col">
        {/* Header (white background) */}
        <div className="bg-white  px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        {/* Content area (gray-50 background) */}
        <div className="flex-1 bg-gray-50 flex flex-col">
          {/* Profile Section */}
          <div className="px-6 py-6">
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                {/* Camera icon */}
                <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11a3 3 0 100 6 3 3 0 000-6z"
                    />
                  </svg>
                </div>
              </div>

              {/* Name + Email */}
              <div>
                <h3 className="text-md font-semibold text-gray-900">Marry Doe</h3>
                <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-bold text-gray-700 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
            
          </div>
           <div className="border-t border-dashed mt-auto py-4 px-6 bg-gray-50"></div>
           <div className="h-80"></div>
          <div className="border-t border-dashed mt-auto py-4 px-6 bg-gray-50">
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
