let AWS = require('aws-sdk');

exports.handler = function (event, context, callback) {

    let jsonObj = {};
    let jsonStr = JSON.stringify(jsonObj);


    callback(null, jsonStr);
}