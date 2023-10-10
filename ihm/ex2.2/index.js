const nbre = 0 ;
const body = document.querySelector("body");

body.addEventListener('click', () => {
    btn1.innerText = 'myBtn1 : I have been clicked !';
    if (nbre<=9 && nbre >= 5 ) return "Bravo, bel échauffement !"
    if ( nbre>10 ) return "Vous êtes passé maître en l'art du clic !"
  });
  
alert("")