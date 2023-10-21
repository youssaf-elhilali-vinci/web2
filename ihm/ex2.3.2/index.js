const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("click", (e) => {
        e.target.innerText = e.target.style.backgroundColor; // sert à écrire la couleur de façon  RVB(155, 0, 0)
        e.target.style.width = "100px";
        e.target.style.height = "100px";
      });
})