const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    if (username === undefined || password === undefined) {
        res.status(401).json({
            message: "Unauthorized"
        })
    }

    await User.findOne({
        username,
        password
    })
        .then((value) => {
            if (!value) {
                res.status(401).json({
                    message: "Unauthorized"
                })
            } else {
                next();

            }
        })
}

module.exports = userMiddleware;