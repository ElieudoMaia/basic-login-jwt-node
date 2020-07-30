const routes = require('express').Router()

const AuthController = require('./controllers/Auth')
const FreeRoutes = require('./controllers/FreeRoutes')
const ProtectedRoutes = require('./controllers/ProtectedRoutes')

routes.post('/register', AuthController.register)
routes.post('/login', AuthController.login)
routes.get('/free', FreeRoutes.freeRoute)
routes.get('/protected', ProtectedRoutes.protectedRoute)

module.exports = routes