// HTTP-Proxy Middleware
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/persons', 
        { target: 'http://localhost:5000' }
    ));
}