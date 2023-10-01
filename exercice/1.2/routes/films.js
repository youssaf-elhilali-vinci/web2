var express = require('express');
var router = express.Router();

const FILMS = [{
    id: 1,
    title: "Harry Potter",
    duration: 89,
    budget: 500000,
    link: "https://www.imdb.com/title/tt0241527/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_harry%2520pot"
  },
  {
    id: 2,
    title: "Fast and Furius",
    duration: 89,
    budget: 1000000,
    link: "https://www.imdb.com/title/tt5433138/?ref_=fn_al_tt_2"
  },
  {
    id: 3,
    title: "Power",
    duration: 1231,
    budget: 2000000,
    link: "https://www.imdb.com/title/tt3281796/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_Power"
  }]



/* GET home page. */
router.get('/', function(req, res, next) {
  const minimumFilmDuration = req?.query?.['minimum-duration'] ? Number(req.query['minimum-duration']) : undefined; // si la premiere partie est true alors la variable minimumDurationFilm est egale à la deuxiemem partie( celle après le point d'interrogation) sinon elle est undifined

  if (minimumFilmDuration === undefined)
    res.json(FILMS);

  const filmsReachingMinimumDuration = FILMS.filter((film) => film.duration >= minimumFilmDuration);

 

  res.json(filmsReachingMinimumDuration);
});



// Read the film identified by an id in the FILMS
router.get('/:id', (req, res, next) => {
  console.log(`GET /films/${req.params.id}`);

  const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0 ) return res.sendStatus(404);


  res.json(FILMS[indexOfFilmFound]);
});

// CREATION new film 
router.post('/', (req, res, next) => {
  console.log(req.body.title);
  console.log(req.body.duration);
  console.log(req.body.budget);
  console.log(req.body.link);

  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

   const newFilm = {
    id: nextId,
    title: req.body.title,
    duration: req.body.duration,
    budget: req.body.budget,
    link: req.body.link
   };

   FILMS.push(newFilm);

  res.json(FILMS);
});







module.exports = router;
