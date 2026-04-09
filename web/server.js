import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let db;
(async () => {
    db = await open({
        filename: './waitlist.db',
        driver: sqlite3.Database
    });
    await db.exec(`
        CREATE TABLE IF NOT EXISTS waitlist (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
})();

app.post('/api/waitlist', async (req, res) => {
    const { name, email } = req.body;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required.' });
    }

    try {
        await db.run('INSERT INTO waitlist (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ success: true });
    } catch (err) {
        if (err.message.includes('UNIQUE')) {
            res.status(400).json({ error: 'Email is already on the waitlist.' });
        } else {
            res.status(500).json({ error: 'Database error.' });
        }
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Database Server running on http://localhost:${PORT}`);
});
