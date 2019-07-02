const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.API_PORT || 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: process.env.MARIA_ADDRESS || 'mysql',
    user: process.env.MARIA_USERNAME || 'root',
    password: process.env.MARIA_PASSWORD || '',
    database: process.env.MARIA_DATABASE_NAME || 'pokemon',
    insecureAuth: true

});
// connect to database
mc.connect();
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../app/routes/appRoutes');
routes(app);

module.exports = mc;

const insert = require('./knexXlsxInsert')

insert.insertTabela();