let langages = [
    {
        nom: "Python",
        paradigmes: "Orienté objet, impératif et interprété"
    },
    {
        nom: "C",
        paradigmes: "Impératif, procédural, structuré"
    },
    {
        nom: "C++",
        paradigmes: "Générique, orienté objet, procédural"
    },
    {
        nom: "C#",
        paradigmes: "Structuré, impératif, orienté objet"
    },
    {
        nom: "Java",
        paradigmes: "Orienté objet, structuré, impératif, fonctionnel"
    },
    {
        nom: "Javascript",
        paradigmes: "Script, orienté prototype, impératif, fonctionnel"
    },
    {
        nom: "GianniScript",
        paradigmes: "Rital, Orienté Fifa"
    }
]

//pour chaque objet du tableau
//afficher le nom dans un titre (h1, h2 ou h3 etc)
//et afficher les paradigmes dans un paragraphe (p)
//ajouter les deux elements (h et p) dans une div
//ajouter la div au body
//donc pour chaque langage dans le tableau, 
//une div contenant un titre et un paragraph


 for(let i = 0; i < langages.length; i++){
     let dive = document.createElement("div");
     document.body.appendChild(dive);

     let titre = document.createElement("h1");
     titre.textContent = langages[i].nom;
     dive.appendChild(titre);

     let paragraph = document.createElement("p");
     paragraph.textContent = langages[i].paradigmes;
     dive.appendChild(paragraph);

     titre.style.color = "red";
     titre.style.fontSize = "50px";
     paragraph.style.fontWeight = "bold";
     paragraph.style.color = "blue";


   
 }




// for (let i = 0; i < langages.length; i++){ //creer une boucle pour afficher le tableau

//     let dive = document.createElement("div"); //creer une dive 
//     document.body.appendChild(dive); //ajouter la div au body

//     let titre = document.createElement("h2");//crrer un titre h2 
//     titre.textContent = langages[i].nom;// ajouter du text au titre h2
//     dive.appendChild(titre);  //et ajouter le h2 à la div l'élement parent
    
//     let paragraph = document.createElement("p"); // crer une paragraph 
//     paragraph.textContent = langages[i].paradigmes; //ajouter du text à notre paragraph c'est du tableau 
//     dive.appendChild(paragraph); // ajouter notre paragraph à notre div
//     titre.style.color = "red";
//     paragraph.style.color = "blue";
    
// }