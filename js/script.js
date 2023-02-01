// console.log('Lessort')


// 1. avviare il calcolo del costo al click del pulsante
//    a. recuperare elementi html

const btnElement = document.querySelector('input[type="button"]');
const inputKmElement = document.querySelector('input[name="km"]');
const selectAgeElement = document.querySelector('select[name="age"]');

// console.log(btnElement, inputKmElement, selectAgeElement);

//    b. aggiungere evento

btnElement.addEventListener('click', function() {

// 2. calcolare il prezzo del biglietto
    //    a. definire il prezzo del biglietto

    const KM_PRICE = 0.21;
    
    //    b. recuperare i km inseriti dall'utente e calcolare prezzo

    ticketPrice = KM_PRICE * inputKmElement.value;
    // console.log(inputKmElement.value);
    // console.log(ticketPrice);

    //    c. applica eventuale sconto

    let sconto = 0; 

    if (selectAgeElement.value === 'underage') {
        // console.log('Exum');
        sconto = ticketPrice * 0.2;
       // console.log('under', sconto);
    } else if (selectAgeElement.value === 'over') {
        // console.log('Avramovic');
        sconto = ticketPrice * 0.4;
       // console.log('over', sconto);
    }

    //    d. stampare il costo
    
    const finalPrice = ticketPrice - sconto;
    console.log(finalPrice.toFixed(2));

})