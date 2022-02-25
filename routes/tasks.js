const express = require('express');
const router = express.Router();
const pool = require('../database');
/* 
    BASE URL /tasks
    GET / - Get all tasks
    POST / - Create a new task
    GET /:id - Get a task by id
    PUT /:id - Update a task by id
    DELETE /:id - Delete a task by id
*/
router.get('/', async (req, res, next) => {
    await pool.promise()
        .query('SELECT * FROM tasks')
        .then(([rows, fields]) => {
            res.render('tasks.njk', {
                tasks: rows,
                title: "Tasks",
                layout: "layout.njk"

            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                tasks: {
                    error: 'Error getting tasks'
                }
            })
        });
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    if (isNaN(req.params.id)) {
        res.status(400).json({
            task: {
                error: 'Bad request'
            }
        });
    }
    await pool.promise()
        .query('SELECT * FROM tasks WHERE id = ?', [id])
        .then(([rows, fields]) => {
            res.json({
                tasks: {
                    data: rows
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                tasks: {
                    error: 'Error getting tasks'
                }
            })
        });
    // res.json({
    //     id: req.params.id
    // })

});

router.post('/', async (req, res, next) => {
    const task = req.body.task;

    await pool.promise()
        .query('INSERT INTO tasks (task) VALUES (?)', [task])
        .then((response) => {
            console.log(response[0].affectedRows);
            if (response[0].affectedRows == 1) {
                res.redirect('/tasks');
            } else {
                res(400)
            }
        })    

    .catch(err => {
        console.log(err);
        res.status(500).json({
            tasks: {
                error: 'Error getting tasks'
            }
        })
    });
});
module.exports = router;