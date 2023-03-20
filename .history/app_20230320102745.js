
const divId = document.createElement("div");
divId.setAttribute("id","display");
document.body.appendChild(divId);
const divId = document.createElement("div");


function addElement(n) {
    // crée un nouvel élément div
    let newDiv = document.createElement('div');
    // ajoute une class
    newDiv.classList.add("buttons");
    // et lui donne un peu de contenu
    let newContent = document.createTextNode(n);
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

     // ajoute le nouvel élément créé et son contenu dans le DOM
    let currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}
     addElement()

//const divId = document.createElement("div");

/*document.body.onload = addElement;*/

