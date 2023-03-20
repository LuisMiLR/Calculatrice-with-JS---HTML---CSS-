
const divId = document.createElement("div");
divId.setAttribute("id","display");
document.body.appendChild(divId);



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
     addElement(6)


/*document.body.onload = addElement;*/

