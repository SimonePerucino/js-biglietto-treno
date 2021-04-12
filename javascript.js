var etaUtente = prompt("quanti anni hai?");
var kmUtente = prompt("quanti kilometri vuoi percorrere");

var prezzo = kmUtente * 0.21;


if (Number.isNaN(etaUtente) || Number.isNaN(kmUtente) || etaUtente === "" || kmUtente === "") {
    alert("dati mancanti")
} else if (etaUtente <= 17) {
    Sconto = ((prezzo / 100) * 20)
    PrezzoScontato = prezzo - Sconto
    console.log("il prezzo del biglietto è" + PrezzoScontato + "€")
} else if (etaUtente >= 65) {
    Sconto = ((prezzo / 100) * 40)
    PrezzoScontato = prezzo - Sconto
    console.log("il prezzo del biglietto è" + PrezzoScontato + "€")
} else {
    console.log("il prezzo del biglietto è" + prezzo + "€")
}



