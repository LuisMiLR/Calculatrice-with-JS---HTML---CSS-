const divId = document.createElement("div");
const container = document.querySelector('.container');


container.appendChild(divId);
divId.setAttribute("id","display");

const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

const button = document.createElement('div');
button.className = "bouton";
buttons.appendChild(button);

const button = document.createElement('div');
button.className = "bouton";
buttons.appendChild(button);



