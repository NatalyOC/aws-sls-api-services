const express = require('express');
const bodyParser = require('body-parser');
const methodOverride  = require('method-override');
const cors=require('cors');


const {
    routes: planetRoutes,
} = require('./routes/planet');

const {
    routes: filmsRoutes,
} = require('./routes/film');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


app.use('/swapi', planetRoutes);
app.use('/endpoint',filmsRoutes);

module.exports = app;