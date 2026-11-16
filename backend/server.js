const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Home API
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Backend!');
});

// Health Check API
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'Backend is running successfully!',
        status: 'Online'
    });
});

// Dashboard API
app.get('/stats', (req, res) => {
    res.json({
        users: 1250,
        projects: 48,
        requests: 8500,
        uptime: '99.9%'
    });
});

// Contact API
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required!'
        });
    }

    res.json({
        success: true,
        message: `Thank you ${name}! Your message was received.`
    });
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
