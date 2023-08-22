const express = require("express");
const router = express.Router();
/*const cors = require("cors");*/
const {
  test,
  registerUser,
  loginUser,
  /*getProfile,*/
} = require("../controllers/controller");

router.use(
  cors({
    credentials: true,
    origin: "authentication-using-mern-front.vercel.app",
    methods: ["POST", "GET"],
  })
);

router.get("/", test);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
