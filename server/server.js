require("dotenv").config();
const express = require('express');

const app = express();

const router = require("./routes/auth-router")

const connectDB = require("./utils/db")
// this middleware is compulsory for handling json type of data through out the app ...thisnshould be used beore all the routes that we have so that all the routes are able to access it   without any problems .... dont forget to use this..else we dont get the intended response from the server...as we mainly use json format data

app.use(express.json())

app.use("/api/auth", router)



const PORT = 5000;

connectDB().then(() => {

  app.listen(PORT, () => {
    console.log("\n\n\n--Start")
    console.log(`\n⚡ Server is running at Port no : ${PORT}\n\n`)
  })

})