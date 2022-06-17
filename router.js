const router = require("express").Router();
const {getTodos, createTodo} = require("./controllers/Todo");

router.get('/', (req, res) => {
    res.send('Let\'s Build a CRUD API');
})

router.post("/todos", createTodo);

router.get("/todos", getTodos);
module.exports = router;