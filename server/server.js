require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const authRouter = require("./routes/auth-router")
const contactRouter = require("./routes/contact-router")

const connectDB = require("./utils/db")
// this middleware is compulsory for handling json type of data through out the app ...thisnshould be used beore all the routes that we have so that all the routes are able to access it   without any problems .... dont forget to use this..else we dont get the intended response from the server...as we mainly use json format data


// Configure cors middleware to allow all origins
app.use(cors({
  origin: 'http://localhost:5173', // Allow all origins
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
}));

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)


const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("\n\n\n--Start");
      console.log(`\n⚡ Server is running at Port no : ${PORT}\n\n`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Exit if DB connection fails
  });