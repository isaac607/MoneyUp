const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Isaac@2012",
    database: "moneyup_db"
});

db.connect((err) => {
    if (err) {
        console.log("❌ Database error:", err);
    } else {
        console.log("✅ MySQL Connected...");
    }
});

module.exports = db;