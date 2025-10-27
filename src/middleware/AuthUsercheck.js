const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/envConfig');

const checkUserToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access token is missing or invalid format' });
  }

  const token = authHeader.split(' ')[1];

  console.log(" token from middleware:", token, "JWT_SECRET:", JWT_SECRET);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = { checkUserToken };
