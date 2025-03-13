import React from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-6">
          <h1 className="inline-block text-9xl font-extrabold text-indigo-600">404</h1>
        </div>
        
        <h2 className="mb-2 text-3xl font-bold text-gray-900">Page not found</h2>
        
        <p className="mb-8 text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved, 
          deleted, or perhaps the URL was mistyped.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 font-medium border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <Link 
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
        
        <div className="mt-12 px-4">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Looking for something specific?</h3>
          
          {/* <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search for pages, resources, courses..."
            />
          </div> */}
          
          <div className="mt-2">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Popular Pages</h4>
            <div className="flex flex-wrap justify-center gap-1">
              {["Home", "About", "Services", "Contact", "Login", "Register"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}