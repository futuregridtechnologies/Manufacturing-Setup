const express = require('express');
// let database = require('./database');
const cors = require('cors');
const apiCall = require('./apiservices');

const app = express();
const port = 4000;

const bodyParser = require('body-parser');
const http = require('http').Server(app);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
    apiCall.getApi('allRecipes').then(data => {
        res.send(data)
    })
//   res.send('Welcome to File Manager Server API');
});

http.listen(port, () => {
  console.log('listening on *:3000');
});
