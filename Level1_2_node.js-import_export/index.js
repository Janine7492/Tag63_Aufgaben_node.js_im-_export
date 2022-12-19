import { names, numbers } from "./data.js";

import { firstFunc, secondFunc, thirdFunc, fourthFunc, fifthFunc, sixthFunc, seventhFunc, randomFunc, firstLetterUp, allTextUp, lastLetter } from "./functions.js";

console.log("erste Funktion")
console.log(firstFunc(names));
console.log(firstFunc(numbers));

console.log("zweite Funktion")
console.log(secondFunc(names));
console.log(secondFunc(numbers));

console.log("dritte Funktion")
console.log(thirdFunc(names));
console.log(thirdFunc(numbers));

console.log("vierte Funktion")
console.log(fourthFunc(names));
console.log(fourthFunc(numbers));

console.log("fünfte Funktion")
console.log(fifthFunc(names, "Simon"));
console.log(fifthFunc(numbers, 4));

console.log("sechste Funktion")
console.log(sixthFunc(names));
console.log(sixthFunc(numbers));

console.log("siebte Funktion");
console.log(seventhFunc(numbers));

console.log("random Number")
console.log(randomFunc(5, 10));

console.log("erster Buchstabe groß");
console.log(firstLetterUp("test"));

console.log("alles groß geschrieben");
console.log(allTextUp("dieS ist ein Test"));

console.log("Prüfung ob letzter Buchstabe gleich");
console.log(lastLetter("Test", "p"));