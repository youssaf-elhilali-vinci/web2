import { clearPage } from "../../utils/render";

const AddMoviePage  = () => {
    clearPage()
    formToAddMovie()
}


function formToAddMovie(){
    const main = document.querySelector('main')
        main.innerHTML += `
        <div class="text-center">
            <h2>Add a movie</h2>

            <form>
                <label for="title">Titre du film:</label>
                <input class="form-control" type="text" id="title" name="title" required><br>

                <label for="duration">Durée du film (en minutes):</label>
                <input class="form-control" type="number" id="duration" name="duration" required><br>

                <label for="budget">Budget de production (en millions):</label>
                <input class="form-control" type="number" id="budget" name="budget" required><br>

                <label for="link">Lien vers la description du film:</label>
                <input class="form-control" type="url" id="link" name="link" required><br>

                <input type="submit" class="btn btn-primary" value="Add Moovie">
            </form>
        </div>

    `
    const myForm = document.querySelector('form')
    const title = document.querySelector('#title')
    const duration = document.querySelector('#duration')
    const budget = document.querySelector('#budget')
    const link = document.querySelector('#link')

    myForm.addEventListener('submit', async (e) => {
        e.preventDefault();
    


    const movieToBeCreated ={
        title : title.value,
        duration: Number(duration.value),
        budget: Number(budget.value),
        link: link.value,
    };

    
    // eslint-disable-next-line no-console
    console.log("voici le nouveau film : " , movieToBeCreated)
});


}

  
  export default AddMoviePage ;