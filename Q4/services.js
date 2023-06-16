import jwt from 'jsonwebtoken'

const users = [];

export const addUser = (req, res) => {
    // Get user details from the request body
    const { username, password } = req.body;
  
    // Create a new user object
    const user = { username, password };
  
    // Save the user object
    users.push(user);
  
    res.status(201).json({ message: 'User registered successfully!' });
}

export const login = (req, res) => {
    // Get user credentials from the request body
    const { username, password } = req.body;

    // Check if user exists and credentials are correct
    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
        res.status(401).json({ error: 'Invalid username or password' });
        return;
    }

    // Generate a JWT token
    const token = jwt.sign({ username }, '123');

    res.json({ token });
}

export const protectedFunction = (req, res) => {
    res.json({ message: 'Protected resource accessed successfully!' });
} 