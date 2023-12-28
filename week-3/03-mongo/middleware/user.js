function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    if(!username) return res.status(404).json('Not an ')

    if(!password) return res.status(404).json('Not an User')

    if(!(username == 'username' && password == 'password')) {
        return res.status(403).json('Not an User')
    }

    next();
}

module.exports = userMiddleware;