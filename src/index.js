const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');

const {
    routes: planetRoutes,
} = require('./planet/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/planet', planetRoutes);

module.exports = app;