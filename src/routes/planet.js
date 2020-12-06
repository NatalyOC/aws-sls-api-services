const express = require('express');
const planetsCtrl=require('../controllers/planets');




const routes = express.Router({
    mergeParams: true
});

routes.route('/:id')
  .get(planetsCtrl.findById);


module.exports = {
    routes,
};