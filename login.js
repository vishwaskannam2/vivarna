const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Error logging in');
        } else if (result.length > 0) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    });
});

module.exports = router;
