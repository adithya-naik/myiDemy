const User = require("../models/user-schema");
const Contact = require("../models/contact-schema");
const Service = require("../models/service-schema");
const TeamMember = require("../models/teamMember-schema");
const Testimonial = require("../models/testimonial-schema");

const mongoose = require("mongoose");



// Users 



// Fetching all users from the database
// This function is used to get all the users from the database
const fetchUsers = async (req, res) => {
  try {
    const response = await User.find({}, { password: 0 });
    if (!response || response.length === 0) {
      res.status(200).json({ message: "No Users found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error in getting Users list : ", error);
  }
};


// Deleting a user from the database
// This function is used to delete a user from the database
const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await User.findByIdAndDelete(userId);
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error in deleting user : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetching user details by ID
// This function is used to get the details of a specific user by their ID
const fetchUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error in fetchUserById:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, email, phone, isAdmin } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email, phone, isAdmin },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Error in updateUser:", error);
    return res.status(500).json({ message: "Server error" });
  }
};














// contacts





// Fetching all contacts from the database
// This function is used to get all the contacts from the database

const fetchContacts = async (req, res) => {
  try {
    const response = await Contact.find({}, { password: 0 });
    if (!response || response.length === 0) {
      res.status(200).json({ message: "No Contacts found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error in getting Users list : ", error);
  }
};




// Deleting a contact from the database
// This function is used to delete a contact from the database
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.contactId);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};









// Services

const fetchServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ response: services });
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new service
const createService = async (req, res) => {
  try {
    const serviceData = req.body;
    const newService = new Service(serviceData);
    const savedService = await newService.save();
    
    res.status(201).json({
      message: "Service created successfully",
      service: savedService
    });
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update an existing service
const updateService = async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const updatedData = req.body;
    
    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({
      message: "Service updated successfully",
      service: updatedService
    });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a service
const deleteService = async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const deletedService = await Service.findByIdAndDelete(serviceId);

    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch a single service by ID
const fetchServiceById = async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





// Fetch all team members
const fetchTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find({});
    res.status(200).json({ teamMembers });
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ message: "Error fetching team members", error: error.message });
  }
};

// Create a new team member
const createTeamMember = async (req, res) => {
  try {
    const { name, role, image, bio, expertise } = req.body;
    
    // Validate required fields
    if (!name || !role || !bio) {
      return res.status(400).json({ message: "Name, role, and bio are required fields" });
    }
    
    // Create new team member
    const newTeamMember = new TeamMember({
      name,
      role,
      image: image || `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(name)}`,
      bio,
      expertise: expertise || []
    });
    
    await newTeamMember.save();
    
    res.status(201).json({ 
      message: "Team member created successfully", 
      teamMember: newTeamMember 
    });
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({ message: "Error creating team member", error: error.message });
  }
};

// Fetch a team member by ID
const fetchTeamMemberById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    
    res.status(200).json({ teamMember });
  } catch (error) {
    console.error("Error fetching team member:", error);
    res.status(500).json({ message: "Error fetching team member", error: error.message });
  }
};

// Update a team member
const updateTeamMember = async (req, res) => {
  try {
    const { name, role, image, bio, expertise } = req.body;
    
    // Validate required fields
    if (!name || !role || !bio) {
      return res.status(400).json({ message: "Name, role, and bio are required fields" });
    }
    
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      {
        name,
        role,
        image: image || `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(name)}`,
        bio,
        expertise: expertise || []
      },
      { new: true } // Return the updated document
    );
    
    if (!updatedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    
    res.status(200).json({ 
      message: "Team member updated successfully", 
      teamMember: updatedTeamMember 
    });
  } catch (error) {
    console.error("Error updating team member:", error);
    res.status(500).json({ message: "Error updating team member", error: error.message });
  }
};

// Delete a team member
const deleteTeamMember = async (req, res) => {
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
    
    if (!deletedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    
    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({ message: "Error deleting team member", error: error.message });
  }
};









const fetchTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      message: "Testimonials fetched successfully",
      testimonials
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ message: "Error fetching testimonials", error: error.message });
  }
};

const createTestimonial = async (req, res) => {
  try {
    const { name, role, quote, bgColor, textColor } = req.body;
    
    // Validate required fields
    if (!name || !role || !quote) {
      return res.status(400).json({ message: "Name, role, and quote are required fields" });
    }
    
    // Generate initials from name
    const initials = name
      .split(' ')
      .filter(part => part.length > 0)
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // Ensure max 2 characters
    
    // Create new testimonial
    const newTestimonial = new Testimonial({
      name,
      role,
      initials,
      quote,
      bgColor: bgColor || "bg-blue-100",
      textColor: textColor || "text-blue-600"
    });
    
    await newTestimonial.save();
    
    res.status(201).json({
      message: "Testimonial created successfully",
      testimonial: newTestimonial
    });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res.status(500).json({ message: "Error creating testimonial", error: error.message });
  }
};

// Fetch a testimonial by ID
const fetchTestimonialById = async (req, res) => {
  try {
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid testimonial ID format" });
    }
    
    const testimonial = await Testimonial.findById(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    
    res.status(200).json({ testimonial });
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    res.status(500).json({ message: "Error fetching testimonial", error: error.message });
  }
};

// Update a testimonial
const updateTestimonial = async (req, res) => {
  try {
    const { name, role, quote, bgColor, textColor } = req.body;
    
    // Validate required fields
    if (!name || !role || !quote) {
      return res.status(400).json({ message: "Name, role, and quote are required fields" });
    }
    
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid testimonial ID format" });
    }
    
    // Generate initials from name
    const initials = name
      .split(' ')
      .filter(part => part.length > 0)
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // Ensure max 2 characters
    
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      {
        name,
        role,
        initials,
        quote,
        bgColor: bgColor || "bg-blue-100",
        textColor: textColor || "text-blue-600"
      },
      { new: true } // Return the updated document
    );
    
    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    
    res.status(200).json({ 
      message: "Testimonial updated successfully", 
      testimonial: updatedTestimonial 
    });
  } catch (error) {
    console.error("Error updating testimonial:", error);
    res.status(500).json({ message: "Error updating testimonial", error: error.message });
  }
};

// Delete a testimonial
const deleteTestimonial = async (req, res) => {
  try {
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid testimonial ID format" });
    }
    
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
    
    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    
    res.status(200).json({
      message: "Testimonial deleted successfully",
      testimonial: deletedTestimonial
    });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ message: "Error deleting testimonial", error: error.message });
  }
};






module.exports = {
  fetchUsers,  deleteUser, fetchUserById, updateUser, deleteContact,fetchContacts ,fetchServices,
  createService,
  updateService,
  deleteService,
  fetchServiceById,
  fetchTeamMembers,
  createTeamMember,
  fetchTeamMemberById,
  updateTeamMember,
  deleteTeamMember,
  fetchTestimonials,
  createTestimonial,
  fetchTestimonialById,
  updateTestimonial,
  deleteTestimonial
};