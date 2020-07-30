module.exports = {
    freeRoute(req, resp) {
        resp.json({
            name: 'Free route',
            description: 'This route can be accessed by anyone'
        })
    }
}