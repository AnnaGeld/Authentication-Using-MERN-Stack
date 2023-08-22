const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "https://authserverrr.onrender.com",
    methods: ["POST", "GET"],
  })
);

app.use(
  cors({
    credentials: true,
    origin: "https://authserverrr.onrender.com",
    methods: ["POST", "GET"],
  })
);
//database connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("database Not connected", err));

//middleware

app.use(express.json());
app.use(cookieParser());
/*app.use(express.urlencoded({ extended: false }));*/

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`server is running on ${port}`));
