import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Edit, Trash, Search, ArrowUp,User, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AdminUsers = () => {
  
const navigate = useNavigate()
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/admin/users', {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [authorizationToken]);

  const handleEditUser = (userId) => {
    navigate(`/admin/users/${userId}/edit`);
  };



  const handleDeleteUser = async (userId) => {
    const confirmation = window.confirm('Are you sure you want to delete this user? This action cannot be undone.');
    
    if (confirmation) {
      try {
        const response = await fetch(`http://localhost:3000/api/admin/users/delete/${userId}`, {
          method: 'DELETE',
         
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        
        // Update the users state after deleting the user
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
        
        console.log('User deleted:', userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.username.localeCompare(b.username);
    } else {
      return b.username.localeCompare(a.username);
    }
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center border-b pb-4">
       <User className="mr-2" size={24}/> User Management Dashboard
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-2/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort:</span>
          <button
            onClick={() => setSortOrder('asc')}
            className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
              sortOrder === 'asc' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ArrowUp size={16} className="mr-1" /> A-Z
          </button>
          <button
            onClick={() => setSortOrder('desc')}
            className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
              sortOrder === 'desc' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ArrowDown size={16} className="mr-1" /> Z-A
          </button>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading users...</p>
        </div>
      ) : (
        <>
          {sortedUsers.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No users found matching your search criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 ">
                  <tr >
                    <th className="px-6 py-3 text-center  text-xs font-medium text-gray-500 uppercase tracking-wider">Sno.</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">privilege</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedUsers.map((user, index) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{index+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{user._id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-center text-gray-900">{user.username}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-center text-gray-500">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.isAdmin 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.isAdmin ? 'Admin' : 'User'}
                        </span>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap text-sm font-medium">
                        <div className="flex justify-center space-x-8">
                          <button
                            onClick={() => handleEditUser(user._id)}
                            className="p-1 cursor-pointer rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            title="Edit user"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="p-1 cursor-pointer rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                            title="Delete user"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          <div className="mt-4 text-sm text-gray-500">
            Showing {sortedUsers.length} of {users.length} users
          </div>
        </>
      )}
    </div>
  );
};

export default AdminUsers;