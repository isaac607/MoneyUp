const db = require("../db");

const loginUser = (req, res) => {

    let { email, password } = req.body;

    if (!email || !password) {
        return res.send("All fields required ⚠️");
    }

    let sql =
    "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(
        sql,
        [email, password],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.send("Login failed ❌");
            }

            if (result.length > 0) {

                res.end("Login successful ✅");

            } else {

                res.end("Invalid email or password ❌");

            }

        }
    );

};

module.exports = loginUser;