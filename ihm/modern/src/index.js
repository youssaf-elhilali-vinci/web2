import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import FC24 from "./img/fc24_image.jpg"
import SNOWFALL from "./img/snowfall.jpg"


const main = document.querySelector('main');

const homePage =  `
    <div class="text-center">
        <h1>Mon jeu favori</h1>
        <div>
            <img src="${FC24}" alt="photo du jeu fc 24" width=50% height=50%/>
        </div>


        <h1>Ma série favori</h1>

        <div>
            <img src="${SNOWFALL}" alt="photo de la série snowfall" width=50% height=50%/>
        </div>
<div>
`

main.innerHTML += homePage 
