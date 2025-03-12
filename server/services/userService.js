import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get all users
export const getAllUsers = async () => {
  return await User.find({});
};

// Get user by ID
export const getUserById = async (id) => {
  return await User.findById(id);
};

// Signup new user
export const signupUser = async ( newUser ) => {
  const { email, username, password } = newUser;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, username, password: hashedPassword, projects: [] });
  await user.save();
  
  const token = generateToken(user._id);
  return { user, token };
};

// Login user
export const loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid username or password");
  }

  const token = generateToken(user._id);
  return { user, token };
};

// Update user
export const updateUser = async (id, updates) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  Object.assign(user, updates);
  if (updates.password) user.password = await hash(updates.password, 10);

  await user.save();
  return user;
};

// Delete user
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Generate JWT Token
export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.TKN_KEY, { expiresIn: "1h", issuer: "http://localhost:6060" });
};
