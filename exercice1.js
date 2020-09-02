let urls = [
    "https://www.google.fr",
    "https://developer.mozilla.org/fr",
    "https://fr.wikipedia.org/wiki",
    "https://www.amazon.fr"
]


//Ajouter au body des liens dont l'attribut href 
//est pour chacun une url contenue dans le tableau
//donc une balise <a> pour chaque lien contenu dans le tableau

for(let i =0; i < urls.length; i++){

    let liens = document.createElement("a");
    liens.setAttribute("href", urls[i]);
    liens.textContent = urls[i];
    document.body.appendChild(liens);
    let bre = document.createElement("br");
    document.body.appendChild(bre);
    liens.style.color = "green";
    liens.style.fontSize = "60px";
    liens.style.fontWeight = "bold";
   
}



let odd = ["https://www.google.fr",
"https://developer.mozilla.org/fr",
"https://fr.wikipedia.org/wiki",
"https://www.amazon.fr"
    
]

for(let i = 0; i < odd.length; i++){

    let lien = document.createElement("a"); // ajouter un élement a 
    lien.setAttribute("href", odd[i]); //ajouter un attribue href à notre élement a
    lien.textContent = odd[i]; //ajouter du text à notre élement a c'est notre tableau odd[i]

    document.body.appendChild(lien); //ajouter nos lien a notre body

    let bre = document.createElement("br"); //creer un nouveau élement br pour sauter la lign
    document.body.appendChild(bre); //ajouter notre élement au body

    lien.style.color = "black";
    lien.style.fontSize = "50px";
    lien.style.fontWeight = "bold";

}



// for(let i = 0; i < tableau.length; i++){
//     let liens =  document.createElement("a");
//     liens.setAttribute("href", tableau[i]);
//     liens.textContent = tableau[i];

//     document.body.appendChild(liens);
// }