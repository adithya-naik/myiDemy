import React, { useEffect, useState } from "react";
import { 
  Edit,
  Trash2,
  Plus,
  Search,
  ArrowUpDown,
  User,
  ClipboardList
} from "lucide-react";

const AdminTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentMember, setCurrentMember] = useState({
    name: "",
    role: "",
    image: "",
    bio: "",
    expertise: []
  });
  const [tempExpertise, setTempExpertise] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("ascending");

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      // Fixed API URL to match the backend route
      const response = await fetch("https://myidemy.onrender.com/api/admin/team");
      const data = await response.json();
      setTeamMembers(data.teamMembers);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMember({
      ...currentMember,
      [name]: value
    });
  };

  const handleExpertiseKeyDown = (e) => {
    if (e.key === 'Enter' && tempExpertise.trim()) {
      e.preventDefault();
      if (!currentMember.expertise.includes(tempExpertise.trim())) {
        setCurrentMember({
          ...currentMember,
          expertise: [...currentMember.expertise, tempExpertise.trim()]
        });
      }
      setTempExpertise("");
    }
  };

  const removeExpertise = (index) => {
    const updatedExpertise = [...currentMember.expertise];
    updatedExpertise.splice(index, 1);
    setCurrentMember({
      ...currentMember,
      expertise: updatedExpertise
    });
  };

  const resetForm = () => {
    setCurrentMember({
      name: "",
      role: "",
      image: "",
      bio: "",
      expertise: []
    });
    setTempExpertise("");
    setIsEditMode(false);
  };

  const openModal = (member = null) => {
    if (member) {
      setCurrentMember(member);
      setIsEditMode(true);
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fixed API URLs to match the backend routes
      const url = isEditMode
        ? `https://myidemy.onrender.com/api/admin/team/${currentMember._id}`
        : "https://myidemy.onrender.com/api/admin/team";
      
      const method = isEditMode ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentMember),
      });

      if (response.ok) {
        fetchTeamMembers();
        closeModal();
      } else {
        const error = await response.json();
        console.error("Error saving team member:", error);
      }
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      try {
        // Fixed API URL to match the backend route
        const response = await fetch(
          `https://myidemy.onrender.com/api/admin/team/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          fetchTeamMembers();
        } else {
          const error = await response.json();
          console.error("Error deleting team member:", error);
        }
      } catch (error) {
        console.error("Error deleting team member:", error);
      }
    }
  };

  // Rest of the component remains the same...
  
  // Toggle sort direction function
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending');
  };

  // Get sorted and filtered data
  const getSortedAndFilteredData = () => {
    const filteredData = teamMembers.filter(member => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    return [...filteredData].sort((a, b) => {
      if (a.name < b.name) {
        return sortDirection === 'ascending' ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortDirection === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const sortedAndFilteredData = getSortedAndFilteredData();

  // Generate default avatar if image URL is not available
  const getAvatarUrl = (name, imageUrl) => {
    if (imageUrl && !imageUrl.includes("undefined")) {
      return imageUrl;
    }
    return `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(name)}`;
  };

  return (
    <div className="container mx-auto">
    <div className="py-4">
      <div className="flex flex-row justify-between space-x-3 w-full mb-1 sm:mb-0">
        <div className="flex items-center">
          <ClipboardList className="mr-2" size={24} />
          <h2 className="text-2xl font-bold">Team Members Management</h2>
        </div>
        <div className="text-end">
          <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Search"
                className="rounded-l px-4 py-2 border border-gray-300 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="button" 
                className="rounded-r px-4 py-2 border-t border-r border-b border-gray-300 bg-gray-50 cursor-pointer"
              >
                <Search size={20} className="text-gray-600" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => openModal()}
              className="flex items-center justify-center px-4 py-2 bg-blue-600 border border-blue-600 rounded text-white hover:bg-blue-700 cursor-pointer"
            >
              <Plus size={20} className="mr-2" />
              <span>Add Member</span>
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                <button
                  onClick={toggleSortDirection}
                  className="flex items-center cursor-pointer"
                >
                  Name {sortDirection === 'ascending' ? 'A-Z' : 'Z-A'} <ArrowUpDown size={14} className="ml-1" />
                </button>
              </th>
              <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Role</th>
              <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold text-sm">Bio</th>
              <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold text-sm">Expertise</th>
              <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {sortedAndFilteredData.length > 0 ? (
              sortedAndFilteredData.map((member) => (
                <tr key={member._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                        <img 
                          src={getAvatarUrl(member.name, member.image)} 
                          alt={member.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{member.role}</td>
                  <td className="py-3 px-4">{member.bio}</td>

                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((exp, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-4">
                      <button
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                        onClick={() => openModal(member)}
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-600 cursor-pointer"
                        onClick={() => handleDelete(member._id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-8 text-center text-gray-500">
                  No team members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    {/* Modal Form */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
          <h3 className="text-2xl font-bold mb-6">
            {isEditMode ? "Edit Team Member" : "Add New Team Member"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={currentMember.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={currentMember.role}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Avatar Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={currentMember.image}
                  onChange={handleInputChange}
                  placeholder="https://api.dicebear.com/9.x/adventurer/svg?seed=YourName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank to use auto-generated avatar</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Expertise
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={tempExpertise}
                    onChange={(e) => setTempExpertise(e.target.value)}
                    onKeyDown={handleExpertiseKeyDown}
                    placeholder="Type and press Enter"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentMember.expertise.map((exp, index) => (
                    <div key={index} className="bg-blue-100 text-blue-800 text-xs font-medium py-1 px-2 rounded flex items-center">
                      {exp}
                      <button 
                        type="button" 
                        onClick={() => removeExpertise(index)}
                        className="ml-1 text-blue-500 hover:text-blue-800 cursor-pointer"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={currentMember.bio}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                {isEditMode ? "Update" : "Create"} Member
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  );
};

export default AdminTeamMembers;