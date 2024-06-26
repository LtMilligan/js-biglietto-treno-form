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
    document.getElementById('nomePasseggero').innerHTML = name;
    document.getElementById('tipoBiglietto').innerHTML = tipoBiglietto;
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10 + 1);
    document.getElementById('codiceCP').innerHTML = Math.floor(Math.random() * 90000 + 10000);
    document.getElementById('costoBiglietto').innerHTML = priceDiscount.toFixed(2);
});