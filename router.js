const router = require("express").Router();
const jwt = require('jsonwebtoken');
const { JsonWebTokenError } = require("jsonwebtoken");
const { login } = require("./controllers/login");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/Todo");


router.post('/api/posts/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        else {
            res.json({
                message: 'Post Created!',
                authData
            })
        }
    })

})


//verifytoken

function verifyToken(req, res, next) {
    const bearerToken = req.headers['authorization'];
    if (typeof (bearerToken) != 'undefined') {
        req.token = bearerToken;
        next();
    } else {
        //Forbidden 
        res.sendStatus(403);
    }

}

router.get('/login', login);
router.post("/todos", verifyToken, createTodo);
router.put("/todos/:todoID", verifyToken, updateTodo);
router.get("/todos", verifyToken, getTodos);
router.delete("/todos/:todoID", verifyToken, deleteTodo);


module.exports = router;