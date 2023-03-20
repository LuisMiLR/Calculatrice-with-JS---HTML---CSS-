
const divId = document.createElement("div");
divId.setAttribute("id","display");
document.body.appendChild(divId);
//const divId2 = document.createElement("div");
//divId.appendChild(divId2)


function addSingleElement(n) {
    
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

function addElement(newChildDiv) {
    for (i=0;i<19;i++)
    // crée un nouvel élément div
    newChildDiv = document.createElement('div');
    // ajoute une class
    newChildDiv.classList.add("buttons");
    // et lui donne un peu de contenu
    //let newContent = document.createTextNode(n);
    // ajoute le nœud texte au nouveau div créé
    newChildDiv.appendChild(newContent);

     // ajoute le nouvel élément créé et son contenu dans le DOM
    let currentDiv = document.getElementById('div1');
    document.body.insertBefore(newChildDiv, currentDiv);
}
addElement()

//const divId = document.createElement("div");

/*document.body.onload = addElement;*/

