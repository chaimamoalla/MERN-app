import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded; // Attach the user info to the request
    next(); // Proceed to next middleware or route handler
  } catch (err) {
    res.status(400).json({ msg: 'Invalid token' });
  }
};

export const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next(); // Proceed to the next middleware or route handler
};
export default authMiddleware;
