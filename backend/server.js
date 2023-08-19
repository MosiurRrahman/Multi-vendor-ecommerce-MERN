const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utiles/db");
require("dotenv").config();

// Middleware
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// API routes
app.use('/api', require('./routes/authoRoutes'));

// Root route
app.get("/", (req, res) => res.send("Hello World!"));

// Connect to MongoDB
dbConnect()
    .then(() => {
        const port = process.env.PORT || 5000;
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    })
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
