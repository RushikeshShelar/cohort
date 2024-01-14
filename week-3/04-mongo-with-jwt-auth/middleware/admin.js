// Middleware for handling auth
const jwt = require('jsonwebtoken');

const secret = require("../config")

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const authString = req.headers.authorization;

        if (!authString) {
            return res.status(401).json({
                message: 'Authorization header required'
            });
        }

        const [auth, token] = authString.split(" ");

        if (auth !== "Bearer") {
            return res.status(401).json({
                message: 'Authorization header must start with Bearer'
            });
        }

        if (!token) {
            return res.status(401).json({
                message: 'Token required'
            });
        }

        const result = jwt.verify(token, secret);

        if (!result.username) {
            return res.status(401).json({
                message: 'Invalid token'
            });
        } else {
            next();

        }

    } catch (error) {
        res.send("Incoorect Signature")
        console.log("ADMIN MIDDLEWARE ERROR", error);
    }
}

module.exports = adminMiddleware;