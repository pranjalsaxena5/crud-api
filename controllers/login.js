const jwt = require('jsonwebtoken');


const login = (req, res) => {
    //this user is a mock user
    const user = {
        id: 1,
        username: 'test',
        email: 'test@test.com'
    }
    
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    });
};


module.exports = {
    login,
}