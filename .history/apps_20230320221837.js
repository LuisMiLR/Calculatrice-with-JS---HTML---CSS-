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
buttons.appendChild(button1);

const button2 = document.createElement('div');
button2.className = "button";
button2.textContent = "*";
buttons.appendChild(button2);

const button3 = document.createElement('div');
button3.className = "button";
button3.textContent = "CE";
buttons.appendChild(button3);

const button4 = document.createElement('div');
button4.className = "button";
button4.textContent = "7";
buttons.appendChild(button4);

const button5 = document.createElement('div');
button5.className = "button";
button5.textContent = "8";
buttons.appendChild(button5);

const button6 = document.createElement('div');
button6.className = "button";
button6.textContent = "9";
buttons.appendChild(button6);

const button7 = document.createElement('div');
button7.className = "button";
button7.textContent = "-";
buttons.appendChild(button7);

const button8 = document.createElement('div');
button8.className = "button";
button.textContent = "-";
buttons.appendChild(button7);