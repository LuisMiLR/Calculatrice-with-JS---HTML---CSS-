
const container = document.querySelector('.container');

const divId = document.createElement("div");
container.appendChild(divId);
divId.setAttribute("id","display");

const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

const button = document.createElement('div');
button.className = "bouton";
buttons.appendChild(button);

const button1 = document.createElement('div');
button1.className = "bouton1";
buttons.appendChild(button1);


