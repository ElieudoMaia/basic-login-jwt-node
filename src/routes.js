const routes = require('express').Router()

const AuthController = require('./controllers/Auth')
const FreeRoutes = require('./controllers/FreeRoutes')
const ProtectedRoutes = require('./controllers/ProtectedRoutes')

const AuthMiddleware = require('./middlewares/auth')

routes.post('/register', AuthController.register)
routes.post('/login', AuthController.login)
routes.get('/free', FreeRoutes.freeRoute)
routes.get('/protected', AuthMiddleware, ProtectedRoutes.protectedRoute)

module.exports = routes