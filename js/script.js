const btn = document.getElementById('calcola')
btn.addEventListener('click', function () {
    const name = document.getElementById('nome').value;
    const km = document.getElementById('km').value;
    const age = document.getElementById('eta').value
    let discount = 0
    if (age === 'minorenne') {
        discount = 0.2
    }else if (age === 'over65') {
        discount = 0.4
    }
    const priceFull = km * 0.21
    const priceDiscount = priceFull - (priceFull * discount)
    let tipoBiglietto = "Biglietto Standard"
    if (discount != 0) {
        tipoBiglietto = "Biglietto Scontato"
    }
    
});