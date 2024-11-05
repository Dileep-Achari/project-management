// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    // Check if the Authorization header exists
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).send("Access denied. No token provided.");

    // Extract and clean up the token
    const token = authHeader.replace('Bearer ', '');
    if (!token) return res.status(401).send("Access denied. No token provided.");

    try {
        // Verify the token and attach the user to the request
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
};

module.exports = auth;
