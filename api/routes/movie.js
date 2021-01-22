var express = require('express');
var router = express.Router();
var movieController = require("../controller/movieController")

router.get('/movies', movieController.getAllMovies);

module.exports = router;
