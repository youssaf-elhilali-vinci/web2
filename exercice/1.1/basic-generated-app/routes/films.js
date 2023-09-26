var express = require('express');
var router = express.Router();

const film = [
  {
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
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('GET/film');
  res.json(film);
});

module.exports = router;
