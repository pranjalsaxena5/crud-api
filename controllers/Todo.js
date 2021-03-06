const Todo = require("../model/Todo");
const jwt = require('jsonwebtoken');

const getTodos = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        else {
            Todo.find((err, todos) => {
                if (err) {
                    res.send(err);
                }
                res.json(todos);
            });
        }
    })
}




const updateTodo = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        else {
            Todo.findOneAndUpdate(
                { _id: req.params.todoID }, {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed,
                },
            },
                { new: true },
                (err, Todo) => {
                    if (err) {
                        res.send(err);
                    } else res.json(Todo);
                }
            );
        }
    })
};


const createTodo = (req, res) => {
    console.log("HEYYYYYYYYYYYYYYYYYYYYYYYYY", req.body);
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        else {
            const todo = new Todo({
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            })
            todo.save((err, todo) => {
                if (err) {
                    res.send(err);
                }
                res.json(todo);
            })
        }
    })

};

const deleteTodo = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        else {
            Todo.deleteOne({ _id: req.params.todoID })
                .then(() => res.json({ message: "Todo Deleted" }))
                .catch((err) => res.send(err));
        }
    })
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};

