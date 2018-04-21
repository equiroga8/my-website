const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = require("../models/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Eduardo Quiroga' });
});

router.get('/quizzes', function(req, res, next) {

	sequelize.models.quiz.findAll().
	then( quizzes => {
		res.render('quizzes', {quizzes});	
	})
	.catch(Sequelize.ValidationError, error => {
		
	})
	.catch(error => {
	});
});
module.exports = router;
