import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar ';
import { Outlet } from 'react-router-dom';
import { Shield, Users, FileText, Settings, Bell } from 'lucide-react';

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New user registered', time: '5 minutes ago', read: false },
    { id: 2, text: 'Monthly report ready', time: '1 hour ago', read: false },
    { id: 3, text: 'System update completed', time: '1 day ago', read: true },
  ]);

  // Admin rights array - you can easily edit this list
  const adminRights = [
    { id: 1, right: "User Management", description: "Create, edit, delete and manage all user accounts" },
    { id: 2, right: "Content Management", description: "Publish, edit, and remove all website content" },
    { id: 3, right: "System Settings", description: "Configure system parameters and global settings" },
    { id: 4, right: "Access Control", description: "Manage roles and permissions for all users" },
    { id: 5, right: "Data Export", description: "Export system data and generate reports" },
    { id: 6, right: "Security Management", description: "Configure security settings and view audit logs" }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar activeTab={activeTab} onTabClick={handleTabClick} />
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-6">
        {/* Conditional rendering based on activeTab */}
        {activeTab === 'dashboard' ? (
          <div className="space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Welcome Back, Admin</h2>
                  <p className="text-blue-100 mt-1">Here's what's happening with your store today.</p>
                </div>
                <div className="relative">
                  <button className="p-2 bg-white bg-opacity-20 rounded-full text-gray`">
                    <Bell size={20} />
                    {notifications.some(n => !n.read) && (
                      <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Admin Rights Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Shield size={20} className="text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Admin Rights & Privileges</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {adminRights.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium text-gray-800">{item.right}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // When not on dashboard, render only the Outlet
          <Outlet context={{ activeTab }} />
        )}
      </div>
    </div>
  );
};

export default AdminLayout;