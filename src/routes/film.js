const express = require('express');
const filmsCtrl = require('../controllers/films');

const routes = express.Router({
    mergeParams: true
});
routes.route('/findAllFilms')
  .get(filmsCtrl.getAllFilms);             

routes.route('/create')
  .post(filmsCtrl.createFilm);

module.exports = {
    routes,
};