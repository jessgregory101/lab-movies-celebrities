const router = require("express").Router();
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

router.get("/movies/create", (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('movies/new-movie', { celebrities });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

router.post('/movies/create', (req, res, next) => {
  const { title, genre, plot, cast } = req.body;

  const movieData = {
    title,
    genre,
    plot,
    cast
  };

  Movie.create(movieData)
    .then(movieFromDB => {
      console.log(`New movie created: ${movieFromDB.title}.`);
      res.redirect('/movies');
    })
    .catch(error => {
      res.render('movies/new-movie', { error: 'Error creating movie.' });
    });
});

module.exports = router;

