import React, { useState } from "react";
import { Mail, Phone, MapPin, User, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log(formData);
    
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
      
    //   if (response.ok) {
    //     setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully!' });
    //     setFormData({ username: "", email: "", message: "" });
    //   } else {
    //     const error = await response.json();
    //     setSubmitStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
    //   }
    // } catch (error) {
    //   setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  
  return (
    <section className="bg-white py-16">
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Doe"
                  />
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="john@example.com"
                  />
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Let us know how we can help you..."
                  ></textarea>
                </div>
              </div>
              
              {submitStatus && (
              <div className={`mb-6 mt-2 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
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
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">support@learningcenter.com</p>
            </div>
            
            <div>
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            
            <div>
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Tech Campus, San Francisco, CA</p>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 bg-indigo-50 border-b">
                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                  Our Location
                </h3>
              </div>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764020075986!3d37.75781499644172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647794935174!5m2!1sen!2sus" 
                  className="w-full h-96 border-0"
                  loading="lazy"
                  title="Our Office Location"
                  aria-label="Map showing our office location in San Francisco"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 Tech Campus, San Francisco, CA 94105
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  We're located in the heart of San Francisco's tech district, easily accessible by public transportation. Street parking is available, and we're a short walk from the Montgomery BART station.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}