require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const authRouter = require("./routes/auth-router")
const contactRouter = require("./routes/contact-router")
const serviceRouter = require("./routes/service-router")
const testimonialRouter = require("./routes/testimonial-router")
const teamMembersRouter = require("./routes/teamMember-router")

const connectDB = require("./utils/db")
// this middleware is compulsory for handling json type of data through out the app ...thisnshould be used beore all the routes that we have so that all the routes are able to access it   without any problems .... dont forget to use this..else we dont get the intended response from the server...as we mainly use json format data


// Configure cors middleware to allow all origins
app.use(cors({
  origin: '*', // Allow all origins
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
}));

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)
app.use("/api/data", serviceRouter)
app.use("/api/testimonials", testimonialRouter)
app.use("/api/team", teamMembersRouter)

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Status</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
          .container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          h1 { color: #27ae60; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>✅ API is Working!</h1>
          <p>Welcome to our API. Everything is running smoothly.</p>
        </div>
      </body>
    </html>
  `);
});

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