const divId = document.createElement("div");
const container = document.querySelector('.container');
const button = document.createElement('div');
button.className = "bouton";

container.appendChild(divId);
divId.setAttribute("id","display");

const buttons = document.createElement("div");
buttons.classList.add("boutons");
container.appendChild(buttons);
buttons.appendChild(button);



