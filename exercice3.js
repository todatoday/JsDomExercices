let images = [
    "https://via.placeholder.com/450x50",
    "https://via.placeholder.com/50x150",
    "https://via.placeholder.com/250x250",
    "https://via.placeholder.com/50x50",
    "https://via.placeholder.com/200x100",
]

//pour chaque url du tableau créer un élément img
//dont la source est l'url en question




for(let i = 0; i <images.length; i++){

    let image = document.createElement("img");
    image.setAttribute("src", images[i]);
    image.textContent = images[i];

    document.body.appendChild(image);
}