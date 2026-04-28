const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./db"); // ✅ ADD THIS

const signupUser =
require("./controllers/signupController");

const loginUser =
require("./controllers/loginController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Serve HTML files */

app.use(express.static(
path.join(__dirname, "public")
));

/* ROUTES */

app.post("/signup", signupUser);

app.post("/login", loginUser);

/* FETCH USERS ROUTE (for Postman) */

app.get("/users", (req, res) => {

    let sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Error fetching users ❌");
        }

        res.json(result);

    });

});

app.listen(3000, () => {

console.log(
"🚀 Server running on http://localhost:3000"
);

});