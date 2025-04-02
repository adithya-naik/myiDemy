import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { PlusCircle, Edit, Trash2, X, Save, RefreshCw } from "lucide-react";

// Color options for testimonials
const colorOptions = [
  { bg: "bg-blue-100", text: "text-blue-600", label: "Blue" },
  { bg: "bg-green-100", text: "text-green-600", label: "Green" },
  { bg: "bg-purple-100", text: "text-purple-600", label: "Purple" },
  { bg: "bg-pink-100", text: "text-pink-600", label: "Pink" },
  { bg: "bg-yellow-100", text: "text-yellow-600", label: "Yellow" },
  { bg: "bg-red-100", text: "text-red-600", label: "Red" },
  { bg: "bg-indigo-100", text: "text-indigo-600", label: "Indigo" },
  { bg: "bg-gray-100", text: "text-gray-600", label: "Gray" },
];

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600"
  });

  // Fetch testimonials when component mounts
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Fetch all testimonials
  const fetchTestimonials = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://myidemy.onrender.com/api/admin/testimonials");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setTestimonials(data.testimonials || []);
    } catch (error) {
      toast.error("Failed to fetch testimonials");
      console.error("Error fetching testimonials:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle color selection
  const handleColorSelect = (bg, text) => {
    setFormData({
      ...formData,
      bgColor: bg,
      textColor: text
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      quote: "",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    });
    setEditMode(false);
    setCurrentId(null);
    setShowForm(false);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const options = {
        method: editMode ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      };
      
      const url = editMode 
        ? `https://myidemy.onrender.com/api/admin/testimonials/${currentId}`
        : "https://myidemy.onrender.com/api/admin/testimonials";
        
      const response = await fetch(url, options);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }
      
      toast.success(editMode ? "Testimonial updated successfully" : "Testimonial created successfully");
      resetForm();
      fetchTestimonials();
    } catch (error) {
      toast.error(editMode ? "Failed to update testimonial" : "Failed to create testimonial");
      console.error("Error with testimonial operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Edit testimonial
  const handleEdit = (testimonial) => {
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      quote: testimonial.quote,
      bgColor: testimonial.bgColor || "bg-blue-100",
      textColor: testimonial.textColor || "text-blue-600"
    });
    setCurrentId(testimonial._id);
    setEditMode(true);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete testimonial
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`https://myidemy.onrender.com/api/admin/testimonials/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      toast.success("Testimonial deleted successfully");
      fetchTestimonials();
    } catch (error) {
      toast.error("Failed to delete testimonial");
      console.error("Error deleting testimonial:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Testimonials</h1>
        <div className="flex gap-2">
          <button
            onClick={() => fetchTestimonials()}
            className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
            disabled={isLoading}
          >
            <RefreshCw className="w-4 h-4 mr-2" /> Refresh
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {showForm ? (
              <>
                <X className="w-4 h-4 mr-2" /> Cancel
              </>
            ) : (
              <>
                <PlusCircle className="w-4 h-4 mr-2" /> Add Testimonial
              </>
            )}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 pb-2 border-b">
            {editMode ? "Edit Testimonial" : "Add New Testimonial"}
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quote
              </label>
              <textarea
                name="quote"
                value={formData.quote}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
                maxLength={500}
              />
              <div className="text-xs text-gray-500 mt-1">
                {formData.quote.length}/500 characters
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color Theme
              </label>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorSelect(color.bg, color.text)}
                    className={`flex items-center justify-center cursor-pointer rounded-md w-12 h-12 ${color.bg} ${
                      formData.bgColor === color.bg ? "ring-2 ring-offset-2 ring-blue-500" : ""
                    }`}
                  >
                    <span className={`font-bold ${color.text}`}>Aa</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Processing...
                  </>
                ) : editMode ? (
                  <>
                    <Save className="w-4 h-4 mr-2" /> Update Testimonial
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4 mr-2" /> Add Testimonial
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center"
              >
                <X className="w-4 h-4 mr-2" /> Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {isLoading && !showForm ? (
        <div className="text-center py-12">
          <RefreshCw className="w-12 h-12 animate-spin mx-auto text-blue-500" />
          <p className="mt-4 text-gray-600">Loading testimonials...</p>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600">No testimonials found. Add your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white rounded-lg shadow-lg p-5 flex flex-col hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${testimonial.bgColor || "bg-blue-100"}`}>
                  <span className={`font-bold text-lg ${testimonial.textColor || "text-blue-600"}`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="Edit"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(testimonial._id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;