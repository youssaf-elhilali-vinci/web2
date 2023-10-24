const btnClick = document.querySelector("#btn-click"); //'#' pour un id et '.' pour une class
const btnTime = document.querySelector("#btn-time");//quand on met rien c'est pour les balise


btnClick.addEventListener("mouse-over",startTime );
btnTime.addEventListener("click", clearAlert);

btnClick.addEventListener("click", countClick)



let timeoutID;
const now = new Date();
const delayInSeconds = now.toLocaleTimeString();

 --fyfyf
//démarre le temps
function startTime() {
    timeoutID = setTimeout(() => {
        alert(`You asked for this popup ${delayInSeconds}s ago!`);
    }, 5000);
}

//compte les click
function countClick() {
    
}

function clearAlert() {
    clearTimeout(timeoutID);
  }

