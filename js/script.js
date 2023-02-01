// console.log('Lessort')


// 1. avviare il calcolo del costo al click del pulsante
//    a. recuperare elementi html

const btnElement = document.querySelector('input[type="button"]');
const inputKmElement = document.querySelector('input[name="km"]');
const selectAgeElement = document.querySelector('select[name="age"]');

// console.log(btnElement, inputKmElement, selectAgeElement);

//    b. aggiungere evento

btnElement.addEventListener('click', function() {

    console.log('Micov')
})
// 2. calcolare il prezzo del biglietto
//    a. definire il prezzo del biglietto
//    b. recuperare i km inseriti dall'utente
//    c. recuperare i dati dalla select
//    d. applica eventuale sconto
//    e. stampare il costo