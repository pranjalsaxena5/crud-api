const Todo = require("../model/Todo");

const getTodos = (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
          res.send(err);
        }
        res.json(todos);
      });
}

const createTodo = (req, res) => {
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
};


module.exports = {
    getTodos,
    createTodo,
};

