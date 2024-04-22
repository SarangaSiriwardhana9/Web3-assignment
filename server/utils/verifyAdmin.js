import { errorHandler } from './error.js';

export const verifyAdmin = (req, res, next) => {
  // Verify that the user is an admin
  if (req.user.user.type !== 'ADMIN') {
    return next(errorHandler(401, 'Only admins can perform this action'));
  }

  next();
};