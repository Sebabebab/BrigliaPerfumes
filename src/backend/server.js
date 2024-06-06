const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;


// Opprett en ny tilkobling til den nye SQLite-databasen
const db = new sqlite3.Database('mynewdatabase.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the database.');
    }
});

// Middleware for å parse JSON-forespørsler
app.use(express.json());

// Opprett en ny bruker i databasen
app.post('/signup', (req, res) => {
    const { email, password, title, name } = req.body;

    const insertUserQuery = `
        INSERT INTO users (email, password, title, name)
        VALUES (?, ?, ?, ?)
    `;

    db.run(insertUserQuery, [email, password, title, name], function(err) {
        if (err) {
            console.error('Error creating user:', err.message);
            res.status(500).json({ error: 'Failed to sign up.' });
        } else {
            console.log('User created with id:', this.lastID);
            res.status(201).json({ message: 'User created successfully.', userId: this.lastID });
        }
    });
});

// Logg inn en bruker
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const getUserQuery = `
        SELECT * FROM users WHERE email = ? AND password = ?
    `;

    db.get(getUserQuery, [email, password], (err, row) => {
        if (err) {
            console.error('Error fetching user:', err.message);
            res.status(500).json({ error: 'Failed to log in.' });
        } else if (!row) {
            res.status(401).json({ error: 'Invalid email or password.' });
        } else {
            console.log('User logged in successfully:', row);
            res.status(200).json({ message: 'Logged in successfully.', user: row });
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start serveren
app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});