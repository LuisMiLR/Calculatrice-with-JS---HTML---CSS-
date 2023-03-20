const divId = document.createElement("div");
divId.classList.add("jaune");
divId.textContent = "jaune";
document.body.appendChild(divId);




//divId.setAttribute(id,"display");


/*let myElement = document.createElement(div);
document.body.appendChild(div);*/






/*function addElement() {
    // crée un nouvel élément div
    let newDiv = document.createElement('div');
    // et lui donne un peu de contenu
    let newContent = document.createTextNode('9');
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

     // ajoute le nouvel élément créé et son contenu dans le DOM
    let currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}
     addElement()*/

document.body.onload = addElement;

function addElement() {
// create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Hi there and greetings!");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv);
}