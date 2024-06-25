const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ error: 'Server error' });
        } else if (result.length > 0) {
            res.json({ success: true, email });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    });
});

module.exports = router;
