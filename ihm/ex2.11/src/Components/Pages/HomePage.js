import { clearPage } from "../../utils/render";

const HomePage = () => {
  clearPage()
  const main = document.querySelector('main');
  main.innerHTML = 'Deal with the content of your HomePage';
};

export default HomePage;
