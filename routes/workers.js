const express = require('express');
const router = express.Router();
const db = require('./db');
router.get('/', (req, res) => {
    const query = 'SELECT id, name, address, phone,role,email FROM workers'; // Adjust the query as per your table structure
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;