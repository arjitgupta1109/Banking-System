// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve frontend

// Add account
app.post('/api/accounts', (req, res) => {
  const { name, email, balance } = req.body;
  db.run(
    'INSERT INTO accounts (name, email, balance) VALUES (?, ?, ?)',
    [name, email, balance],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, name, email, balance });
    }
  );
});

// Get all accounts
app.get('/api/accounts', (req, res) => {
  db.all('SELECT * FROM accounts', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
