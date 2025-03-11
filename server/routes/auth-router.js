const express  = require("express")
// router is also called as mini-app
const router = express.Router();
const authContollers = require("../controllers/auth-controller")

// by now....server.js file is becomming messy ...to keep server.js file clean we make router folder so that better mainatainabality of the code ... 



// now this route page is getting messy ...so to avoid it we use contollers 





// router.get("/", (req,res)=>{
//   res.status(200).send("Hello World Auth Page!!")
// });

// also can be written as , so that i can perform chaining in the code writing, so this is best practice 



router.route("/").get(authContollers.home);

// when user adds his data that should be insteretd into the datbase
router.route("/register").post(authContollers.register);



// dont forget this s in exports
module.exports = router;





// COMMON HTTP METHODS AND THEIR MEANINGS

// get - read the data
// post - insert the data
// put/patch - update the data
// delete - delete the data