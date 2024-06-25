// routes/workerRegister.js

const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
    const { name, phone, address, password, role ,email} = req.body;

    if (!name || !phone || !address || !password || !role||!email) {
        return res.status(400).send('All fields are required');
    }

    const sql = `INSERT INTO workers (name, phone,address, password,role,email) VALUES ('${name}', '${phone}','${address}', '${password}', '${role}','${email}')`;

    db.query(sql, [name, phone, address, password, role,email], (err, results) => {
        if (err) {
            console.error('Error registering worker:', err);
            res.status(500).send('Server error');
        } else {
            res.send('Worker registration successful');
        }
    });
});

module.exports = router;
