
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
addSingleElement()

function addElements(newChildDiv) {
    for(i=0;i<19;i++) { 
    // crée un nouvel élément div
    newChildDiv = document.createElement('div');
    // ajoute une class
    newChildDiv.classList.add("buttons");
    // ajoute le nœud texte au nouveau div créé
    newChildDiv.appendChild(newDiv);

     // ajoute le nouvel élément créé et son contenu dans le DOM
    /*let currentDiv = document.getElementById('div1');
    document.body.insertBefore(newChildDiv, currentDiv);*/
    }
}
addElements()



