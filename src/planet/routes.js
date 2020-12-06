const express = require('express');
const planetsCtrl=require('../controllers/planets');




const routes = express.Router({
    mergeParams: true
});

routes.route('/findById/:id')
  .get(planetsCtrl.findById);


module.exports = {
    routes,
};