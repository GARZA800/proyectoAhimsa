var db = require('../../db');
var User = require('../models/userModel');

exports.getAll = function(req,res){
    console.log('SELECT * FROM users')
    db.get().query('SELECT * FROM users', function(err, rows) {
        var response = {};
        var data = [];

        if (err) {
            response.status = 'ERROR';
            response.message = err;
        }

        if (rows && rows.length > 0) {
            for (var i=0; i<rows.length; i++){
                var user = new User(rows[i].id, rows[i].username,
                rows[i].password, rows[i].facebook_id, rows[i].facebook_token,
                rows[i].facebook_name, rows[i].facebook_email );
                data.push(user);
            }
            response.status = 'SUCCESS';
            response.message = '';
            response.data = data;
        }

        else {
            response.status = 'ERROR';
            response.message = 'No hay registros';
        }
        res.send(response.data);
    })
}
