/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// Risposta 1.

let number1 = 3;
let number2 = 2;

let max = (number1 > number2) ? number1 : number2;

console.log("Il numero piu grande è :" +  max);



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 2.

let number = number1 !== number2;
if (number !== 5) { 
console.log("notEqual");
}
else {
  console.log("Equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 4.

let numero = 10;

if (numero % 5 === 0) {
  console.log("Divisibile per 5");
}
else {
  console.log("Non divisibile");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 4.

let num1 = 5;
let num2 = 3;

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
  console.log("Il valore è giusto 8");
}
else {
  console.log("Il valore non è giusto");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 5.

// Saldo totale del carrello è una probalita
let totalShoppingCart = 55;
let shippingCost = 10;
if (totalShoppingCart > 50) {
  shippingCost = 0;
}
let totalAmount = totalShoppingCart + shippingCost;
console.log("Ammontare totale da addebitare all'utente per il checkout:", totalAmount);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// Risposta 7.

/* SCRIVI QUI LA TUA RISPOSTA */

// Saldo totale del carrello (prima del Black Friday)
let totalShoppingCart2 = 55;

// Applichiamo lo sconto del 20%
let discount = 0.20;
let discountedTotal = totalShoppingCart2 * (1 - discount);
let shippingCost2 = 10;
if (discountedTotal > 50) {
  shippingCost = 0;
}
let totalAmount2 = discountedTotal + shippingCost;
console.log("Ammontare totale da addebitare all'utente per il checkout:", totalAmount);



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 7.


// Definizione delle variabili con valori numerici
let a = 15;
let b = 5;
let c = 20;

let first, second, third;

if (a >= b && a >= c) {
  first = a;
  if (b >= c) {
    second = b;
    third = c;
  } else {
    second = c;
    third = b;
  }
} else if (b >= a && b >= c) {
  first = b;
  if (a >= c) {
    second = a;
    third = c;
  } else {
    second = c;
    third = a;
  }
} else {
  first = c;
  if (a >= b) {
    second = a;
    third = b;
  } else {
    second = b;
    third = a;
  }
}
console.log("Variabili ordinate dal più alto al più basso:", first, second, third);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 8.

console.log(typeof 42);
// console output: "number"
console.log(typeof 'blubber');
// console output: "boolean"


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 9.

let d = 13;

if (d % 2 === 0) {
  console.log(number + " è un numero pari.");
} else {
  console.log(number + " è un numero dispari.");
}




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 10.

let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 10) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 11.

const me = {
  name: 'John',
  lastName: 'Doe',
  city: ['Toronto'],
  skills: ['javascript', 'html', 'css'],
}


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 12.

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 13.

delete me.skills.pop('css'),
console.log(me);

/* ESERCIZIO 14
  
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 14.

let obj = {}

for (let i = 1; i <= 10; i++ ) {
  obj[10] = i;
}
console.log(obj);
  

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Risposta 15.

obj[10] = 100;

console.log(obj);


