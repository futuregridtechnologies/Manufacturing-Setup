var rp = require('request-promise');

function getApi() {
    var options = {
        uri: 'http://ec2-18-219-87-48.us-east-2.compute.amazonaws.com:3000/allRecipes',

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