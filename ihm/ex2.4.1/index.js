let maxTime = 5; //en seconde
const expectedClick = 10;
let startTime;
let counttClicks;
let timeReference;

const btnClick = document.querySelector("#btn-click"); //'#' pour un id et '.' pour une class
const btnTime = document.querySelector("#btn-time");//quand on met rien c'est pour les balise



btnClick.addEventListener('mouseenter', startCounter );
btnTime.addEventListener('click',clickHandler );


function startCounter() {
    startTime = new Date();
    timeReference = setTimeout(printLoss, maxTime * 1000);
}

function clickHandler() {
    ++counttClicks;
    if (counttClicks === expectedClick){
        clearTimeout(timeReference);
        win();
    }
}

function printLoss() {
    const timeSpent = new Date().getTime() - startTime.getTime();
    button.style.display = 'none';
    message.innerHTML = `Game over, you did not click ${expectedClick} times within ${maxTime}s!
      You clicked ${counttClicks} times`;
  }
  
  function win() {
    const timeSpent = new Date().getTime() - startTime.getTime();
    button.style.display = 'none';
    message.innerHTML = `You win ! you clicked ${expectedClick} times within ${timeSpent}s!`;
  }


