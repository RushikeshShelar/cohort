const jwt = require('jsonwebtoken');
const secret = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: 'Authorization header required'
        });
    }

    const [authType, token] = authorization.split(' ');
    if(authType !== 'Bearer' && !token) {
        return res.status(401).json({
            message: 'Authorization type Bearer & Token required'
        });
    }

    try{
        const decoded = jwt.verify(token, secret);
        if(!decoded.username){
            return res.status(401).json({
                message: 'Invalid token'
            });
        } else {
            next();
        }
  

    }catch(error){
        res.send(401).json({
            message: 'Invalid token'
        });
        console.log("USER AUTH ERROR", error);
    }

}

module.exports = userMiddleware;