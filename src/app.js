
require('dotenv').config();
const express = require('express');
const db = require('./db');
const { encrypt } = require('./encrypt');
const { generateCode } = require('./capability');


const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('🛡️ Secure SQL Task Running. Use POST /register to create users.');
});


app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const encPass = encrypt(password);
  const capability = generateCode();

  const stmt = db.prepare('INSERT INTO users (username, password, capability) VALUES (?, ?, ?)');
  stmt.run(username, encPass, capability, function(err) {
    if (err) return res.status(400).json({ error: 'User already exists or error occurred' });
    res.json({ success: true, capability });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
