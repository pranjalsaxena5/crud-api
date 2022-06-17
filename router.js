const router = require("express").Router();
const {getTodos, createTodo, updateTodo, deleteTodo} = require("./controllers/Todo");

router.get('/', (req, res) => {
    res.send('Let\'s Build a CRUD API');
})

router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.get("/todos", getTodos);
router.delete("/todos/:todoID", deleteTodo);


module.exports = router;