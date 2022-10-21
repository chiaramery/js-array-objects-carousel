/*
    Dato un array di oggetti letterali con:
    - url dell’immagine
    - titolo
    - descrizione
    Creare un carosello come nella foto allegata.
*/

// Costanti
const itemsContainer = document.querySelector(".items");
const thumbsContainer = document.querySelector(".thumbs");
const textImages = document.querySelector("text-items");


// Creo array per immagini carosello
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }   
];
console.log(images);

// Prelevo stringa image da array images
for (let i = 0; i < images.length; i++) {
    const thisElement = images[i];
    // Aggiungo immagini + testo al DOM
    itemsContainer.innerHTML += `<div class="item">
                                    <img src="${thisElement.image}" alt="">
                                    <div class="text-items">
                                        <p class="title">${thisElement.title}</p>
                                        <p>${thisElement.text}</p>
                                    </div>
                                </div>`;
    // Aggiungo i thumbs
    thumbsContainer.innerHTML += `<div class="thumb">
                                    <img src="${thisElement.image}" alt="" />
                                  </div>`; 
}

// Stato iniziale dello slider
const sliderItems = document.getElementsByClassName("item");
const thumbItems = document.getElementsByClassName("thumb");
let activeItem = 0;
addActive();
// Negazione in avanti con intervallo
const nextBtn = document.querySelector(".next");
const intervalImages = setInterval(function() {
    // Rimuovo classe active dall'immagine corrente
    removeActive();
    // Vado avanti fino a quando c'è l'immagine successiva
    if(activeItem < sliderItems.length - 1) {
        // Incremento slider
        activeItem++;
    } else {
        // Altrimenti vado all'immagine iniziale e ricomincio
        activeItem = 0;
    }
    // Aggiungo classe active dall'immagine corrente
    addActive();
}, 3000);
 
// Negazione in avanti normale
nextBtn.addEventListener("click", function() {
    // Rimuovo classe active dall'immagine corrente
    removeActive();
    // Vado avanti fino a quando c'è l'immagine successiva
    if(activeItem < sliderItems.length - 1) {
        // Incremento slider
        activeItem++;
    } else {
        // Altrimenti vado all'immagine iniziale e ricomincio
        activeItem = 0;
    }
    // Aggiungo classe active dall'immagine corrente
    addActive();
});


// Navigazione indietro 
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function() {
    // Rimuovo classe active dall'immagine corrente
    removeActive();
    // Vado indietro fino a quando esiste l'immagine precedente
    if(activeItem > 0) {
        // Decremento slider
        activeItem--;
    } else {
        // Altrimenti vado all'immagine finale
        activeItem = sliderItems.length - 1;
    }
    // Aggiungo classe active dall'immagine corrente
    addActive();
});

// Al click sull'immagine del thumb cambio immagine 
for(let i = 0; i < thumbItems.length; i++) {
    const thisThumb = thumbItems[i];
    thisThumb.addEventListener("click", function(){
        // Rimuovo class active
        removeActive();
        // Prendo l'indice dell'immagine cliccata e lo salvo in activeItem
        activeItem = i;
        // Aggiungo class active all'immagine cliccata
        addActive();
    });
}

/*                             FUNZIONI                         */
/**
 * Description: funzione che toglie active all'immagine 
 */
function removeActive () {
    sliderItems[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.remove("active");
};

/**
 * Description: funzione che aggiunge active all'immagine 
 */
function addActive () {
    sliderItems[activeItem].classList.add("active");
    thumbItems[activeItem].classList.add("active");
};

