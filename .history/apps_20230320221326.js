const container = document.querySelector('.container');

const divId = document.createElement("div");
container.appendChild(divId);
divId.id = 'display';

let buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

const button = document.createElement('div');
button.className = "button";
button.textContent = "C";
buttons.appendChild(button);

const button1 = document.createElement('div');
button1.className = "button";
button1.textContent = "/";
buttons.appendChild(button);