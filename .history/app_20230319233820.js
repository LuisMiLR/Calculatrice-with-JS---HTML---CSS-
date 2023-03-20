

const divId = document.createElement("div");
divId.setAttribute(id,"display");
document.body.appendChild(divId);







function addElement() {
    // crée un nouvel élément div
    let newDiv = document.createElement('div');
    // et lui donne un peu de contenu
    let newContent = document.createTextNode('9');
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
    
}