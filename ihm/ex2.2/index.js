let nbre = 0 ;
const body = document.querySelector("body");
const btn1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

body.addEventListener('click', () => {
    console.log("efheifuehifuhef")
    nbre++;
    
    btn1.innerText = 'myBtn1 : I have been clicked : ' + nbre;
    if (nbre<=9 && nbre >= 5 ){ h2.innerText = "Bravo, bel échauffement !"}
    if ( nbre>10 ){ h2.innerText = "Vous êtes passé maître en l'art du clic !"}
  });
  
