const express = require('express');
const router = express.Router();
const pool = require('../database');

/*
BASE URL /tasks
GET / - Get all tasks
POST / - Create a new task
GET /:id -Get task by id
PUT /:id - Update a tasky by id
DELETE /:id - Delete a task by id
*/
router.get('/', async (req, res, next) => {
    await pool.promise()
        .query('SELECT * FROM tasks')
        .then(function (rows, fields) {
            console.log(rows);
            res.json(res);
        });
});

module.exports = router;
