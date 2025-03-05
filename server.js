const express = require("express"); // Fixed typo in require
const mysql = require("mysql");
const cors = require("cors"); // Fixed typo in require

const signup = express();
signup.use(cors());
signup.use(express.json()); // Needed to parse JSON body data

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// API Route to Insert Data into 'signup' Table
signup.post('/ignup', (req, res) => {
    const sql = "INSERT INTO signup (username, password, confirmPassword, email) VALUES (?, ?, ?, ?)";
    
    const values = [
        req.body.username,
        req.body.password,
        req.body.confirmPassword, // Fixed inconsistent casing
        req.body.email
    ];

    db.query(sql, values, (err, data) => { // Fixed array wrapping issue
        if (err) {
            console.error(err); // Show actual error in the console
            return res.status(500).json({ error: "Database error", details: err });
        }
        return res.status(201).json({ message: "User registered successfully", userId: data.insertId });
    });
});

signup.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
