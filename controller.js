'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req, res){
    response.ok('Rest API Running ....', res);
}

// show all client
exports.showallclient = function(req, res){
    connection.query('SELECT * FROM client', function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// show client by id
exports.showclientbyid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM client WHERE id = ?', [id], function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}