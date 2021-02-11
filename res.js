'use strict';

exports.ok = function(value, res) {
    var data = {
        'status': 200,
        'value': value
    }

    res.json(data);
    res.end();
};

exports.fail = function(value, error, res) {
    var data = {
        'status': 500,
        'value': value,
        'message': error,
    }

    res.json(data);
    res.end();
};

exports.padNumber = function (number) {
    number = number.toString();

    while(number.length < 4) {
        number = "0" + number;
    }

    return number;
}