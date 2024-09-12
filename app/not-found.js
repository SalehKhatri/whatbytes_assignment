import React from 'react';
import Link from 'next/link';
import { AlertCircle, Home } from 'lucide-react';

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 border-l-2 border-gray-100">
      <div className="max-w-md w-full space-y-8 text-center">
        <AlertCircle className="mx-auto h-24 w-24 text-red-500" />
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;