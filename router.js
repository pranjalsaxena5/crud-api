const router = require("express").Router();


router.get('/', (req, res) => {
    res.send('Let\'s Build a CRUD API');
})

module.exports = router;