const filmRegisterPage = () => {
  renderToFilmRegisterPage()
};

const main = document.querySelector('main')
function renderToFilmRegisterPage(){    
    main.innerHTML = `
        <h1>Films enregistrés</h1>
    ` 
}

export default filmRegisterPage;
