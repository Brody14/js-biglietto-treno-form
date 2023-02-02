// console.log('Lessort')


// 1. avviare il calcolo del costo al click del pulsante
//    a. recuperare elementi html

const btnElement = document.querySelector('input[type="button"]');
const inputKmElement = document.querySelector('input[name="km"]');
const selectAgeElement = document.querySelector('select[name="age"]');
const nameElement = document.querySelector('input[name="first-last-name"]');
// console.log(nameElement)

// console.log(btnElement, inputKmElement, selectAgeElement);

//    b. aggiungere evento

btnElement.addEventListener('click', function() {

// 2. calcolare il prezzo del biglietto
    //    a. definire il prezzo del biglietto

    const KM_PRICE = 0.21;
    
    //    b. recuperare i dati inseriti dall'utente e calcolare prezzo

    let km = parseFloat(inputKmElement.value);

    if(isNaN(km)) {
        km = 10;
    }

    ticketPrice = KM_PRICE * km ;
    const luckElement = document.getElementById('good-luck');

    if(km >= 100) {
        luckElement.innerHTML = 'Ti fidi eh?!'; 
    }

 
    // console.log(inputKmElement.value);
    // console.log(ticketPrice);

    //    c. applica eventuale sconto

    const discountElement = document.getElementById('discount');
    let sconto = 0; 
    discountElement.innerHTML = '0';

    if (selectAgeElement.value === 'underage') {
        // console.log('Exum');
        sconto = ticketPrice * 0.2;
        discountElement.innerHTML = '20%';
       // console.log('under', sconto);
    } else if (selectAgeElement.value === 'over') {
        // console.log('Avramovic');
        sconto = ticketPrice * 0.4;
        discountElement.innerHTML = '40%';
       // console.log('over', sconto);
    } 

    //    d. stampare i dati

    const canvaElement = document.getElementById('canva');
    canvaElement.classList.toggle('canva');

    const infoElement = document.getElementById('info');
    infoElement.innerHTML = nameElement.value;
    
    const priceElement = document.getElementById('price');

    
    const finalPrice = ticketPrice - sconto;
    priceElement.innerHTML = finalPrice.toFixed(2) + '€';

})

// bottone reset

const resetElement = document.querySelector('input[type="reset"');
// console.log(resetElement);

resetElement.addEventListener('click', function() {
    inputKmElement.value = ' ';
    selectAgeElement.value = ' ';
    nameElement.value = ' ';
})