const db = require("../db");

const signupUser = (req, res) => {

    let { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
        return res.send("All fields required ⚠️");
    }

    let sql =
    "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";

    db.query(
        sql,
        [fullname, email, password],
        (err, result) => {

            if (err) {

                if (err.code === "ER_DUP_ENTRY") {
                    return res.send("Email already exists ⚠️");
                }

                console.log(err);
                return res.send("Signup failed ❌");
            }

            res.end("Signup successful ✅");

        }
    );

};

module.exports = signupUser;``