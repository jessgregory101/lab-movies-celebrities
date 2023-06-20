// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model');


router.get("/celebrities/create", (req, res) => {
    res.render('celebrities/new-celebrity')
});

router.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityFromDB => {
      console.log(`New celebrity created: ${celebrityFromDB.name}.`);
      res.redirect('/celebrities');
    })
    .catch(error => {
      res.render('celebrities/new-celebrity', { error: 'Error creating celebrity.' });
    });
});

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities => res.render("celebrities/celebrities", { celebrities: allCelebrities }))
    .catch(error => {
      res.render('error', { error: 'Error retrieving celebrities.' });
    });
});
  

module.exports = router;
