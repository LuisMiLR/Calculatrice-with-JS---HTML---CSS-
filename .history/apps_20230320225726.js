const container = document.querySelector('.container');

const divId = document.createElement("div");
container.appendChild(divId);
divId.id = 'display';

let buttonss = document.createElement("div");
buttonss.classList.add("buttons");
container.appendChild(buttonss);

const button = document.createElement('div');
button.className = "button";
button.textContent = "C";
buttonss.appendChild(button);

const button1 = document.createElement('div');
button1.className = "button";
button1.textContent = "/";
buttonss.appendChild(button1);

const button2 = document.createElement('div');
button2.className = "button";
button2.textContent = "*";
buttonss.appendChild(button2);

const button3 = document.createElement('div');
button3.className = "button";
button3.textContent = "CE";
buttonss.appendChild(button3);

const button4 = document.createElement('div');
button4.className = "button";
button4.textContent = "7";
buttonss.appendChild(button4);

const button5 = document.createElement('div');
button5.className = "button";
button5.textContent = "8";
buttonss.appendChild(button5);

const button6 = document.createElement('div');
button6.className = "button";
button6.textContent = "9";
buttonss.appendChild(button6);

const button7 = document.createElement('div');
button7.className = "button";
button7.textContent = "-";
buttonss.appendChild(button7);

const button8 = document.createElement('div');
button8.className = "button";
button8.textContent = "4";
buttonss.appendChild(button8);

const button9 = document.createElement('div');
button9.className = "button";
button9.textContent = "5";
buttonss.appendChild(button9);

const button10 = document.createElement('div');
button10.className = "button";
button10.textContent = "6";
buttonss.appendChild(button10);

const button11 = document.createElement('div');
button11.className = "button";
button11.textContent = "+";
buttonss.appendChild(button11);

const button12 = document.createElement('div');
button12.className = "button";
button12.textContent = "1";
buttonss.appendChild(button12);

const button14 = document.createElement('div');
button14.className = "button";
button14.textContent = "2";
buttonss.appendChild(button14);

const button15 = document.createElement('div');
button15.className = "button";
button15.textContent = "3";
buttonss.appendChild(button15);

const button16 = document.createElement('div');
button16.className = "button";
button16.textContent = ".";
buttonss.appendChild(button16);

const button17 = document.createElement('div');
button17.className = "button";
button17.textContent = "(";
buttonss.appendChild(button17);

const button18 = document.createElement('div');
button18.className = "button";
button18.textContent = "0";
buttonss.appendChild(button18);

const button19 = document.createElement('div');
button19.className = "button";
button19.textContent = ")";
buttonss.appendChild(button19);

const button20 = document.createElement('div');
button20.id = "equal";
button20.className = "button";
button20.textContent = "=";
buttonss.appendChild(button20);

let display = document.getElementById('display');
buttonss = document.getElementsByClassName('button');

let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);

buttons.map( button => { 
    button.addEventListener('click', (e) => {
        console.log('clicked');
        /*switch(e.target.innerText){
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
});*/





