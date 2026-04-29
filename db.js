const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
    host: "localhost",   // change if hosted online
    user: "root",
    password: "Isaac@2012",
    database: "moneyup_db"
});

// Connect
db.connect((err) => {
    if (err) {
        console.log("❌ Database error:", err);
    } else {
        console.log("✅ MySQL Connected...");
    }
});

module.exports = db;
