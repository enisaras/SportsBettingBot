const sqlite3 = require('sqlite3').verbose();

// Open the database
let db = new sqlite3.Database('./db/bettingbot.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the bettingbot database.');
});
