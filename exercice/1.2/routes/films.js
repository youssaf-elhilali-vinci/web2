var express = require("express");
var router = express.Router();

const FILMS = [
  {
    id: 1,
    title: "Harry Potter",
    duration: 89,
    budget: 500000,
    link: "https://www.imdb.com/title/tt0241527/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_harry%2520pot",
  },
  {
    id: 2,
    title: "Fast and Furius",
    duration: 89,
    budget: 1000000,
    link: "https://www.imdb.com/title/tt5433138/?ref_=fn_al_tt_2",
  },
  {
    id: 3,
    title: "Power",
    duration: 1231,
    budget: 2000000,
    link: "https://www.imdb.com/title/tt3281796/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_Power",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  const minimumFilmDuration = req?.query?.["minimum-duration"] ? Number(req.query["minimum-duration"]) : undefined; // si la premiere partie est true alors la variable minimumDurationFilm est egale à la deuxiemem partie( celle après le point d'interrogation) sinon elle est undifined
  if (minimumFilmDuration <= 0) return res.sendStatus(400);

  

  if (minimumFilmDuration === undefined || isNaN(minimumFilmDuration)) return res.json(FILMS);
  
  const filmsReachingMinimumDuration = FILMS.filter(
    (film) => film.duration >= minimumFilmDuration
  );

  res.json(filmsReachingMinimumDuration);

});

// Read the film identified by an id in the FILMS
router.get("/:id", (req, res, next) => {
  console.log(`GET /films/${req.params.id}`);
  
  //const id = req?.params?.id !== 'number' ? undefined : req.params.id;

  const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

  console.log(FILMS.length);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  res.json(FILMS[indexOfFilmFound]);
});

// CREATION new film
router.post("/", (req, res, next) => {
  const title =
    req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const link =
    req?.body?.link?.trim()?.length !== 0 ? req.body.link : undefined;

  const duration =
    typeof req?.body?.duration == "number" || req.body.duration < 0
      ? req.body.duration
      : undefined;
  const budget =
    typeof req?.body?.budget == "number" || req.body.budget < 0
      ? req.body.budget
      : undefined;

  const titleOfFilm = req?.body?.title;

  for (let i = 0; i < FILMS.length; i++) {
    if (FILMS[i].title == titleOfFilm) return res.sendStatus(409);
  }

  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };

  FILMS.push(newFilm);

  res.json(FILMS);
});

//DELETE one
router.delete("/:id", (req, res, next) => {
  const id = FILMS.findIndex((film) => film.id == req.params.id);

  if (id < 0 ) return res.sendStatus(404); 
  
  const itemsRemovedFromFILMS = FILMS.splice(id, 1); //pourquoi mettre le 1 aussi ??
  const itemRemoved = itemsRemovedFromFILMS[0];

  res.json(itemRemoved);

});

// Update a pizza based on its id and new values for its parameters
router.patch('/:id', (req, res) => {

  const title = req?.body?.title;
  const content = req?.body?.content;


  if ((!title && !content) || title?.length === 0 || content?.length === 0) return res.sendStatus(400);

  const foundIndex = FILMS.findIndex((films) => films.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedPizza = {...FILMS[foundIndex], ...req.body};

  FILMS[foundIndex] = updatedPizza;

  res.json(updatedPizza);
});

router.put('/:id', (req, res) => {

  const newId = req?.body?.title;
  const newTitle = req?.body?.title;
  const newDuration = req?.body?.duration; 
  const newBudget = req?.body?.budget;
  const newLink = req?.body?.link;

  if (!newTitle || !newDuration || !newBudget ||!newLink ) return res.sendStatus(400);

  const foundID = FILMS.foundIndex((films) => films.id == req.params.id);

  for (let i = 0; i < FILMS.length; i++) {
    if (FILMS[i].id == newId)
    return res.sendStatus(409);
  }
  

  res.json(updatedPizza);
});





module.exports = router;
