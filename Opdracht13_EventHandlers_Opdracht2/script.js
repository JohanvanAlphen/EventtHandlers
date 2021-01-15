// Opdracht 1

mybutton.addEventListener("click", alertText);
function alertText() {

    alert("Button clicked");
}

// Opdracht 2

const mybody = document.querySelector(".blue-background");
const secondbutton = document.querySelector(".btn-changebackground");

const changeColor = () => {

    mybody.classList.add("red-background");
};
secondbutton.addEventListener("click", changeColor);


