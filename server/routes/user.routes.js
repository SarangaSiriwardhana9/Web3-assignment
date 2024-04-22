import express from 'express';
import { loginUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// Login route
router.post('/login', verifyToken, loginUser);

export default router;
