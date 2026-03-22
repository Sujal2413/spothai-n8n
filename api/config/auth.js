const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRES,
  },
};

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, authConfig.jwt.secret, {
    expiresIn: authConfig.jwt.expires,
  });
};

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

const authenticate = (req, res, next) => {
  verifyToken(req, res, next);
};

const authorize = (roles) => {
  return (req, res, next) => {
    verifyToken(req, res, () => {
      if (roles.includes(req.user.role)) {
        next();
      } else {
        return res.status(403).json({ message: 'Forbidden. You do not have permission to access this resource.' });
      }
    });
  };
};

module.exports = {
  generateToken,
  verifyToken,
  authenticate,
  authorize,
};