const jwt = require('jsonwebtoken');
const createError = require('http-errors');
require('dotenv').config();
const verifyAccessToken = (req, res, next) => {
    if (!req.headers['authorization']) return next(createError.Unauthorized())
    const authHeader = req.headers['authorization'].split(' ');
    const token = authHeader[1];
    jwt.verify(token, process.env.accessTokenSecret, (err, payload) => {
        if (err) {
            if (err.name === 'JsonWebTokenError') return next(createError.Unauthorized())
            else {
                return next(createError.Unauthorized(err.message))
            }
        }
        req.payload = payload
        next();
    })
}

module.exports = verifyAccessToken;