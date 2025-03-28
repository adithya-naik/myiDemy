import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, User, MessageSquare, Send, AlertCircle } from "lucide-react";
import { useAuth } from "../store/auth";

export default function ContactForm() {
  const { userData } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (userData) {
      setFormData(prevData => ({
        ...prevData,
        username: userData.username || "",
        email: userData.email || "",
      }));
    }
  }, [userData]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear specific field error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors({});
    
    try {
      const response = await fetch('http://localhost:3000/api/form/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
        });

        // Reset form
        setFormData({ 
          username: userData?.username || "", 
          email: userData?.email || "", 
          message: "" 
        });
      } else {
        // Handle validation errors
        if (responseData.errors) {
          const errors = {};
          responseData.errors.forEach(error => {
            errors[error.path] = error.msg;
          });
          setValidationErrors(errors);

          // Show toast for overall form error
          toast.error('Please check the form for errors.', {
            position: "top-right",
            autoClose: 5000,
          });
        } else {
          // Generic error toast
          toast.error(responseData.message || 'Failed to send message.', {
            position: "top-right",
            autoClose: 5000,
          });
        }
      }
    } catch (error) {
      console.error("Detailed error:", error);
      toast.error(`Network error: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about our courses or need personalized guidance? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:border-indigo-500 
                      ${validationErrors.username 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'}`}
                    placeholder="John Doe"
                  />
                  {validationErrors.username && (
                    <div className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      {validationErrors.username}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:border-indigo-500 
                      ${validationErrors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'}`}
                    placeholder="john@example.com"
                  />
                  {validationErrors.email && (
                    <div className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      {validationErrors.email}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:border-indigo-500 
                      ${validationErrors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'}`}
                    placeholder="Let us know how we can help you..."
                  ></textarea>
                  {validationErrors.message && (
                    <div className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      {validationErrors.message}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70 flex items-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}