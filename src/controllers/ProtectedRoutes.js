module.exports = {
    protectedRoute(req, resp) {
        resp.json({
            name: 'Protected route',
            description: 'This route can be accessed only by authenticated user'
        })
    }
}