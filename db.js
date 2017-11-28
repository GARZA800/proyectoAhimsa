var mysql = require('mysql')

var pool = {
}

exports.connect = function(done) {
    pool = mysql.createPool ({
        host: 'localhost',
        user: 'root',
        password: 'drhouse90',
        port: '3306',
        database: 'Ahimsa'
    })
    done()
}

exports.get = function() {
    return pool
}