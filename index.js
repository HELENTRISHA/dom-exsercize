const body = document.body;

body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/3px-tile.png')"


const replaceText= document.getElementById("replace-text")

replaceText.style.color = "#777";
replaceText.style.fontSize = "2rem";
replaceText.innerHTML = "I can do <em>whatever</em> I want with JavaScript."

const blueElements = document.getElementsByClassName("blue");

for (let i = 0 ; i < blueElements.length; i++) {
    blueElements[i].style.color = "blue";
}
const openModal  = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
openModal.addEventListener("click", () =>{
    modal.style.display = "block";
});
closeModal.addEventListener("click", () =>{
    modal.style.display = "none";
});

const select = document.getElementById("texture-selector");
const textureBackground = document.getElementById("texture-background");


select. addEventListener("change", (event) => {
textureBackground.style.backgroundImage = `url('${event.target.value}')`
});
