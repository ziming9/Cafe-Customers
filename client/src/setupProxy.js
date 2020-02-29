// HTTP-Proxy Middleware
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/persons', 
        { target: 'http://localhost:5000' }
    ));
    app.use(proxy('/persons/private', 
        { target: 'http://localhost:5000' }
    ));
    app.use(proxy('/users', 
        { target: 'http://localhost:5000' }
    ));
    app.use(proxy('/persons/add', 
        { target: 'http://localhost:5000' }
    ));
    app.use(proxy('/persons/p_add', 
        { target: 'http://localhost:5000' }
    ));
    app.use(proxy('/persons_list', 
        { target: 'http://localhost:5000' }
    ));
}