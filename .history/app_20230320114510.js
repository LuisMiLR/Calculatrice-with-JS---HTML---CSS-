const divId = document.createElement("div");
const container = document.querySelector('.container');
const button = document.createE

container.appendChild(divId);
divId.setAttribute("id","display");

const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);
buttons.appendChild(button);


