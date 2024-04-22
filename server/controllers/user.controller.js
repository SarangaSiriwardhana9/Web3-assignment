import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ 'contact_info.email': email });

    // Check if user exists
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }

    // Check if password is correct (you should use bcrypt for password hashing)
    if (user.auth_info.password !== password) {
      return next(errorHandler(401, 'Invalid credentials'));
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h' // Token expires in 1 hour
    });

    // Set token in cookie
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });

    // Send response
    res.status(200).json({ success: true, message: 'Login successful', token });
  } catch (err) {
    next(err);
  }
};
