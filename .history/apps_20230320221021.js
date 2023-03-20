const container = document.querySelector('.container');

const divId = document.createElement("div");
container.appendChild(divId);
divId.id = 'display';

let buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);