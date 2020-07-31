const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid')

function jwtSign(jwtPayload) {
    return jwt.sign(jwtPayload, 'myprivatekey', {
        expiresIn: 60
    })
}

module.exports = {
    register(req, resp) {

        const { name, email, password } = req.body

        const id = uuid()

        const token = jwtSign({ id })

        resp.json({
            id,
            name,
            email,
            token
        })

    },
    login(req, resp) {
    
        const { email, password } =req.body

        if(email !== 'elieudo.maia@gmail.com' || password !== '123') {
            return resp.json({
                error: 'User or password wrong'
            })
        }

        const id = uuid()

        const token = jwtSign({ id })

        return resp.json({
            id,
            email,
            token
        })

    }
}