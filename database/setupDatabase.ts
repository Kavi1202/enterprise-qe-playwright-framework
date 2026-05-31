import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(
  './database/test.db'
);

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT,
      role TEXT
    )
  `);

  db.run(`
    INSERT INTO users (
      username,
      role
    )
    VALUES (
      'standard_user',
      'customer'
    )
  `);

});

db.close();

console.log(
  'Database initialized successfully'
);