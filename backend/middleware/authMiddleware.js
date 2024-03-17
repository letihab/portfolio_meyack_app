const jwt = require('jsonwebtoken');

// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {
    // Get token from Authorization header
    const token = req.headers.authorization;

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify token
    jwt.verify(token.replace('Bearer ', ''), 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        // If token is valid, store decoded user information in request object
        req.user = decoded;
        next();
    });
};

// Apply verifyToken middleware to routes that require authentication
app.get('/api/profile', verifyToken, (req, res) => {
    // Access user information from req.user and respond with profile data
    res.json({ user: req.user });
});

// Route for user login (generating JWT token)
app.post('/api/login', (req, res) => {
    // Validate user credentials
    // If valid, generate JWT token and send it to the client
    const token = jwt.sign({ userId: 'user_id_here' }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
});
