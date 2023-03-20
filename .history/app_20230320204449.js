//document.addEventListener('DOMContentLoaded', () => {
const container = document.querySelector('.container');

const divId = document.createElement("div");
container.appendChild(divId);
divId.id = 'display';

let buttons = document.createElement("div");
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
button9.textContent = "5";
buttons.appendChild(button9);

const button10 = document.createElement('div');
button10.className = "bouton10";
button10.textContent = "6";
buttons.appendChild(button10);

const button11 = document.createElement('div');
button11.className = "bouton11";
button11.textContent = "+";
buttons.appendChild(button11);

const button12 = document.createElement('div');
button12.className = "bouton12";
button12.textContent = "1";
buttons.appendChild(button12);

const button13 = document.createElement('div');
button13.className = "bouton13";
button13.textContent = "2";
buttons.appendChild(button13);

const button14 = document.createElement('div');
button14.className = "bouton14";
button14.textContent = "3";
buttons.appendChild(button14);

const button15 = document.createElement('div');
button15.className = "bouton15";
button15.textContent = ".";
buttons.appendChild(button15);

const button16 = document.createElement('div');
button16.className = "bouton16";
button16.textContent = "(";
buttons.appendChild(button16);

const button17 = document.createElement('div');
button17.className = "bouton17";
button17.textContent = "0";
buttons.appendChild(button17);

const button18 = document.createElement('div');
button18.className = "bouton18";
button18.textContent = ")";
buttons.appendChild(button18);

const button19 = document.createElement("div");
button19.className = "bouton19";
button19.id = "egal";
button19.textContent = "=";
buttons.appendChild(button19);

let display = document.getElementById('display');

buttons = Array.from(document.getElementsByClassName('bouton, Bouton'));

buttons.map( button => { 
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case 'CE':  
                if(display.innerText){ 
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=': 
                try{
                    display;innerText = eval(display.innerText);
                } catch {
                    display;innerText = 'Error';
                }
                break;    
            default:
                display.innerText += e.target.innerText;        
        }
    }); 
});
