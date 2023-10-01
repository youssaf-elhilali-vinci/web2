var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');

var app = express();





let cptGet = 0;
let cptGetFilms = 0;
let cptPost = 0;
let cptDelete = 0;
app.use((req, res, next) => {
    const {method, path} = req; // methode sont toute les methode utilisé exemple GET, POST,... | path le chemin url | ce qui est renvoyer
    
    console.log(method);
    console.log(path);
    
    if(method == "GET" && path == "/"){
        cptGet++;
        console.log("counter GET / : " + cptGet)
    }
    if(method == "GET" && path == "/films"){
        cptGetFilms++;
        console.log("counter GET /films : " + cptGetFilms)
    }
    if(method == "POST" && path == "/films"){
        cptPost++;
        console.log("counter POST /films: " + cptPost)
    }
    if(method == "DELETE" && path == "/films"){
        cptDelete++;
        console.log("counter DELETE /films: " + cptDelete)
    }
    next(); //passe au suivant
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', filmsRouter);

module.exports = app;
