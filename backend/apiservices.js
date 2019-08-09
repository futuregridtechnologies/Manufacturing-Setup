var rp = require('request-promise');

let url = 'http://ec2-18-219-87-48.us-east-2.compute.amazonaws.com:3000/';
function getApi(endpoint) {
    return new Promise((resolve, reject) => {
    var options = {
        uri: url + endpoint,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (data) {
            resolve(data)
        })
        .catch(function (err) {
        });
    })
}

function postApi(endpoint, postBody) {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'POST',
            uri: url + endpoint,
            body: postBody,
            json: true // Automatically stringifies the body to JSON
        };
         
        rp(options)
            .then(function (parsedBody) {
                // POST succeeded...
                resolve(parsedBody);
            })
            .catch(function (err) {
                // POST failed...
            });
    })
}

module.exports = {
    getApi,
    postApi
}