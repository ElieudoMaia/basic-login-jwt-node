require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = (req, resp, next) => {

    const authString = req.headers.authorization

    const [type, token] = authString.split(' ')

    if(!token || (type !== 'Bearer' && type !== 'bearer')) {
        return resp.json({
            message: 'Incorrect token format'
        })
    }

    jwt.verify(token, process.env.AUTH_JWT_SECRET, (err, decoded) => {

        console.log("Error: ", err)
        console.log("Decoded: ", decoded)

        if (err) {
            return resp.json(err)
        }

        return next()

    })

}