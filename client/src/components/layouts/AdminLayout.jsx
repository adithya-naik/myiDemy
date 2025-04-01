import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar ';
import { Outlet } from 'react-router-dom';
import { BarChart, Users, FileText, Settings, Bell } from 'lucide-react';

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New user registered', time: '5 minutes ago', read: false },
    { id: 2, text: 'Monthly report ready', time: '1 hour ago', read: false },
    { id: 3, text: 'System update completed', time: '1 day ago', read: true },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // Sample analytics data
  const analyticsData = {
    visitors: { count: 1254, change: 12.5 },
    orders: { count: 543, change: 8.2 },
    revenue: { count: '$12,543', change: -2.3 },
    customers: { count: 325, change: 4.7 }
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
                  <button className="p-2 bg-white bg-opacity-20 rounded-full text-white">
                    <Bell size={20} />
                    {notifications.some(n => !n.read) && (
                      <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnalyticsCard 
                title="Total Visitors" 
                value={analyticsData.visitors.count} 
                change={analyticsData.visitors.change} 
                icon={<Users className="text-blue-500" />} 
              />
              <AnalyticsCard 
                title="Total Orders" 
                value={analyticsData.orders.count} 
                change={analyticsData.orders.change} 
                icon={<FileText className="text-green-500" />} 
              />
              <AnalyticsCard 
                title="Total Revenue" 
                value={analyticsData.revenue.count} 
                change={analyticsData.revenue.change} 
                icon={<BarChart className="text-purple-500" />} 
              />
              <AnalyticsCard 
                title="New Customers" 
                value={analyticsData.customers.count} 
                change={analyticsData.customers.change} 
                icon={<Users className="text-orange-500" />} 
              />
            </div>
            
            {/* Recent Activity & Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-start border-b border-gray-100 pb-3">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <Users size={16} className="text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800">User ID#{1000 + item} placed a new order</p>
                        <p className="text-xs text-gray-500">{item * 10} minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Notifications */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                  <button 
                    className="text-sm text-blue-600 hover:text-blue-800"
                    onClick={markAllAsRead}
                  >
                    Mark all as read
                  </button>
                </div>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-3 rounded-lg border ${notification.read ? 'border-gray-200 bg-gray-50' : 'border-blue-200 bg-blue-50'}`}
                    >
                      <div className="flex justify-between">
                        <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-800 font-medium'}`}>
                          {notification.text}
                        </p>
                        {!notification.read && <span className="h-2 w-2 bg-blue-600 rounded-full"></span>}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Settings size={20} className="text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Quick Settings</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SettingToggle label="Maintenance Mode" />
                <SettingToggle label="Allow Registrations" defaultChecked />
                <SettingToggle label="Email Notifications" defaultChecked />
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

// Analytics Card Component
const AnalyticsCard = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h4 className="text-2xl font-bold mt-1">{value}</h4>
        </div>
        <div className="p-2 bg-gray-100 rounded-md">
          {icon}
        </div>
      </div>
      <div className={`mt-4 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        <span className="font-medium">{isPositive ? '+' : ''}{change}%</span>
        <span className="text-gray-500 ml-1">from last month</span>
      </div>
    </div>
  );
};

// Setting Toggle Component
const SettingToggle = ({ label, defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);
  
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button 
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${checked ? 'bg-blue-600' : 'bg-gray-200'}`}
        onClick={() => setChecked(!checked)}
      >
        <span 
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${checked ? 'translate-x-6' : 'translate-x-1'}`} 
        />
      </button>
    </div>
  );
};

export default AdminLayout;