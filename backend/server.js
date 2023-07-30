const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
require("dotenv").config();

app.use(cors({
    origin:['http://localhost:3000'],
    credentials: true
}))

const port = process.env.PORT;
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api', require('./routes/authoRoutes'))
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Exampls sdlistening on port ${port}!`));
