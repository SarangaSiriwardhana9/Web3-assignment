import express from 'express';
import { loginUser,addUser,logout } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { verifyAdmin } from '../utils/verifyAdmin.js';
const router = express.Router();

// Login route
router.post('/login', loginUser);

// Add user route
router.post('/add-user', verifyToken, verifyAdmin, addUser);

//logout route
router.get('/logout', logout);

export default router;
