const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");

// users controllers
router.route("/users").get(adminController.fetchUsers);
router.route("/users/delete/:userId").delete(adminController.deleteUser);
router.route("/users/:id").get(adminController.fetchUserById);
router.route("/users/update/:userId").put(adminController.updateUser);





router.route("/contacts").get(adminController.fetchContacts);
router.route("/contacts/delete/:contactId").delete(adminController.deleteContact);





router.route("/services").get(adminController.fetchServices);
router.route("/services/create").post(adminController.createService);
router.route("/services/update/:serviceId").put(adminController.updateService);
router.route("/services/delete/:serviceId").delete(adminController.deleteService);
router.route("/services/:serviceId").get(adminController.fetchServiceById);



module.exports = router;
