
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
button1.textContent = "/";
buttons.appendChild(button1);

const button2 = document.createElement('div');
button2.className = "bouton2";
button2.textContent = "*";
buttons.appendChild(button2);

const button3 = document.createElement('div');
button3.className = "bouton3";
button3.textContent = "CE";
buttons.appendChild(button3);

const button4 = document.createElement('div');
button4.className = "bouton4";
button4.textContent = "7";
buttons.appendChild(button4);

const button5 = document.createElement('div');
button5.className = "bouton5";
button5.textContent = "8";
buttons.appendChild(button5);

const button6 = document.createElement('div');
button6.className = "bouton6";
button6.textContent = "9";
buttons.appendChild(button6);

const button7 = document.createElement('div');
button7.className = "bouton7";
button7.textContent = "-";
buttons.appendChild(button7);

const button8 = document.createElement('div');
button8.className = "bouton8";
button8.textContent = "4";
buttons.appendChild(button8);

const button9 = document.createElement('div');
button9.className = "bouton9";
button9.textContent = "4";
buttons.appendChild(button8);
