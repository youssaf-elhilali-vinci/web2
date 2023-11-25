import { clearPage } from "../../utils/render";

const AddMoviePage  = () => {
    clearPage()
    formToAddMovie()
}


function formToAddMovie(){
    const main = document.querySelector('main')
        main.innerHTML += `
            <h2>Add a movie</h2>

            <form id="monFormulaire">
                <label for="saisie">Add your movie :</label>
                <input type="text" id="saisie" name="saisie" required>

                <input type="submit" value="Soumettre">
            </form>
        `
}

  
  export default AddMoviePage ;