// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    if(!username) return res.status(404).json('Not an Admin')

    if(!password) return res.status(404).json('Not an Admin')

    if(!(username == 'admin' && password == 'pass')) {
        return res.status(403).json('Not an Admin')
    }
    next();
}

module.exports = adminMiddleware;