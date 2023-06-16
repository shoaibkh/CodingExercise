import jwt from 'jsonwebtoken'
// Middleware function to authenticate JWT token
export function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
  
    jwt.verify(token, '123', (err, user) => {
      if (err) {
        res.status(403).json({ error: 'Invalid token' });
        return;
      }
  
      req.user = user;
      next();
    });
}