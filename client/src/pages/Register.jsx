import { useState } from "react";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import use
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  
  // Add state for validation errors
  const [validationErrors, setValidationErrors] = useState([]);

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Data being sent:", JSON.stringify(formData));

      const response = await fetch("https://myidemy.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Ensure response is read properly

      if (response.ok) {
        storeTokenInLS(data.token);
        toast.success("Registration successful!");
        // alert("Registration successful!");
        navigate("/");
        setFormData({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        console.log("User registered successfully:", data);
      } else {
        // Handle validation errors
        console.error("Registration failed:", data);
        
        if (data.errors && Array.isArray(data.errors)) {
          setValidationErrors(data.errors);
          
          // Display each validation error as a toast
          data.errors.forEach(err => {
            toast.error(err.msg);
          });
          
          // Create an alert message (commented out)
          // const errorMessages = data.errors.map(err => err.msg).join('\n');
          // alert(`Registration failed:\n${errorMessages}`);
          
          // Log errors to console
          console.error("Validation errors:", data.errors);
        } else {
          // Handle other types of errors
          toast.error(data.msg || "Registration failed");
          // alert(data.msg || "Registration failed");
          console.error("Registration error:", data.msg || "Unknown error");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      toast.error("Error during registration: " + error.message);
      // alert("Error during registration: " + error.message);
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
            Join our community
          </h1>
          <p className="text-gray-600 mb-2">
            Create an account to access exclusive courses, personalized learning
            paths, and connect with instructors worldwide.
          </p>
          <img
            src="https://media.istockphoto.com/vectors/registration-abstract-concept-vector-illustration-vector-id1305268276?k=20&m=1305268276&s=170667a&w=0&h=nL3GU92O6abaz4kbbjUIUIwYZKS7048R-U5He99LmQY="
            alt="Register illustration"
            className="w-full rounded-lg "
          />
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-600 mb-8">
            Please fill in the details to register
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

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
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
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

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Register;