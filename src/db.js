const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./user.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    capability TEXT
  )`);
});

module.exports = db;
