import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcrypt from 'bcryptjs';

//user login
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ 'contact_info.email': email });

    // Check if user exists
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.auth_info.password);
    if (!isPasswordValid) {
      return next(errorHandler(401, 'Invalid credentials'));
    }

    // Create a user object without the password
    const userWithoutPassword = {
      id: user._id,
      basic_info: user.basic_info,
      contact_info: user.contact_info,
      type: user.type,
      status: user.status
    };

    // Generate JWT token with user data
    const token = jwt.sign({ user: userWithoutPassword }, process.env.JWT_SECRET, {
      expiresIn: '7d' 
    });

    // Set token in cookie
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });

    // Send response with user data and token
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: userWithoutPassword,
      token
    });
  } catch (err) {
    next(err);
  }
};

//add user
export const addUser = async (req, res, next) => {
  const { email, type, basic_info, contact_info } = req.body;

  try {


    // Create a new user with the provided data
    const newUser = new User({
      type,
      status: 'ONBOARD',
      basic_info,
      contact_info,
      auth_info: {
        password: ''
      }
    });

    // Save the new user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ success: true, message: 'User added successfully' });
  } catch (err) {
    next(err);
  }
};

//get all users

export const getAllUsers = async (req, res, next) => {
  try {
    // Find all users except the logged-in user
    const users = await User.find({ _id: { $ne: req.user.user.id } });

    // Send response with users data
    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully',
      users
    });
  } catch (err) {
    next(err);
  }
};



//logout user
export const logout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!');
};