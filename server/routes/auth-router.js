const express = require("express");
// router is also called as mini-app
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const { body } = require("express-validator");

// by now....server.js file is becomming messy ...to keep server.js file clean we make router folder so that better mainatainabality of the code ... 

// now this route page is getting messy ...so to avoid it we use contollers 

// router.get("/", (req,res)=>{
//   res.status(200).send("Hello World Auth Page!!")
// });

// also can be written as , so that i can perform chaining in the code writing, so this is best practice 

router.route("/").get(authControllers.home);

// Registration validation middleware
const registerValidation = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({ min: 3 }).withMessage("Username must be at least 3 characters long")
    .isLength({ max: 30 }).withMessage("Username cannot exceed 30 characters")
    .matches(/^[a-zA-Z0-9_]+$/).withMessage("Username can only contain letters, numbers, and underscores"),
    
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty().withMessage("Phone number is required")
    .isNumeric().withMessage("Phone number must contain only digits")
    .isLength({ min: 10, max: 10 }).withMessage("Phone number must be exactly 10 digits")
    .matches(/^[6-9]\d{9}$/).withMessage("Phone number must start with 6, 7, 8, or 9"),

  body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")
    .matches(/[a-z]/).withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase letter")
    .matches(/[0-9]/).withMessage("Password must contain at least one number")
    .matches(/[!@#$%^&*]/).withMessage("Password must contain at least one special character")
];

// Login validation middleware
const loginValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Please provide a valid email address")
    .normalizeEmail(),
  
  body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
];

// when user adds his data that should be inserted into the database
router.route("/register").post(registerValidation, authControllers.register);
router.route("/login").post(loginValidation, authControllers.login);
router.route("/getUserDetails").get(authControllers.getUserDetails);

// dont forget this s in exports
module.exports = router;

// COMMON HTTP METHODS AND THEIR MEANINGS

// get - read the data
// post - insert the data
// put/patch - update the data
// delete - delete the data