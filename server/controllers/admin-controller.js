const User = require("../models/user-schema");
const Contact = require("../models/contact-schema");
const Service = require("../models/service-schema");







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



module.exports = {
  fetchUsers,  deleteUser, fetchUserById, updateUser, deleteContact,fetchContacts ,fetchServices,
  createService,
  updateService,
  deleteService,
  fetchServiceById
};