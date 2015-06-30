var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({

    'host' : 'aws-rds-mysql.crigi8lwbgkh.us-west-2.rds.amazonaws.com',
    'user' : 'awsuser',
    'password' : 'my_aws_password',
    'database' : 'SOPT',
});

router.get('/', function(req, res, next) {
    
    connection.query('select id, title, timestamp from board ' +
                     'order by timestamp desc;', function (error, cursor) {
        res.json(cursor);
    });
});

module.exports = router;