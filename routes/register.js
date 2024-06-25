const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
    const { name, email, phone, password } = req.body;
    const sql = `INSERT INTO users (name, email, phone, password) VALUES ('${name}', '${email}', '${phone}', '${password}')`;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Error registering user');
        } else {
            res.send('Registration successful');
        }
    });
});

module.exports = router;
