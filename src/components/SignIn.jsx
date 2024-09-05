import React, { useState } from 'react';
import icons from '../assets/icons'; // Adjust the path based on your project structure

const SignIn = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-xl w-[400px] p-6 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Upper Background Section */}
        <div className="w-full bg-white p-4 rounded-lg mb-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            To Sign in, enter your mobile number
          </h2>

          {/* Snapshot Background */}
          <div
            className="w-full h-24 rounded-xl mb-6 relative flex justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${icons.HomepageSnapshot})`,
            }}
          >
            {/* Optional text overlay on the snapshot if required */}
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-4">
          <span className="bg-gray-200 rounded-lg px-4 py-2 text-gray-700 font-semibold">+91</span>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="9999999999"
            className="flex-grow pl-2 py-2 bg-transparent focus:outline-none"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start mb-4 space-x-2">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={handleCheckboxChange}
            className="mt-1"
          />
          <p className="text-sm text-gray-500">
            By continuing, you accept our{' '}
            <a href="/terms" className="underline text-blue-500">
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline text-blue-500">
              Privacy Policy
            </a>.
          </p>
        </div>

        {/* Sign In Button */}
        <button
          disabled={!phoneNumber || !acceptedTerms}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            phoneNumber && acceptedTerms
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
