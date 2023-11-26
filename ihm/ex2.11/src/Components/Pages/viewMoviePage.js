import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheets/main.css';

import FC24 from "../../img/fc24_image.jpg"
import SNOWFALL from "../../img/snowfall.jpg"


const mainWrapper = document.querySelector('main');

const viewMoviePage  = () => {
    renderToHomePage()
}


function renderToHomePage() {
    const homePage =  `
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <h3>Welcome to myMovies !</h3>

                <p>Here you can find a selection of my favorite serie and game ; )</p>
            </div>
        </div>
    
        <div class="row mb-3">
            <div class="col">
                <button id="about" class="btn btn-dark">About</button>
            </div>
        </div>


        <div class="row">
            <div class="col-12 col-lg-6">
                <img src="${FC24}" alt="photo du jeu fc 24" width=50% height=50%/>
            </div>

            <div class="col-12 col-lg-6">
                <img src="${SNOWFALL}" alt="photo de la série snowfall" width=50% height=50%/>
            </div>
        </div>
    </div>
`
    mainWrapper.innerHTML = homePage

    const btnForAbout = document.getElementById('about')
    btnForAbout.addEventListener("click", renderToAboutPage)
    

}


function renderToAboutPage() {
    
    const backPage = `
    <div class="container text-center">
    
    <h1>L'auteur de cette page est Youssaf El hilali, 
        étudiant dans une haute école dénomé Institut Léonard de Vinci
    </h1>
 
        <div class="row mb-3">
            <div class="col">
                <button id="back" class="btn btn-dark">About</button>
            </div>
        </div>
    </div>
    
    `
    mainWrapper.innerHTML = backPage
    
    const btnForBack = document.getElementById('back')
    btnForBack.addEventListener("click", renderToHomePage)

}

  
  export default viewMoviePage ;