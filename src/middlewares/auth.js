const jwt = require('jsonwebtoken')

module.exports = (req, resp, next) => {

    const token = req.headers.authorization

    jwt.verify(token, 'myprivatekey', (err, decoded) => {

        console.log("Error: ", err)
        console.log("Decoded: ", decoded)

        if (err) {
            return resp.json(err)
        }

        return next()

    })

}