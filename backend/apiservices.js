var rp = require('request-promise');

let url = 'http://ec2-18-219-87-48.us-east-2.compute.amazonaws.com:3000/';
function getApi(endpoint) {
    var options = {
        uri: url + endpoint,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (data) {
            console.log(data);
            // resolve(data)
        })
        .catch(function (err) {
        });
}


module.exports = {
    getApi,
}