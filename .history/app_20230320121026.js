
const container = document.querySelector('.container');

const divId = document.createElement("div");
container.appendChild(divId);
divId.setAttribute("id","display");

const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

const button = document.createElement('div');
button.className = "bouton";
button.textContent = "C";
buttons.appendChild(button);

const button1 = document.createElement('div');
button1.className = "bouton1";
button.textContent = "/";
buttons.appendChild(button1);

const button2 = document.createElement('div');
button2.className = "bouton2";
button.textContent = "*";
buttons.appendChild(button2);

const button3 = document.createElement('div');
button2.className = "bouton3";
button.textContent = "&la";
buttons.appendChild(button2);



