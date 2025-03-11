// contoller is a part of a code that handles the logic of the application

// when ever you r usinf async better to include try catch in there


const home = async (req,res)=>{
  try {
    res.status(200).send("Hello World Auth Page by contollers!!")
  } catch (error) {
    console.log(error)
  }
}



const register = async (req,res)=>{
  try {
    console.log(req.body)
    res.status(200).json({msg : req.body})
  } catch (error) {
    res.status(400).send({msg : "Page not Found Here in the server !!"})
  }
}


module.exports = {home,register}