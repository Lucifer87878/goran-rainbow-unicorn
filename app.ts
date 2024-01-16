// en Array med djur som sen skrivs ut i consolen
const animal = ["apa", "orangutang", "gorilla", "get", "giraff"];

console.log(animal);

//Skapa objekt med tre egenskaper och skriva ut i consolen 
const mittObjekt = {
  strang: "Hi, I'm a string",
  siffra: 42,
  boolean: true,
};

console.log(mittObjekt);

//funktion som tar emot en sträng och returnerar en sträng
function greeting(str) {
  return "Hi " + str;
}

//Loopa igenom arrayen av strängar och kör funktionen på varje sträng
for (let i = 0; i < animal.length; i++) {
  const outcome = greeting(animal[i]);
  console.log(outcome);
}
