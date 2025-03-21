const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true, 
    unique: true,
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});



// now above is the schema now define the model
// this first argument changes by default to plural form as it is the table name we are creating .. and Schema is the seoarate single properties of a individual user form that table allows to pass or insert into it


const User = new mongoose.model("User", userSchema);


module.exports = User;