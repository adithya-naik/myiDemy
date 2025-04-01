import React, { useEffect, useState } from 'react';
import { Trash, Search, ArrowUp, ArrowDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/admin/contacts', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDeleteContact = async (contactId) => {
    const confirmation = window.confirm('Are you sure you want to delete this contact? This action cannot be undone.');

    if (confirmation) {
      try {
        const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${contactId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete contact');
        }

        // Update the contacts state after deleting the contact
        const updatedContacts = contacts.filter((contact) => contact._id !== contactId);
        setContacts(updatedContacts);

        console.log('Contact deleted:', contactId);
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedContacts = filteredContacts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.username.localeCompare(b.username);
    } else {
      return b.username.localeCompare(a.username);
    }
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center border-b pb-4">
        <MessageCircle className="mr-2" size={24} />
        Contact Management Dashboard
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-2/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name, email or message"
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
          <p className="mt-2 text-gray-600">Loading contacts...</p>
        </div>
      ) : (
        <>
          {sortedContacts.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No contacts found matching your search criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Sno.</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedContacts.map((contact, index) => (
                    <tr key={contact._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{index+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        {contact._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-center text-gray-900">{contact.username}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-center text-gray-500">
                          <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
                            {contact.email}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500 max-w-xs">
                        <div className="truncate" title={contact.message}>
                          {contact.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex justify-center">
                          <button
                            onClick={() => handleDeleteContact(contact._id)}
                            className="p-1 cursor-pointer rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                            title="Delete contact"
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
            Showing {sortedContacts.length} of {contacts.length} contacts
          </div>
        </>
      )}
    </div>
  );
};

export default AdminContacts;