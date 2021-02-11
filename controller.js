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

// add client
exports.addClient = function(req, res) {
    var name = req.body.name;
    var account = req.body.account;
    var address = req.body.address;
    var phone = req.body.phone;
    var description = req.body.description;
    var balance = req.body.balance;

    connection.query('INSERT INTO client (name, bank_account, address, phone_number, description, balance) VALUES(?,?,?,?,?,?)',[name,account,address,phone,description,balance],
    function(error, result){
        if(error){
            console.log(error);
            response.fail("Failed, something went wrong", error, res);
        } else {
            var sql = "UPDATE client SET client_id = "+response.padNumber(result.insertId)+" WHERE id ="+result.insertId;
            connection.query(sql, function(err, rst){
                if(err){
                    console.log(err);
                }
            });
            response.ok("Success inserted data ", res);
        }
    });
}