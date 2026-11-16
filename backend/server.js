const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Backend!');
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});