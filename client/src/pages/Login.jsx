import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  // Add state for validation errors
  const [validationErrors, setValidationErrors] = useState([]);
  
  const naviagte = useNavigate();

  const { storeTokenInLS } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send login request to backend
    try {
      console.log("Logging in user:", formData);
      const response = await fetch(`http://localhost:3000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse the JSON response
      const data = await response.json();
      console.log(data); // This will show the JSON object with msg, token, and userId

      if (response.ok) {
        // Store token in local storage
        storeTokenInLS(data.token);
        toast.success("Login successful!");
        // alert("Success to login");
        naviagte("/");
      } else {
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          setValidationErrors(data.errors);
          
          // Display each validation error as a toast
          data.errors.forEach(err => {
            toast.error(err.msg);
          });
          
          // Create an alert with all validation errors (commented out)
          // const errorMessages = data.errors.map(err => err.msg).join('\n');
          // alert(`Login failed:\n${errorMessages}`);
          
          // Log errors to console
          console.error("Validation errors:", data.errors);
        } else {
          // Handle other types of errors
          toast.error(data.msg || "Invalid Credentials");
          // alert(data.msg || "Invalid Credentials - Failed to login");
          console.error("Login error:", data.msg || "Unknown error");
        }
      }
    } catch (error) {
      console.error("Error during Login:", error.message);
      toast.error("Error during login: " + error.message);
      // alert("Error during login: " + error.message);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      
      {/* Left Column - Image */}
      <div className="hidden md:flex w-1/2  items-center justify-center">
        <div className="max-w-lg p-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">
            Welcome Back
          </h1>
          <p className="text-gray-600 mb-2">
            Log in to access your personalized dashboard, continue your courses,
            and track your learning progress.
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/991/652/original/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg"
            alt="Login illustration"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Sign In</h2>
          <p className="text-gray-600 mb-8">
            Please enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;