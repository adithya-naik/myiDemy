import React, { useEffect, useState } from "react";
import {
  Edit,
  Trash2,
  Plus,
  Search,
  ArrowUpDown,
  Code,
  BookOpen,
  Video,
  Users,
  Laptop,
  Rocket,
  PenTool,
  Database,
  Camera,
  Languages,
  Presentation,
  Award,
  ClipboardList,
} from "lucide-react";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentService, setCurrentService] = useState({
    service: "",
    description: "",
    price: "",
    icon: "",
    provider: "",
    modeOfLearning: "",
    overallRating: 0,
    totalReviews: 0,
    skillLevel: "",
    duration: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("ascending");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("https://myidemy.onrender.com/api/data/service");
      const data = await response.json();
      setServices(data.response);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      // Handle price as string with currency symbol
      setCurrentService({
        ...currentService,
        [name]: value,
      });
    } else {
      setCurrentService({
        ...currentService,
        [name]:
          name === "overallRating" || name === "totalReviews"
            ? parseFloat(value)
            : value,
      });
    }
  };

  const resetForm = () => {
    setCurrentService({
      service: "",
      description: "",
      price: "",
      icon: "",
      provider: "",
      modeOfLearning: "",
      overallRating: 0,
      totalReviews: 0,
      skillLevel: "",
      duration: "",
    });
    setIsEditMode(false);
  };

  const openModal = (service = null) => {
    if (service) {
      setCurrentService(service);
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
      const url = isEditMode
        ? `https://myidemy.onrender.com/api/admin/services/update/${currentService._id}`
        : "https://myidemy.onrender.com/api/admin/services/create";

      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentService),
      });

      if (response.ok) {
        fetchServices();
        closeModal();
      } else {
        const error = await response.json();
        console.error("Error saving service:", error);
      }
    } catch (error) {
      console.error("Error saving service:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        const response = await fetch(
          `https://myidemy.onrender.com/api/admin/services/delete/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          fetchServices();
        } else {
          const error = await response.json();
          console.error("Error deleting service:", error);
        }
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  // Toggle sort direction function
  const toggleSortDirection = () => {
    setSortDirection(
      sortDirection === "ascending" ? "descending" : "ascending"
    );
  };

  // Get sorted and filtered data
  const getSortedAndFilteredData = () => {
    const filteredData = services.filter(
      (service) =>
        service.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return [...filteredData].sort((a, b) => {
      if (a.service < b.service) {
        return sortDirection === "ascending" ? -1 : 1;
      }
      if (a.service > b.service) {
        return sortDirection === "ascending" ? 1 : -1;
      }
      return 0;
    });
  };

  // Get appropriate icon component based on icon name
  const getIconComponent = (iconName) => {
    const iconMap = {
      Code: <Code size={20} />,
      BookOpen: <BookOpen size={20} />,
      Video: <Video size={20} />,
      Users: <Users size={20} />,
      Laptop: <Laptop size={20} />,
      Rocket: <Rocket size={20} />,
      PenTool: <PenTool size={20} />,
      Database: <Database size={20} />,
      Camera: <Camera size={20} />,
      Languages: <Languages size={20} />,
      Presentation: <Presentation size={20} />,
      Award: <Award size={20} />,
    };

    return iconMap[iconName] || <Code size={20} />;
  };

  const sortedAndFilteredData = getSortedAndFilteredData();

  return (
    <div className="container mx-auto">
      <div className="py-8">
        <div className="flex flex-row justify-between space-x-3 w-full mb-1 sm:mb-0">
          
          <div className="flex items-center">
            <ClipboardList className="mr-2" size={24} />
            <h2 className="text-2xl font-bold">Services Management</h2>
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
                <span>Add Service</span>
              </button>
            </form>
          </div>
          <div className="flex items-center ">
            <button
              onClick={toggleSortDirection}
              className="flex items-center cursor-pointer px-4 py-2 rounded-2xl bg-slate-200 text-black hover:bg-slate-400"
            >
              Sort by : {sortDirection === "ascending" ? "A-Z" : "Z-A"}{" "}
              <ArrowUpDown size={14} className="ml-1" />
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Service Name
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Provider
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Price
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Duration
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Rating
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {sortedAndFilteredData.length > 0 ? (
                sortedAndFilteredData.map((service) => (
                  <tr key={service._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 rounded-full">
                          {getIconComponent(service.icon)}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {service.service}
                          </div>
                          <div className="text-sm text-gray-500">
                            {service.skillLevel}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {service.provider}
                          </div>
                          <div className="text-sm text-gray-500">
                            {service.modeOfLearning}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{service.price}</td>
                    <td className="py-3 px-4">{service.duration}</td>
                    <td className="py-3 px-4">
                      {service.overallRating} ({service.totalReviews})
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-4">
                        <button
                          className="text-blue-500 hover:text-blue-600 cursor-pointer"
                          onClick={() => openModal(service)}
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-600 cursor-pointer"
                          onClick={() => handleDelete(service._id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-500">
                    No services found
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
              {isEditMode ? "Edit Service" : "Add New Service"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={currentService.service}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Provider
                  </label>
                  <input
                    type="text"
                    name="provider"
                    value={currentService.provider}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Price (with currency ₹ symbol)
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={currentService.price}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    placeholder="₹12,999"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Icon
                  </label>
                  <select
                    name="icon"
                    value={currentService.icon}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none cursor-pointer"
                    required
                  >
                    <option value="">Select Icon</option>
                    <option value="Code">Code</option>
                    <option value="BookOpen">Book Open</option>
                    <option value="Video">Video</option>
                    <option value="Users">Users</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Rocket">Rocket</option>
                    <option value="PenTool">Pen Tool</option>
                    <option value="Database">Database</option>
                    <option value="Camera">Camera</option>
                    <option value="Languages">Languages</option>
                    <option value="Presentation">Presentation</option>
                    <option value="Award">Award</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mode of Learning
                  </label>
                  <input
                    type="text"
                    name="modeOfLearning"
                    value={currentService.modeOfLearning}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    placeholder="Online, In-person, Hybrid"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Skill Level
                  </label>
                  <select
                    name="skillLevel"
                    value={currentService.skillLevel}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none cursor-pointer"
                    required
                  >
                    <option value="">Select Skill Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="All Levels">All Levels</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={currentService.duration}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    placeholder="e.g. 3 months"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="overallRating"
                    value={currentService.overallRating}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    min="0"
                    max="5"
                    step="0.1"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Total Reviews
                  </label>
                  <input
                    type="number"
                    name="totalReviews"
                    value={currentService.totalReviews}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    min="0"
                    required
                  />
                </div>
                <div className="col-span-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={currentService.description}
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
                  {isEditMode ? "Update" : "Create"} Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;
