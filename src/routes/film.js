const express = require('express');
const filmsCtrl = require('../controllers/films');

const routes = express.Router();
routes.route('/')
  .get(filmsCtrl.getAllFilms)            
  .post(filmsCtrl.createFilm);

module.exports = {
    routes,
};