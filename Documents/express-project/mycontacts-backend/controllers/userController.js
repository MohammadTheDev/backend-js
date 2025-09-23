const asyncHandler = require("express-async-handler");
const User = require("../models/userModale");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailble = await User.findOne({ email });

  if (userAvailble) {
    res.status(400);
    throw new Error("User already registred!");
  }

  

  res.json({ message: "Register the user" });
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc Current user info
//@route POST /api/users/login
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
