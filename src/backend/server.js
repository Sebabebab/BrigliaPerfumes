const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Connect to SQLite database
const db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the database.');
    }
});

// Create users table if not exists
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT,
    title TEXT,
    name TEXT
)`);

// Sign up endpoint
app.post('/signup', async (req, res) => {
    // Sign-up logic
});

// Login endpoint
app.post('/login', async (req, res) => {
    // Login logic
});

// Root URL endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
