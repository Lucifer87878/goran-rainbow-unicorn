// Steg 7: Skapa en array med strängar
var djurArray = ["apa", "orangutang", "gorilla", "get", "giraff"];
// Steg 8: Skriv ut arrayen med console.log
console.log(djurArray);
// Steg 10: Kör programmet med node app.js och kolla att arrayen skrivs ut i kommandotolken
// Steg 12: Skapa ett objekt med tre egenskaper
var minObjekt = {
    strang: "Hej, jag är en sträng",
    siffra: 42,
    boolean: true,
};
// Skriv ut objektet till console och testkör
console.log(minObjekt);
// Steg 14: Skriv en funktion som tar emot en sträng och returnerar en sträng
function hälsning(str) {
    return "Hej " + str;
}
// Steg 15: Loopa igenom arrayen av strängar och kör funktionen på varje sträng
for (var i = 0; i < djurArray.length; i++) {
    var resultat = hälsning(djurArray[i]);
    console.log(resultat);
}
