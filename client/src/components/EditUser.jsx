import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { 
  Save, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Shield, 
  AlertTriangle,
  Loader
} from 'lucide-react';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    isAdmin: false
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://myidemy.onrender.com/api/admin/users/${id}`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await response.json();
        setFormData({
          username: userData.username,
          email: userData.email,
          phone: userData.phone,
          isAdmin: userData.isAdmin
        });
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Failed to load user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, authorizationToken]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://myidemy.onrender.com/api/admin/users/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      
      // Redirect back to users list
      navigate('/admin/users');
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Failed to update user. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="p-8 bg-white rounded-lg shadow-md">
        <div className="text-center py-16">
          <div className="flex justify-center">
            <Loader size={24} className="animate-spin text-blue-500" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Loading user data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-white rounded-lg shadow-md">
        <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
          <div className="flex justify-center">
            <AlertTriangle size={24} className="text-red-500" />
          </div>
          <p className="mt-4 text-red-600 font-medium">{error}</p>
          <button 
            onClick={() => navigate('/admin/users')}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={16} />
            <span>Back to Users</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 mx-auto  md:w-1/2 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <User size={20} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Edit User</h2>
        </div>
        <button
          onClick={() => navigate('/admin/users')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1  md:grid-col gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <label htmlFor="username" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="text-blue-500" />
              <span>Username</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Mail size={16} className="text-blue-500" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Phone size={16} className="text-blue-500" />
              <span>Phone Number</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg flex items-center">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-blue-500" />
              <div>
                <div className="font-medium text-gray-700 mb-1">Admin Privileges</div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isAdmin"
                    name="isAdmin"
                    checked={formData.isAdmin}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isAdmin" className="ml-2 text-sm text-gray-600">
                    Grant administrative access
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t mt-8">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <Save size={18} />
            <span className="font-medium cursor-pointer">Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;